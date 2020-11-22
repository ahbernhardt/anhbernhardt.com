import React from 'react'
import Hello from './Hello.svg'
import { Wrapper } from './style'

const HelloMiddle = () =>
    <Wrapper >
            <div className="padding">
                <h1>
                    <Hello width={428} height={343} />
                </h1>
            </div>
    </Wrapper>

export default HelloMiddle
