import React, { useEffect, useRef } from "react"
// import { ContentWrapper } from '../../../style/shared'
import AboutIntroSection from "../IntroSection"
import { ContentWrapper, ContentInfo, SkillsSection, TimelinesSection } from "./style"
import EachSkillList from "../SkillsSection/EachSkillList"
import SkillListItem from "../SkillsSection/ListItem"
import { srConfig } from "@config"
import sr from "@utils/sr"
// import { KEY_CODES } from '../../../utils';
// import TimelineListItem from '../TimelineSection/TimelineItem'
// import TimelineList from '../TimelineSection/TimelineList'

export default ({ data }) => {
  const { timelines, designs, languages, frameworks, tools } = data
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <ContentWrapper>
      <ContentInfo>
        <p>As a software engineer, I enjoy bridging the gap between engineering and design — combining my technical
          knowledge with my keen eye for design to create a beautiful product.
          I focus primarily on building, prototyping and implementing user interfaces that are usable and scalable for
          any web-based platform.{" "}
          <a href="https://codepen.io/ah_nguyen0208" target="_blank" rel="noopener noreferrer">I enjoy
            experimenting</a> and
          <a href="https://github.com/anguyen0208" target="_blank" rel="noopener noreferrer"> building out</a> with new
          tools.
        </p>

        <p>When I'm not in front of a computer screen, I'm probably camping, researching new local restaurants, building
          LEGO, or crossing off another item on my bucket list and share photos
          on <a href="https://www.instagram.com/ah_nguyen0208" target="_blank" rel="noopener noreferrer">Instagram</a>.
        </p>
      </ContentInfo>
      {/*<AboutIntroSection />*/}

      {/*<TimelinesSection>*/}
      {/*    {timelines.edges.length > 0 &&*/}
      {/*    <TimelineList*/}
      {/*        title='Timeline'*/}
      {/*        list={() => timelines.edges.map(({ timeline }, i) => (*/}
      {/*            <TimelineListItem*/}
      {/*                key={i}*/}
      {/*                {...timeline}*/}
      {/*            />*/}
      {/*        ))}*/}
      {/*    />}*/}
      {/*</TimelinesSection>*/}

      <SkillsSection ref={revealContainer}>
        {designs.edges.length > 0 &&
        <EachSkillList
          title='Design'
          list={() => designs.edges.map(({ design }, i) => (
            <SkillListItem
              key={i}
              {...design}
            />
          ))}
        />}

        {languages.edges.length > 0 &&
        <EachSkillList
          title='Languages'
          list={() => languages.edges.map(({ language }, i) => (
            <SkillListItem
              key={i}
              {...language}
            />
          ))}
        />}

        {frameworks.edges.length > 0 &&
        <EachSkillList
          title='Frameworks'
          list={() => frameworks.edges.map(({ framework }, i) => (
            <SkillListItem
              key={i}
              {...framework}
            />
          ))}
        />}

        {tools.edges.length > 0 &&
        <EachSkillList
          title='Tools'
          list={() => tools.edges.map(({ tool }, i) => (
            <SkillListItem
              key={i}
              {...tool}
            />
          ))}
        />}
      </SkillsSection>
    </ContentWrapper>
  )
}
