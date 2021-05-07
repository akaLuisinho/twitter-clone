import React from 'react';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

function SideBar() {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <Body>
                <p>{'Lorem Ipsulum dolor sit amet'.repeat(90)}</p>
            </Body>
        </Container>
    );
}

export default SideBar;