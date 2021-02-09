import React from 'react'
import {ProjectWrapper, EachProject, Text, Inner, TitleSub} from "./style"

const ProjectItem = ({ title, company, url }) =>
    <ProjectWrapper className="menu">
      <EachProject href={url} target='_blank'>
        <Text>
          <Inner>
            <span>{title}</span>
          </Inner>
          <TitleSub className="titleSub">
            {company}
          </TitleSub>
        </Text>
      </EachProject>
    </ProjectWrapper>

export default ProjectItem
