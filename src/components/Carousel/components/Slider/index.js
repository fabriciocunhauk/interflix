/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
  display: flex;
  overflow: auto;
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  position: relative;
  display: flex;
  margin-right: 16px;
  outline: none;
`;


export const Slider = ({ children }) => {


  return (
    <Container>
        {children}
    </Container>
  )
};