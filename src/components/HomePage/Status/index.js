import { Wrapper, StatusLight, StatusMessage, StatusRing, StatusLed } from "./style"
import React from 'react'

const Status = () =>
  <Wrapper>
    <StatusLight>
      <StatusRing />
      <StatusLed />
    </StatusLight>
    <StatusMessage>
      currently unavailable for hiring
    </StatusMessage>
  </Wrapper>

export default Status
