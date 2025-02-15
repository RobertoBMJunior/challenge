import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        /* background-color: orange; */
    }

    body, input, textarea, button {
        font-family: "Roboto Mono", serif;
        font-weight: 700;
        font-size: 1rem;
    }
`