import React from 'react';
import Menu from '../Menu/Menu.js';
import Footer from '../Footer/index.js';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
    background-color: var(--black);
    color: var(--white);
    padding-bottom: 40px;
`;

const PageDefault = ({ children }) => {
    return (
        <>
            <Menu />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    );
}

export default PageDefault;