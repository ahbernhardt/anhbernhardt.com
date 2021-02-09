import React from 'react'
import { ProjectWrapper, EachProject, Text, Inner, TitleSub, HoverInner, ProjectImage, HoverReveal } from "./style"
import { Loader } from "../../../style/shared"

const ProjectItem = ({ title, company,imageLink,imageTitle, url }) =>
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
        <HoverReveal className="imageReveal">
          <HoverInner>
            <ProjectImage
                src={imageLink}
                alt={imageTitle}
                loader={({ isLoaded }) => <Loader isLoaded={isLoaded} />}
                sources={
                  [{ srcset: [
                      {imageLink}
                  ]}]
                }
            />
          </HoverInner>
        </HoverReveal>
      </EachProject>
    </ProjectWrapper>

export default ProjectItem
