import React from 'react'
import { Header, HeaderTitle} from './style'

const PageHeader = ({title}) =>
    <Header>
      <HeaderTitle data-title={title}>{title}—</HeaderTitle>
    </Header>

export default PageHeader
