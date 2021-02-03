import React from 'react'
import {BlockLines, Col, Lines } from "./style"

const BackgroundLines = () =>
    <BlockLines>
      <Col>
        <Lines/>
        <Lines/>
        {/*<Lines/>*/}
      </Col>
      <Col>
        <Lines/>
        <Lines/>
        <Lines/>
        <Lines/>
        {/*<Lines/>*/}
      </Col>
    </BlockLines>


export default BackgroundLines
