import styled, {StyledComponents} from "styled-components";

export const StyledButton = styled.button `
    cursor : pointer;
    padding : 0.5em 1.5em; 
    font-family : sans-serif;
    font-size : 1.25em;
    border : ${props => props.outline? 'lightblue': 'white'} 1px solid;
    background-color : ${props => props.outline? 'white': 'lightblue'};
    width : ${props => (props.fullWidth ? "100%" : "auto")};
    :hover {
        border : ${props => props.outline? 'lightblue': 'cornflowerblue'} 1px solid;
        background-color : ${props => props.outline? 'white': 'lightblue'};
        color : white;
    }
`