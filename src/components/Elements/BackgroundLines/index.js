import React from 'react'
import {BlockLines, Col, Lines } from "./style"

const BackgroundLines = () =>
    <BlockLines>
      <Col>
        <Lines/>
        <Lines/>
      </Col>
      <Col>
        {/* 3 columns */}
        <Lines/>
        <Lines/>
        <Lines/>
        <Lines/>

        {/* add this to make 4 columns */}
        {/*<Lines/>*/}
      </Col>
    </BlockLines>


export default BackgroundLines
