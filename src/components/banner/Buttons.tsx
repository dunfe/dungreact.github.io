import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Buttons = (): JSX.Element => {
    return (
        <ButtonsContainer>
            <Link to={'/contact'}>
                <StyledButton>Get in Touch</StyledButton>
            </Link>
            <StyledLink>
                Take a Tour &nbsp;
                <svg
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 4.53657 8.69699"
                    className="css-b7q1rs"
                >
                    <path
                        d="
        M.18254,8.697a.18149.18149,0,0,1-.12886-.31034L4.09723,4.34126.05369.29954a.18149.18149,
        0,0,1,.2559-.2559L4.4838,4.21785a.18149.18149,0,0,1,0,.2559L.30958,8.648A.18149.18149,
        0,0,1,.18254,8.697Z
      "
                        fill="currentColor"
                    />
                </svg>
            </StyledLink>
        </ButtonsContainer>
    )
}

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 0;
    justify-content: center;
    align-items: center;

    margin-left: auto;
    margin-right: auto;
    padding-top: 65px;

    position: relative;
`
const StyledButton = styled.button`
    display: inline-block;
    font-size: 20px;
    border: unset;

    background-color: #61dafb;
    color: #000000;
    padding: 15px 25px;
    white-space: nowrap;
    transition: background-color 0.2s ease-out;
    -webkit-transition: background-color 0.2s ease-out;
    -moz-transition: background-color 0.2s ease-out;

    &:hover {
        background-color: #ffffff;
    }
`
const StyledLink = styled.button`
    font-size: 20px;
    border: unset;
    background-color: transparent;

    padding-left: 15px;
    padding-right: 15px;

    display: inline-block;
    color: #61dafb;
    transition: color 0.2s ease-out;
    -webkit-transition: color 0.2s ease-out;
    -moz-transition: color 0.2s ease-out;

    &:hover {
        color: #ffffff;
    }
`

export default Buttons
