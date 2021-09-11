import styled from "styled-components";


export const AppMusicWrap = styled.div `
    color: ${props=>props.theme.colorText};
    background-image: linear-gradient(to bottom right, ${props=>props.theme.colorPrimary}, ${props=>props.theme.colorSecondary});
    padding: 10px 0;
    transition: all 0.6s;
`