import * as React from 'react'
import styled from 'styled-components'

const Title = (): JSX.Element => {
    return (
        <>
            <BannerTitle>Dũng React</BannerTitle>
            <BannerSubtitle>
                A poor guy reaching expert on Software Engineering
            </BannerSubtitle>
        </>
    )
}

const BannerTitle = styled.h1`
    font-size: 60px;
    text-align: center;

    margin: 0;

    color: #61dafb;
`
const BannerSubtitle = styled.p`
    padding-top: 3px;
    font-size: 30px;
    font-weight: 200;

    margin: 0;
`

export default Title
