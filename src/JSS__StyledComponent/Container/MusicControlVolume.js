import styled from "styled-components";

export const MusicControlVolume = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width:550px) {
        justify-content: space-between;
        flex-direction: column;
    }
`