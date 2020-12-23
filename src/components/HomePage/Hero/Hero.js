import React, { Component } from "react"
import Things from './things.svg'
import { HeaderWrap, HeroHeader, SVGWrapper, Wrapper } from "./style"

class Hero extends Component {

  componentDidMount() {
    const canvas = this.refs.particles
    const ctx = canvas.getContext("2d")
    const tempcanvas = document.createElement("canvas")
    const tempctx = tempcanvas.getContext("2d")
    canvas.width = 640;
    canvas.height = 130;
    canvas.style.width = 640 + "px";
    canvas.style.height = 130 + "px";
    const W = 640
    const H = 130
    const mp = 100
    const particles = []
    const PI2 = Math.PI * 2
    const imgs = []

    for (let i = 0; i < mp; i++) {
      const colors = ["#ffcc00", "#ff9500", "#ff3b30", "#ff5e3a"]
      const color = colors[Math.floor(Math.random() * colors.length)]
      particles.push({
        x: Math.floor(Math.random() * W),
        y: Math.floor(Math.random() * H),
        z: Math.floor(Math.random() * mp),
        d: Math.floor(Math.random() * (4 - 1) + 1),
        r: Math.floor(Math.random() * (30 - 15) + 15),
        o: color
      });

      const p = particles[i]
      tempcanvas.width = tempcanvas.height = p.r * 2;
      tempctx.fillStyle = p.o;
      tempctx.beginPath();
      tempctx.arc(p.r, p.r, p.r, 0, PI2, false);
      tempctx.closePath();
      tempctx.fill();
      const img = new Image()
      img.src = tempcanvas.toDataURL();
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
          p.y = 130;
          p.x = ~~ (Math.random() * W);
        }
        ctx.drawImage(imgs[i], p.x, p.y);
      }
    }
    animate();
  } render() {
    return (
      <Wrapper>
        <header>
          <div className="headerWrap">
            <canvas ref="particles"/>
            <Things width={640} height={130}/>
          </div>
        </header>
      </Wrapper>
    )
  }
}


export default Hero
