import styled from 'styled-components';

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: between;
  position: relative;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 0px;
  margin-top: 0px;
  display: inline-block;
  padding: 20px;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;

export const DeleteButton = styled.button`
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  border-radius: 2px;
  padding: ${ props => props.padding || "2px" };

  &:hover {
        background: ${ props => props.color };
        color: black;
    }
`;
