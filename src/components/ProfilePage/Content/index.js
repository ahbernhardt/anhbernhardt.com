import React from 'react'
import Head from '../../Elements/Head'
import { META } from '../../../utils/constants'
import { ContentWrapper } from '../../../style/shared'
import ProfileIntroSection from '../IntroSection'
import ProfileListItem from '../ListItem'
import EventListItem from '../EventListItem'
import ProfileList from '../List'
import {ListsSection, SkillsList, TimelinesSection} from './style'


export default ({ data }) => {
    const { timelines, designs, languages, frameworks, tools } = data
    return (
        <ContentWrapper>
            <Head
                {...META.profile}
                image={META.common.image}
            />

            <ProfileIntroSection />

            <TimelinesSection>
                {timelines.edges.length > 0 &&
                <ProfileList
                    title='Timeline'
                    list={() => timelines.edges.map(({ timeline }, i) => (
                        <EventListItem
                            key={i}
                            {...timeline}
                        />
                    ))}
                />}
            </TimelinesSection>

            <ListsSection>
                {designs.edges.length > 0 &&
                <SkillsList
                    title='Design'
                    list={() => designs.edges.map(({ design }, i) => (
                        <ProfileListItem
                            key={i}
                            {...design}
                        />
                    ))}
                />}

                {languages.edges.length > 0 &&
                <SkillsList
                    title='Languages'
                    list={() => languages.edges.map(({ language }, i) => (
                        <ProfileListItem
                            key={i}
                            {...language}
                        />
                    ))}
                />}

                {frameworks.edges.length > 0 &&
                <SkillsList
                    title='Frameworks'
                    list={() => frameworks.edges.map(({ framework }, i) => (
                        <ProfileListItem
                            key={i}
                            {...framework}
                        />
                    ))}
                />}

                {tools.edges.length > 0 &&
                <SkillsList
                    title='Tools'
                    list={() => tools.edges.map(({ tool }, i) => (
                        <ProfileListItem
                            key={i}
                            {...tool}
                        />
                    ))}
                />}
            </ListsSection>
        </ContentWrapper>
    )
}
