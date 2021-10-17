import React from 'react'
import { getCurrentYear } from '../../../utils/functions'
import { Wrapper, Item } from './style'
import EmailLink from "../EmailLink"

const Footer = () =>
    <Wrapper>
        <Item position='left'>

        </Item>
        <Item position='right' >
            {/*<a target="_blank" rel="noopener noreferrer" href='https://github.com/anguyen0208/anhnguyen.page'>Source code</a>*/}
          {/*<EmailLink text="Hello@anhnguyen.page"/>*/}
          {/*<br />*/}
          <span>◻️ </span> Anh Bernhardt _ {getCurrentYear()}

        </Item>
    </Wrapper>

export default Footer
