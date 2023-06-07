import {  Wrapper } from "./style"
import React,{Component} from "react"

class Switch extends Component {
  function() {
    const d = new Date();
    const hours = d.getHours();
    const night = hours >= 19 || hours <= 7; // between 7pm and 7am
    const body = document.querySelector('body');
    const toggle = document.getElementById('toggle');
    const input = document.getElementById('switch');

    if (night) {
      input.checked = true;
      body.classList.add('night');
    }

    toggle.addEventListener('click', function() {
      const isChecked = input.checked;
      if (isChecked) {
        body.classList.remove('night');
      } else {
        body.classList.add('night');
      }
    });
  } render() {
    return (
      <Wrapper>
        <div className="sun" />
        <div className="toggle-wrapper">
          <input id="switch" type="checkbox" />
          <label htmlFor="switch" id="toggle">Toggle</label>
        </div>
        <div className="moon" />
      </Wrapper>
    )
  }
}
export default Switch;
