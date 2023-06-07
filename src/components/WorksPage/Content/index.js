import React, { useEffect, useRef } from "react"
import { ContentWrapper} from "./styles"
import { srConfig } from "@config"
import sr from "@utils/sr"
import ProjectItem from "../ProjectItem"


  const WorkPageContent = ({ data }) => {
    const revealProject = useRef(null)
    // const revealSocial = useRef(null)

    useEffect(() => {
      sr.reveal(revealProject.current, srConfig(200))
    }, [])

    return (
      <ContentWrapper ref={revealProject}>
        {data.projects.nodes.length > 0 &&
        data.projects.nodes.map((project, i) => (
          <ProjectItem key={i}
            {...project} />))}
      </ContentWrapper>
    )
  }

  export default WorkPageContent;