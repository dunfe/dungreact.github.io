import React from 'react'
import './App.scss'
import Header from '../components/header/Header'
import Content from '../components/content/Content'
import Footer from '../components/footer/Footer'
import styled from 'styled-components'

const App = (): JSX.Element => {
    return (
        <StyledApp className="App">
            <Header />
            <Content />
            <Footer />
        </StyledApp>
    )
}

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export default App
