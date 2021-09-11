import styled from "styled-components"

export const AppMusicControl = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px 0;
    z-index: 99;
    background-color: ${props=>props.theme.colorBgControl};
`