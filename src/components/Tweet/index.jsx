import React from 'react';

import { 
    Container, 
    Retweeted, 
    RetweetIcon, 
    Body, 
    Avatar, 
    Content, 
    Header, 
    Dot, 
    Description, 
    ImageContent, 
    Icons, 
    Status, 
    CommentIcon, 
    LikeIcon } from './styles';

function Tweet() {
    return (
        <Container>
            <Retweeted>
                <RetweetIcon />
                Você Retweetou
            </Retweeted>

            <Body>
                <Avatar>
                    <Content>
                        <Header>
                            <strong>Rocketsetat</strong>
                            <span>@rocketseat</span>
                            <Dot />
                            <time>27 de jun</time>
                        </Header>

                        <Description>Aprendendo React!</Description>

                        <ImageContent />

                        <Icons>
                            <Status>
                                <CommentIcon />
                                18
                            </Status>
                            <Status>
                                <RetweetIcon />
                                18
                            </Status>
                            <Status>
                                <LikeIcon />
                                999
                            </Status>
                        </Icons>
                    </Content>
                </Avatar>
            </Body>
        </Container>
    );
}

export default Tweet;