import React from 'react'
import Intro from '../../HomePage/Intro'
import { Wrapper, InfoWrapper, Content, StyledImage } from './style'
import { Loader } from '../../../style/shared'

const ProfileIntroSection = ({ content }) =>
    <Wrapper>
        <InfoWrapper>
            <Intro fixed={false} />
            <Content>{content()}</Content>
        </InfoWrapper>
        <StyledImage
            src="/images/profile/me.JPG"
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
