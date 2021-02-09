import React, { useEffect, useRef } from "react"
import { ContentWrapper} from "./styles"
import { srConfig } from "@config"
import sr from "@utils/sr"
// import ProjectList from "../ProjectList"
import ProjectItem from "../ProjectItem"
import { EachProject, HoverImage, HoverInner, HoverReveal, ProjectImage } from "../ProjectItem/style"
import { Loader } from "../../../style/shared"
import { media } from "../../../style/constants"

  export default ({ data }) => {
    const { projects} = data
    const revealProject = useRef(null)
    // const revealSocial = useRef(null)

    useEffect(() => {
      sr.reveal(revealProject.current, srConfig(200))
    }, [])

    return (
      <ContentWrapper ref={revealProject}>
        {projects.edges.length > 0 &&
        projects.edges.map(({ project }, i) => (
          <ProjectItem key={i}
            {...project} />))}

        {projects.edges.length > 0 &&
          projects.edges.map(({ project }, i, [imageLink,imageTitle]) => (
            <HoverReveal className="imageReveal">
              <HoverInner>
                <ProjectImage key={i}
                // src="/images/profile/brightest-lights---lane-8.jpg"
                src={project.imageLink}
                alt={imageTitle}
                loader={({ isLoaded }) => <Loader isLoaded={isLoaded} />}
                sources={
                  [{ srcset: [
                      // '/images/profile/brightest-lights---lane-8.jpg'
                  {imageLink}
                ]}]}
                />
              </HoverInner>
            </HoverReveal>
          ))
        }
      </ContentWrapper>
    )
  }
