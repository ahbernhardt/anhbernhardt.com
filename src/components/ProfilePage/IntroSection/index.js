import React from 'react'
// import Tagline from '../../HomePage/Intro'
import { Wrapper, InfoWrapper, Content, StyledImage, TopWrapper, Title } from "./style"
import { Loader } from '../../../style/shared'

const ProfileIntroSection = ({ content }) =>
    <Wrapper>
        <InfoWrapper>
          <TopWrapper >
              <Title>
                My name is <span className="name">Anh Nguyen</span>, a software engineer graduate student based in Minneapolis, MN specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.
              </Title>
          </TopWrapper>
          <Content>{content()}</Content>
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
