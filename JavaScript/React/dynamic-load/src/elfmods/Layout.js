import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
  width: 500px;
  height: 500px;

  display: flex;
  flex: wrap column;
  justify-content: center;
  align-items: center;

  border: 2px dotted #ffc600;
  padding: 2rem;
  margin-top: 1rem;

  ${props => props.css}
`;

export default ({ css, children }) => (
  <Container css={css}>{children}</Container>
);
