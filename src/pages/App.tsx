import React from 'react'
import './App.scss'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home'
import Coming from '../components/coming'
import Contact from './contact'

const App = (): JSX.Element => {
    return (
        <Router>
            <StyledApp className="App">
                <Header />
                <StyledContent>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <Coming />
                        </Route>
                        <Route path="/portfolio">
                            <Coming />
                        </Route>
                        <Route path="/blog">
                            <Coming />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </StyledContent>
                <Footer />
            </StyledApp>
        </Router>
    )
}

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 100vh;
`

const StyledContent = styled.div`
    flex: 1 0 auto;
`

export default App
