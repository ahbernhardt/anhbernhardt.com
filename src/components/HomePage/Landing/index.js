import { Wrapper, LandingTitle, EachBlockText, EachBlockOutlineText, StatusWrapper } from "./style"
import React, { useEffect, useRef } from "react"
import Status from "../Status"
import { srConfig } from "../../../config"
import sr from "../../../utils/sr"
import SubLandingTitle from "../SubTitle"

const LandingHero = () => {
  const revealLanding = useRef(null);
  const revealStatus = useRef(null);

  useEffect(() => {
    sr.reveal(revealLanding.current, srConfig(100));
    sr.reveal(revealStatus.current, srConfig(100));
  }, []);

  return (
    <Wrapper>
      <LandingTitle ref={revealLanding}>
        <EachBlockOutlineText>Front-End</EachBlockOutlineText>
        <EachBlockText>Developer & Designer</EachBlockText>
        <SubLandingTitle />
        <StatusWrapper ref={revealStatus}>
          <Status />
        </StatusWrapper>
      </LandingTitle>
    </Wrapper>
  )
}
export default LandingHero;
