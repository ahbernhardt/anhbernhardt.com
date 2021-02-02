import React from 'react'
import {EachSkillSectionTitle, EachSkillSectionList } from "./style"

const EachSkillList = ({ title, list, className }) =>
    <article className={className}>
      <EachSkillSectionTitle>{title}</EachSkillSectionTitle>
      <EachSkillSectionList>{list()} </EachSkillSectionList>
    </article>

export default EachSkillList
