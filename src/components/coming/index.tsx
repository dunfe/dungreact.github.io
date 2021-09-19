import React from 'react'
import styled from 'styled-components'

const Coming = (): JSX.Element => {
    return (
        <ComingContainer>
            <ComingContent>
                <h1>Coming soon...</h1>
            </ComingContent>
        </ComingContainer>
    )
}

const ComingContainer = styled.div`
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ComingContent = styled.div`
    font-size: 64;
    color: black;
`

export default Coming
