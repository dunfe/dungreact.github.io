import React from 'react'
import './App.scss'
import Header from '../components/header/Header'
import Content from '../components/content/Content'
import Footer from '../components/footer/Footer'

const App = (): JSX.Element => {
    return (
        <div className="App">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default App
