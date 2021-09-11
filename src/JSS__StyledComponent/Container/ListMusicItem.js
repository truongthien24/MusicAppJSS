import styled from "styled-components";

export const ListMusicItem = styled.div`
    background-color: transparent;
    padding: 5px;
    border-radius: 7px;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        background-color: ${props=>props.theme.colorSecondary};
    }

    &.active {
        background-color: ${props=>props.theme.colorSecondary};
    }
`