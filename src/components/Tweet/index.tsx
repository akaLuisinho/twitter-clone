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
    RetweetStatusIcon,
    LikeIcon
} from './styles';

function Tweet() {
    return (
        <Container>
            <Retweeted>
                <RetweetIcon />
                Você Retweetou
            </Retweeted>

            <Body>
                <Avatar />
                    <Content>
                        <Header>
                            <strong>Rocketseat</strong>
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
                                <RetweetStatusIcon />
                                18
                            </Status>
                            <Status>
                                <LikeIcon />
                                999
                            </Status>
                        </Icons>
                    </Content>
            </Body>
        </Container>
    );
}

export default Tweet;