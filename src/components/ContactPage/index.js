import React, { useEffect, useRef } from "react"
import { ContentWrapper, Wrapper, Email, SocialSection} from "./styles"
import { srConfig } from "@config"
import sr from "@utils/sr"
import EmailLink from "../Elements/EmailLink"
import SubContact from "./SubTitle"



export default ({  }) => {
  const revealEmail = useRef(null)
  const revealTagline = useRef(null)
  const revealSocial = useRef(null)

  useEffect(() => {
    sr.reveal(revealEmail.current, srConfig(50))
    sr.reveal(revealTagline.current, srConfig(200))
    sr.reveal(revealSocial.current, srConfig(200));
  }, [])

  return (
  <ContentWrapper>
    <Wrapper>
      <Email ref={revealEmail}>
        SIMPLY SEND ME AN <span><EmailLink text=" Email"/></span>.
      </Email>

      <SubContact ref={revealTagline}/>

      <SocialSection ref={revealSocial}>
        {/* Github */}
          <a href="https://github.com/ahbernhardt" rel="noopener noreferrer" target="_blank">Github↗</a>
        {/* Codepen */}
          <a href="https://codepen.io/ah_nguyen0208" rel="noopener noreferrer" target="_blank">Codepen↗</a>
        {/* LinkedIn*/}
          <a href="https://linkedin.com/in/anhbernhardt/" rel="noopener noreferrer" target="_blank">LinkedIn↗</a>
        {/* Resume */}
          <a href="https://drive.google.com/file/d/1vWPM1YITSPG9h0JI4S7zEmqssvIadnzq/view?usp=sharing" rel="noopener noreferrer" target="_blank">Resume↗</a>
      </SocialSection>
    </Wrapper>
  </ContentWrapper>
  )
}
