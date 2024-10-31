import React from 'react';
import Menu from '../Menu/Menu.js';
import Footer from '../Footer/index.js';
import styled, { css } from 'styled-components';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
    background-color: var(--black);
    color: var(--white);
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    ${({ paddingAll }) => css`
    padding: ${paddingAll};
    `}
`;

const PageDefault = ({ children, paddingAll }) => {
    return (
        <>
            <Menu />
            <Main paddingAll={paddingAll}>
                {children}
            </Main>
            <Footer />
        </>
    );
}

export default PageDefault;