import styled from "styled-components";

export const CreateTaskContainer = styled.form`
    
    background-color: #121214;
    border-radius: 8px;
    padding: 1rem;

    display: flex;
    flex-direction: column;

    margin: 1rem 0;

    h2{
        color: ${props => props.theme.white};
        margin-bottom: 1rem;
    }
    
    .optionsContainer{
        display: flex;
        justify-content: space-between;

        margin-bottom: 1rem;
    }

    .inputsContainer{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input{
            border: 0;
            background-color: #e2e8f0;
            border-radius: 8px;
            padding: 0.4rem;

            width: 400px;
        }
    }

    .selectContainer {
    padding: 0.4rem;
    background-color: ${props => props.theme.amarelo};
    border-radius: 8px;

    height: 40px; /* Adicionando uma altura fixa */
  }

  .selectContainer:hover {
    cursor: pointer;
  }

  .selectContainer:focus {
    outline: none;
    }

    .buttonCreate{
        background-color: #00c951;
        border: 0;
        padding: 1rem;
        border-radius: 8px;

        margin-top: 1rem;

        width: 40%;
        
        align-self: center;
    }

    .buttonCreate:hover{
        cursor: pointer;
    }
`