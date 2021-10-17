import React, { useEffect, useRef } from "react"
import { ContentWrapper, ContentInfo, ContentInfo2, SkillsSection, Subtitle, StyledImage } from "./style"
import EachSkillList from "../SkillsSection/EachSkillList"
import SkillListItem from "../SkillsSection/ListItem"
import { srConfig } from "@config"
import sr from "@utils/sr"
import { Loader } from "../../../style/shared"


export default ({ data }) => {
  const { designs, languages, frameworks, tools } = data
  const revealTitle = useRef(null);
  const revealContainer = useRef(null);
  const revealImage = useRef(null);
  const revealSkill = useRef(null);


  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig(100));
    sr.reveal(revealContainer.current, srConfig(150));
    sr.reveal(revealImage.current, srConfig(150));
    sr.reveal(revealSkill.current, srConfig());
  }, []);

  return (
    <ContentWrapper>
      <Subtitle ref={revealTitle}>
        Xin ChÀo, I'm <br/>
        <span>Anh  Benrhardt.</span>
      </Subtitle>

      {/* COLUMN 1 */}
      <ContentInfo ref={revealContainer}>
        <p>
          I’m currently completing my Master Degree in Software Engineering at <a className='hover-effect' href="https://www.stthomas.edu/gradsoftware/programs/masters/msse/" target="_blank" rel="noopener noreferrer"> University of St. Thomas</a> based in Minneapolis, Minnesota.
          I’m really into CSS, developer experience, and deleting code.
        </p>
        <p>
          As a software engineer, I enjoy bridging the gap between engineering and design — combining my technical
          knowledge with my keen eye for design to create a beautiful product.
          I focus primarily on building, prototyping and implementing user interfaces that are usable and scalable for
          any web-based platform.{" "}
          <a className='hover-effect' href="https://codepen.io/ah_nguyen0208" target="_blank" rel="noopener noreferrer">I enjoy
            experimenting</a> and <a className='hover-effect' href="https://github.com/anguyen0208" target="_blank" rel="noopener noreferrer"> building out</a> with new
          tools.
        </p>

        <p>When I'm not in front of a computer screen, I'm probably camping, researching new local restaurants, building LEGO, or crossing off another item on my bucket list and share photos
          on <a className='hover-effect' href="https://www.instagram.com/ah_nguyen0208" target="_blank" rel="noopener noreferrer">Instagram</a>.
        </p>
      </ContentInfo>

      {/* COLUMN 2 */}
      <ContentInfo2 ref={revealContainer}>
        <img src="https://media.giphy.com/media/2XrLfX86d7Nok/giphy.gif" alt=""/>
      </ContentInfo2>

      {/* COLUMN 3 */}
      <StyledImage
        src="/images/profile/me.jpg"
        alt="Anh Bernhardt - Software Engineer"
        loader={({ isLoaded }) => <Loader isLoaded={isLoaded} />}
        sources={[{
          media: 'max-width: 25rem',
          srcset: [
            '/images/profile/me.jpg'
          ]
        }]}
        ref={revealImage}
      />

      <SkillsSection ref={revealSkill}>
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
