import styled from "styled-components"

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1028px;
    padding: 40px;
    border: ${props=> props.theme.border};
    color: ${props=>props.theme.color};
    background-color: ${props=>props.theme.bgColor};
`