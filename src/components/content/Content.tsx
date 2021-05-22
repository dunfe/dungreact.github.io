import * as React from 'react'
import Banner from '../banner/Banner'
import styled from 'styled-components'
import About from './About'
import Projects from './Projects'

const Content = (): JSX.Element => {
    return (
        <StyledContent>
            <BannerContainer>
                <Banner />
            </BannerContainer>
            <ContentContainer>
                <About />
                <StyledHr />
                <Projects />
            </ContentContainer>
        </StyledContent>
    )
}
const StyledContent = styled.div`
    margin-top: 60px;
`
const BannerContainer = styled.div`
    background-color: #282c34;
    color: #ffffff;
`
const ContentContainer = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;

    height: 500px;

    @media (min-width: 1340px) {
        max-width: 1260px;
    }

    @media (min-width: 780px) {
        width: 90%;
    }
`
const StyledHr = styled.hr`
    height: 1px;
    margin-bottom: -1px;
    border: none;
    border-bottom: 1px solid #ececec;
    margin-top: 40px;
`

export default Content
