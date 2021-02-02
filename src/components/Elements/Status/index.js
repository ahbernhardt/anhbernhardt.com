import { Wrapper, StatusLight, StatusMessage, StatusRing, StatusLed } from "./style"
import React from 'react'

const Status = () =>
  <Wrapper>
    <StatusLight>
      <StatusRing />
      <StatusLed />
    </StatusLight>
    <StatusMessage>
      available for full-time hire
    </StatusMessage>
  </Wrapper>

export default Status
