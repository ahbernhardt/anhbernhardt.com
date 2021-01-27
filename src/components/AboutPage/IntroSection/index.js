import React from 'react'
import { Wrapper, InfoWrapper, Content, StyledImage, TopWrapper, Title } from "./style"
import { Loader } from '../../../style/shared'

const ProfileIntroSection = () =>
    <Wrapper>
        <InfoWrapper>
          <TopWrapper >
              <Title>
                My name is <span className="name">Anh Nguyen</span>, a software engineer graduate student based in Minneapolis, MN specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.
              </Title>
          </TopWrapper>
          <Content>
            As a software engineer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product.
            I focus primarily on building, prototyping and implementing user interfaces that are usable and scalable for any web-based platform.{' '}
            <a href="https://codepen.io/ah_nguyen0208" target="_blank" rel="noopener noreferrer">I enjoy experimenting</a> and
            <a href="https://github.com/anguyen0208" target="_blank" rel="noopener noreferrer"> building out</a> with new tools.

            <p>When I'm not in front of a computer screen, I'm probably camping, researching new local restaurants, building LEGO, or crossing off another item on my bucket list and share photos on <a href="https://www.instagram.com/ah_nguyen0208" target="_blank" rel="noopener noreferrer">Instagram</a>.</p>
          </Content>
        </InfoWrapper>
        <StyledImage
            src="/images/profile/me.jpg"
            alt="Anh Nguyen - Software Engineer"
            loader={({ isLoaded }) => <Loader isLoaded={isLoaded} />}
            sources={[{
                media: 'max-width: 25rem',
                srcset: [
                    '/images/profile/me.jpg'
            ]
            }]}
        />
    </Wrapper>

export default ProfileIntroSection
