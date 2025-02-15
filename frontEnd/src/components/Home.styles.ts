import styled from 'styled-components'

export const HomeContainer = styled.main`
    /* background: ${props => props.theme.success}; */

    height: 100vh;
    padding: 1rem 8rem;

    h1{
        background-color: ${props => props.theme.azulClaro};
        color: ${props => props.theme.azulEscuro};
        text-align: center;

        /* height: 150px; */
        /* background-color: #87CEFA; */
        clip-path: polygon(0% 50%, 10% 20%, 30% 10%, 50% 20%, 70% 10%, 90% 20%, 100% 50%, 90% 80%, 70% 90%, 50% 80%, 30% 90%, 10% 80%);
        padding: 2rem;
    }

    .tasksContainer {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        margin: 1.6rem 0;

    }


`