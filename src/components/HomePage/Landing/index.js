import { Wrapper, LandingTitle, EachBlockText, StatusWrapper } from "./style"
import React, { useEffect, useRef } from "react"
import Status from "../Status"
import { srConfig } from "../../../config"
import sr from "../../../utils/sr"

export default () => {
  const revealLanding = useRef(null);
  const revealStatus = useRef(null);

  useEffect(() => {
    sr.reveal(revealLanding.current, srConfig());
    sr.reveal(revealStatus.current, srConfig(100));
  }, []);

  return (
    <Wrapper>
      <StatusWrapper ref={revealStatus}>
        <EachBlockText/>
        <EachBlockText/>
        <EachBlockText/>
        <EachBlockText/>
          <Status />
        {/*</EachBlockText>*/}
      </StatusWrapper>
      <LandingTitle ref={revealLanding}>
        <EachBlockText>Anh</EachBlockText>
        <EachBlockText>Nguyen</EachBlockText>
        <EachBlockText>Portfolio</EachBlockText>
        <EachBlockText>'Twenty-one</EachBlockText>
      </LandingTitle>
    </Wrapper>
  )
}
// export default LandingHero
