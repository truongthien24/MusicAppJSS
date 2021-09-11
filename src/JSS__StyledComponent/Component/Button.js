import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${props => props.primary ? 'orange' : 'red'};
    border-radius: 5px;
    color: white;
    &:hover {
        background-color: ${props => props.primary ? 'green' : 'black'};
        color: ${props => props.primary ? 'white' : 'red'};
    }
`
//Extending Styled (Kế thừa css)
export const ButtonSmall = styled(Button)`
    font-size: 2rem;
    background-color: blue;
`

export const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transition: all 0.5s;
`

export const ButtonToDoList = styled.button`
    color: ${props => props.theme.buttonText};
    background-color: ${props => props.theme.buttonBgColor};
    border: ${props => props.theme.buttonBorder};
    transition: all 0.7s;
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.buttonTextHover};
        background-color: ${props => props.theme.buttonBgColorHover};
        border: ${props => props.theme.buttonBorderHover};
    }
`

export const ButtonTheme = styled.button`
    background-color: transparent;
    color: ${props => props.theme.colorText};
    width: 80px;
    padding: 10px 0;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 20px;
    outline: none !important;
    cursor: pointer;

    i {
        color: ${props => props.theme.colorText};
    }

    @media(max-width: 550px) {
        margin: 10px 0;
    }
`

export const ButtonCategory = styled.button`
    border-radius: 10px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.2);
    padding: 10px;
    outline: none !important;
    border: none;
    color: ${props=>props.theme.colorText};
    cursor: pointer;
    font-size: 1.5rem;
    margin: 1rem;

    @media(max-width:550px) {
        font-size: 1rem !important;
        padding: 8px;
        margin: 8px;
    }
`

export const ButtonControl = styled.button`
    border: none;
    background-color: transparent;
    outline: none !important;
    margin: 0 20px;
    cursor: pointer;

    &:hover i {
        color: ${props=>props.theme.colorSecondary};
        transform: scale(1.2);
    }

    i {
        font-size: 1.3rem;
        color: ${props=>props.theme.colorText};
        transition: all 0.3s;
    }

    &.active i{
        color: ${props=>props.theme.colorSecondary};
    }

    @media(max-width: 550px) {
        margin: 0 10px;

        i {
            font-size: 1rem;
        }

        &#volumeUp-btn {
            // transform: translateY(15px);
            display: none;
        }

        &#volumeMuted-btn {
            transform: translateY(50px);
        }
    }
`

export const ButtonOption = styled.button `
    padding: 5px 10px; 
    background-color: transparent;
    cursor: pointer;
    border: none;
    border-radius: 15px;
    color: #fff;
    outline: none !important;
`