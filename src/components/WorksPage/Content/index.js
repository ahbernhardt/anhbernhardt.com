import React, { useEffect, useRef } from "react"
import { ContentWrapper} from "./styles"
import { srConfig } from "@config"
import sr from "@utils/sr"
import ProjectItem from "../ProjectItem"
// import { HoverInner, HoverReveal, ProjectImage } from "../ProjectItem/style"
// import { Loader } from "../../../style/shared"


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
      </ContentWrapper>
    )
  }
