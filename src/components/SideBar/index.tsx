import React from 'react';
import List from '../List';
import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

function SideBar() {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <Body>
                <List
                    title="Nhaaa"
                    elements={[<h1>Teste</h1>, <h1>Teste</h1>]} />
                <List />
            </Body>
        </Container>
    );
}

export default SideBar;