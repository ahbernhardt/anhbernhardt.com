import React from 'react'
import Intro from '../../Welcome/Intro'
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
                media: 'max-width: 30rem',
                srcset: [
                    '/images/profile/me.jpg'
            ]
            // },{
            //     srcset: [
            //         '/images/profile/me-blackandwhite.JPG'
            //     ]
            }]}
        />
    </Wrapper>

export default ProfileIntroSection
