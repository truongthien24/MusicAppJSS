import styled from "styled-components";

export const ListMusicList = styled.div`
    max-height: 570px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        background-color: #fff;
        border-radius: 5px;
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        width: 5px;
        background-color: ${props=>props.theme.colorSecondary};
        border-radius: 5px;
    }

    @media(max-width: 550px) {
        max-height: 400px;
    }
`