import React, { useEffect, useRef } from "react"
import { ContentWrapper } from '../../../style/shared'
import PageHeader from "../../Elements/PageHeader"
import AboutIntroSection from '../IntroSection'
import {SkillsSection, TimelinesSection} from './style'
import EachSkillList from '../SkillsSection/EachSkillList'
import SkillListItem from '../SkillsSection/ListItem'
import { srConfig } from '@config';
import sr from '@utils/sr';
// import { KEY_CODES } from '../../../utils';
// import TimelineListItem from '../TimelineSection/TimelineItem'
// import TimelineList from '../TimelineSection/TimelineList'

export default ({ data }) => {
  const { timelines, designs, languages, frameworks, tools } = data;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
        <ContentWrapper>
          <PageHeader title='About' />
          <AboutIntroSection />
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
