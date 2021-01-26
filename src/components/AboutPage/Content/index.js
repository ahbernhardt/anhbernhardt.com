import React from 'react'
// import Head from '../../Elements/Head'
// import { META } from '../../../utils/constants'
import { ContentWrapper } from '../../../style/shared'
import AboutIntroSection from '../IntroSection'
import TimelineListItem from '../TimelineSection/TimelineItem'
import TimelineList from '../TimelineSection/TimelineList'
import {ListsSection, TimelinesSection} from './style'
import EachSkillList from '../SkillsSection/EachSkillList'
import SkillListItem from '../SkillsSection/ListItem'

export default ({ data }) => {
    const { timelines, designs, languages, frameworks, tools } = data
    return (
        <ContentWrapper>
            {/*<Head*/}
            {/*    {...META.profile}*/}
            {/*    image={META.common.image}*/}
            {/*/>*/}

            <AboutIntroSection />

            <TimelinesSection>
                {timelines.edges.length > 0 &&
                <TimelineList
                    title='Timeline'
                    list={() => timelines.edges.map(({ timeline }, i) => (
                        <TimelineListItem
                            key={i}
                            {...timeline}
                        />
                    ))}
                />}
            </TimelinesSection>

            <ListsSection>
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
            </ListsSection>
        </ContentWrapper>
    )
}
