import * as React from 'react'
import styled from 'styled-components'
import Title from './Title'
import Buttons from './Buttons'

const Banner = (): JSX.Element => {
    return (
        <BannerContainer>
            <Title />
            <Buttons />
        </BannerContainer>
    )
}

const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    padding-top: 95px;
    padding-bottom: 85px;
    margin-left: auto;
    margin-right: auto;

    max-width: 1500px;

    &:before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjZmZmIi8+CiAgPGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K);
        background-repeat: no-repeat;
        background-position: 100% 100px;
        background-size: 50% auto;
        opacity: 0.05;
    }
`

export default Banner
