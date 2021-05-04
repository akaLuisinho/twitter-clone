import React from 'react';

import { Container, Banner, Avatar, ProfileData, EditButton, LocationIcon, CakeIcon, Followage } from './styles';

function ProfilePage() {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>


            <ProfileData>
                <EditButton>Editar Perfil</EditButton>

                <h1>Luis Felipe</h1>
                <h2>@luis_felipe</h2>

                <p>
                    Nothing To See Here
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        Brasilia, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido em 25/07/2004
                    </li>
                </ul>

                <Followage>
                    <span>
                        Segunindo<strong>674</strong>
                    </span>
                    <span>
                        <strong>674 </strong> Seguidores
                    </span>
                </Followage>
            </ProfileData>
        </Container>
    )
}

export default ProfilePage;