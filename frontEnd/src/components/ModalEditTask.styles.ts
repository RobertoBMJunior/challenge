import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';


export const StyledTrigger = styled(Dialog.Trigger)`
    background: #3498db;
    /* background: transparent; */
    color: white;
    padding: 10px;
    border: none;
    border-radius: 999px;
    cursor: pointer;

    font-size: 0.4rem;

    &:hover {
        background: #2980b9;
    }

    position: absolute;
    left: 10px;
    top: 10px;

`
export const StyledOverlay = styled(Dialog.Overlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Cor de fundo semi-transparente */
  z-index: 999;
`;

export const StyledContent = styled(Dialog.Content)`
  background: white;
  border-radius: 8px;
  padding: 1.25rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  max-width: 90%;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledTitle = styled(Dialog.Title)`
    font-size: 1.25rem;
    margin-bottom: 1rem;
`

export const StyledDescription = styled(Dialog.Description)`
    font-size: 1rem;
    font-weight: 200;

    margin-bottom: 1rem;

`

export const StyledClose = styled(Dialog.Close)`
    border: 0;
    background-color: #e2e8f0;
    border-radius: 8px;
    padding: 0.4rem;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    position: absolute;
    right: 10px;
    top: 10px;

    &:hover{
        background-color: #d6d3d1;
    }
`


export const EditTaskContainer = styled.form`
    
    background-color: transparent;
    /* border-radius: 8px; */
    margin: 0rem 0;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input{
        border: 0;
        background-color: #e2e8f0;
        border-radius: 8px;
        padding: 0.4rem;

        width: 100%;
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

        width: 100%;
        
        align-self: center;
    }

    .buttonCreate:hover{
        cursor: pointer;
    }
`