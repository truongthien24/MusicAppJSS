import styled from "styled-components";

export const InputRange = styled.input`
    width: 300px;
    height: 5px;
    padding: 3px;
    border-radius: 2px;
    outline: none;
    cursor: pointer;
    border-radius: 20px;
    -webkit-appearance: none;
    background: linear-gradient(90deg, rgb(214,214,214) 60%, rgb(214,214,214) 60%);

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: white;
    }

    @media(max-width: 550px) {
        
        &#volumeMusic {
            height: 4px !important;
            width: 60px !important;
            transform: translateY(-60px);
            &::-webkit-slider-thumb {
                -webkit-appearance: none;
                height: 13px;
                width: 13px;
                border-radius: 50%;
                background: white;
            }
        }

        &#progress {
            width: 200px !important;
        }

    }
` 