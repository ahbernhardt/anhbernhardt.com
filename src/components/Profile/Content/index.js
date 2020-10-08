import React from 'react'
import Head from '../../Head'
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

            <ProfileIntroSection
                content={() =>
                    <>
                        As a software engineer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product.
                        I focus primarily on building, prototyping and implementing user interfaces that are usable and scalable for any web-based platform.{' '}
                        <a href="https://codepen.io/ah_nguyen0208" target="_blank" rel="noopener noreferrer">I enjoy experimenting</a>,
                        <a href="https://github.com/anguyen0208" target="_blank" rel="noopener noreferrer">building and trying</a> out new tools.

                        <p>When I'm not in front of a computer screen, I'm probably camping, researching new local restaurants, building LEGO, or crossing off another item on my bucket list and share photos on <a href="https://www.instagram.com/ah_nguyen0208" target="_blank" rel="noopener noreferrer">Instagram</a>.</p>
                    </>
                }
            />

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
