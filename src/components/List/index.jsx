import React from 'react';

import { Container, Item, Title } from './styles';

function List() {
  return (
    <Container>
        <Item>
            <Title>{title}</Title>
        </Item>

        {elements.map((element, index) => {
            <Item key={index}>{element}</Item>;
        })}
    </Container>
  );
}

export default List;