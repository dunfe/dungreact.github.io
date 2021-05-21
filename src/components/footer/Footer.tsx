import * as React from 'react'
import styled from 'styled-components'

const Footer = (): JSX.Element => {
    return (
        <StyledFooter>
            <FooterContainer>
                <FooterInner>
                    <FooterLogo>Chưa biết viết gì.</FooterLogo>
                    <FooterMenu>
                        <MenuInner />
                        <MenuInner>
                            <MenuTitle>MENU</MenuTitle>
                            <MenuLink>About</MenuLink>
                            <MenuLink>Portfolio</MenuLink>
                            <MenuLink>Blog</MenuLink>
                            <MenuLink>Contact</MenuLink>
                        </MenuInner>
                        <MenuInner>
                            <MenuTitle>CHANNELS</MenuTitle>
                            <MenuLink>
                                Facebook{' '}
                                <StyledSvg
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 100 100"
                                    width="15"
                                    height="15"
                                    className="css-83uoqv"
                                >
                                    <path
                                        fill="currentColor"
                                        d="
      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
    "
                                    />
                                    <polygon
                                        fill="currentColor"
                                        points="
      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
      14.9 62.8,22.9 71.5,22.9
      "
                                    />
                                </StyledSvg>
                            </MenuLink>
                            <MenuLink>
                                Github{' '}
                                <StyledSvg
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 100 100"
                                    width="15"
                                    height="15"
                                    className="css-83uoqv"
                                >
                                    <path
                                        fill="currentColor"
                                        d="
      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
    "
                                    />
                                    <polygon
                                        fill="currentColor"
                                        points="
      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
      14.9 62.8,22.9 71.5,22.9
      "
                                    />
                                </StyledSvg>
                            </MenuLink>
                            <MenuLink>
                                Stackoverflow{' '}
                                <StyledSvg
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 100 100"
                                    width="15"
                                    height="15"
                                    className="css-83uoqv"
                                >
                                    <path
                                        fill="currentColor"
                                        d="
      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
    "
                                    />
                                    <polygon
                                        fill="currentColor"
                                        points="
      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
      14.9 62.8,22.9 71.5,22.9
      "
                                    />
                                </StyledSvg>
                            </MenuLink>
                            <MenuLink>
                                Discord{' '}
                                <StyledSvg
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 100 100"
                                    width="15"
                                    height="15"
                                    className="css-83uoqv"
                                >
                                    <path
                                        fill="currentColor"
                                        d="
      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
    "
                                    />
                                    <polygon
                                        fill="currentColor"
                                        points="
      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
      14.9 62.8,22.9 71.5,22.9
      "
                                    />
                                </StyledSvg>
                            </MenuLink>
                        </MenuInner>
                    </FooterMenu>
                </FooterInner>
            </FooterContainer>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #20232a;
    color: #ffffff;
    padding-top: 10px;
    padding-bottom: 50px;
`
const FooterContainer = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;

    width: 90%;
`
const FooterInner = styled.div`
    display: flex;
    flex-direction: row;
`
const FooterLogo = styled.div`
    padding-top: 40px;
    width: calc(100% / 3);
`
const FooterMenu = styled.menu`
    display: flex;
    width: calc(100% / 3 * 2);
`
const MenuInner = styled.div`
    display: inline-flex;
    flex-direction: column;
    width: 25%;
`
const MenuTitle = styled.div`
    color: #999;
    font-size: 14px;
    font-weight: 700;
    line-height: 3;
    text-transform: uppercase;
    text-align: start;
    letter-spacing: 0.08em;
`
const MenuLink = styled.a`
    line-height: 2;
    text-align: left;
`
const StyledSvg = styled.svg`
    vertical-align: -2px;
    display: inline-block;
    margin-left: 5px;
    color: #6d6d6d;
`

export default Footer
