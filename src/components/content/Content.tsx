import * as React from 'react'
import Banner from '../banner/Banner'
import styled from 'styled-components'
import About from './About'

const Content = (): JSX.Element => {
    return (
        <StyledContent>
            <BannerContainer>
                <Banner />
            </BannerContainer>
            <ContentContainer>
                <About />
            </ContentContainer>
        </StyledContent>
    )
}
const StyledContent = styled.div``
const BannerContainer = styled.div`
    background-color: #282c34;
    color: #ffffff;
`
const ContentContainer = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;

    width: 90%;
    height: 500px;
`

export default Content
