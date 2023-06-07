import React from 'react'
import { ProjectWrapper, EachProject, Text, Inner, TitleSub, HoverInner, ProjectImage, HoverReveal } from "./style"
import { Loader } from "../../../style/shared"

const ProjectItem = ({ title, subTitle ,imageLink,imageTitle, url }) =>
    <ProjectWrapper className="menu">
      <EachProject className="counter" href={url} target='_blank'>
        <Text className="text">
          <Inner >
            <span>{title}</span>
          </Inner>
          <TitleSub className="titleSub">
            {subTitle}
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
