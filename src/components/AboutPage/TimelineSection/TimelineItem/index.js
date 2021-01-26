import React from 'react'
import { ListItem } from '../../../../style/shared'
import { Wrapper, Year, Position, Company, Description, Left } from "./style"

const EventListItem = ({ year, position, company, description }) =>
    <ListItem>
        <Wrapper>
          <Left>
            <div className="year"><Year>{year}</Year></div>
          </Left>

          <div className="position"><Position>{position}</Position><Company>{company}</Company></div>
          <div className="description"><Description>{description}</Description></div>
        </Wrapper>
    </ListItem>

export default EventListItem
