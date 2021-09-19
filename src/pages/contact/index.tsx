import React from 'react'
import styled from 'styled-components'

const Contact = (): JSX.Element => {
    return (
        <ContactContainer>
            <ContactContent>
                <h1>Email: dungreact@gmail.com</h1>
                <h1>
                    Github: &nbsp;
                    <a
                        href={'https://github.com/dungreact'}
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        dungreact
                    </a>
                </h1>
                <h1>Phone: 0971757404</h1>
                <h1>
                    Facebook: &nbsp;
                    <a
                        href={'https://www.facebook.com/qngnud/'}
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        Nguyễn Dũng
                    </a>
                </h1>
            </ContactContent>
        </ContactContainer>
    )
}

const ContactContainer = styled.div`
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 1192px;

    margin-left: auto;
    margin-right: auto;
`

const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-arround;
`

export default Contact
