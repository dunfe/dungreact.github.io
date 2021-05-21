import * as React from 'react'
import styled from 'styled-components'

const About = (): JSX.Element => {
    return (
        <AboutContainer>
            <AboutItem>
                <AboutTitle>About</AboutTitle>
                <ContentContainer>
                    <AboutContent>{'Hi, my name is Dung. '}</AboutContent>
                    <AboutContent>
                        {`I'm from Vietnam. I living
                        in Ha Noi City. I like to programming, research and
                        singing,..`}
                    </AboutContent>
                </ContentContainer>
            </AboutItem>
            <AboutItem>
                <AboutTitle>School</AboutTitle>
                <ContentContainer>
                    <AboutContent>
                        {'I went to Quynh Coi high school in Thai Binh.'}
                    </AboutContent>
                    <AboutContent>
                        {`I was graduate from FPT University with a major in Software Engineering. Consider taking a Master's Degree.`}
                    </AboutContent>
                </ContentContainer>
            </AboutItem>
            <AboutItem>
                <AboutTitle>Objective</AboutTitle>
                <ContentContainer>
                    <AboutContent>{`I am seeking an opportunity to become an expert on software engineering. I'm looking for a responsible
position to gain practical experience. Enable me to use knowledge learned from school`}</AboutContent>
                </ContentContainer>
            </AboutItem>
        </AboutContainer>
    )
}
const AboutContainer = styled.section`
    margin-top: 60px;
    margin-bottom: 65px;

    display: flex;
    justify-content: space-between;
`
const AboutItem = styled.div`
    width: calc(100% / 3);
`
const AboutTitle = styled.h3`
    margin-bottom: 20px;
    color: #6d6d6d;
    padding-top: 0;
    font-weight: 300;
    font-size: 20px;
    text-align: left;
`
const ContentContainer = styled.div``
const AboutContent = styled.p`
    &:first-child {
        margin-top: 0;
    }

    margin-top: 30px;
    font-size: 17px;
    line-height: 1.7;
    max-width: 42em;
    text-align: left;
`

export default About
