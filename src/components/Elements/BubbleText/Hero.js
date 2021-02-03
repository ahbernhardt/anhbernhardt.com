import React, { Component } from "react"
import Things from './things.svg'
import { Wrapper, BubbleText, BubbleWrapper, BubbleCanvas } from "./style"

class Hero extends Component {
  componentDidMount() {
    const canvas = this.refs.particles
    const ctx = canvas.getContext("2d")
    const tempCanvas = document.createElement("canvas")
    const tempCtx = tempCanvas.getContext("2d")
    canvas.width = 825;
    canvas.height = 200;
    canvas.style.width = 825 + "px";
    canvas.style.height = 200 + "px";
    const W = 825
    const H = 200
    const mp = 100
    const particles = []
    const PI2 = Math.PI * 2
    const imgs = []

    for (let i = 0; i < mp; i++) {
      const colors = ["#ffba5c", "#27a400", "#ff3b30", "#0783fa"]
      const color = colors[Math.floor(Math.random() * colors.length)]
      particles.push({
        x: Math.floor(Math.random() * W),
        y: Math.floor(Math.random() * H),
        z: Math.floor(Math.random() * mp),
        d: Math.floor(Math.random() * (4 - 1) + 1),
        r: Math.floor(Math.random() * (16 - 15) + 12),
        o: color
      });

      const p = particles[i]
      tempCanvas.width = tempCanvas.height = p.r * 2;
      tempCtx.fillStyle = p.o;
      tempCtx.beginPath();
      tempCtx.arc(p.r, p.r, p.r, 0, PI2, false);
      tempCtx.closePath();
      tempCtx.fill();
      const img = new Image()
      img.src = tempCanvas.toDataURL();
      imgs.push(img);
    }
    function animate() {
      requestAnimationFrame(animate);
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, W, H);
      for (let i = 0; i < mp; i++) {
        const p = particles[i]
        p.y -= p.d;
        if (p.y <= - p.r*4) {
          p.y = 200;
          p.x = ~~ (Math.random() * W);
        }
        ctx.drawImage(imgs[i], p.x, p.y);
      }
    }
    animate();
  } render() {
    return (
      <Wrapper>
        <BubbleText>
          <BubbleWrapper >
            <BubbleCanvas ref="particles"/>
            <Things/>
          </BubbleWrapper>
        </BubbleText>
      </Wrapper>
    )
  }
}


export default Hero
