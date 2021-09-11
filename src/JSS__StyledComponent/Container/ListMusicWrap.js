import styled from 'styled-components';

export const ListMusicWrap = styled.div`
    color: ${props=>props.theme.colorText};
    width: 400px;
    padding: 20px 0 0 0;
    position: absolute;
    bottom: 100%;
    left: 0;
    z-index: 99;
    background-color: ${props=>props.theme.colorBgControl};
    display: none;

    @media(max-width: 550px) {
        width: 350px;
    }

    @media(max-width: 300px) {
        width: 280px;
    }
`