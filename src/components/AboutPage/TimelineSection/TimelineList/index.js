import React from 'react'
import {TimelineSectionTitle, TimelineSectionList } from "./style"

const TimelineList = ({ title, list, className }) =>
    <article className={className}>
      <TimelineSectionTitle>{title}</TimelineSectionTitle>
      <TimelineSectionList>{list()}</TimelineSectionList>
    </article>

export default TimelineList
