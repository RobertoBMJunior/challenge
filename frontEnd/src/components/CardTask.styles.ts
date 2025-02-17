import styled from "styled-components";

interface Status {
    status: 'PENDENTE' | 'EM_ANDAMENTO' | 'FEITO';
}

const statusCores = {
    PENDENTE: "#ff5e48",
    EM_ANDAMENTO: "#05c4ce",
    FEITO: "#588f27",
}

export const CardTaskContainer = styled.article<Status>`
  padding: 1.3rem;
  padding-left: 4rem;
  border-radius: 1rem 1rem 1rem 1rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => statusCores[props.status]};

  position: relative;

  .modal-titulo-descricao{
    
  }

  h2 {
    font-size: 1.3rem;
    border-bottom: 1px solid ${props => props.theme.preto};
    padding-bottom: 0.4rem;
    margin-bottom: 0.8rem;
  }

  .descricao {
    font-size: 1rem;
    color: ${props => props.theme.white};
  }

  .selectAndExclude{
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .selectContainer {
    padding: 0.4rem;
    background-color: ${props => props.theme.amarelo};
    border-radius: 8px;
  }

  .selectContainer:hover {
    cursor: pointer;
  }

  .selectContainer:focus {
    outline: none;
    }

    .exclude{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.4rem;

        padding: 0.4rem;
        border-radius: 8px;

        background-color: #62748e;

        border: 1px solid #0a0a0a;

    }

    .exclude:hover{
        background-color: #90a1b9;
        cursor: pointer;
        
        
    }

    .exclude:hover svg, .exclude:hover span {
        /* scale: 1.01; */
        transition: transform 0.3s ease;
    }

`;

  /* .select-container {
    display: flex;
    justify-content: flex-end;
    width: auto;
    position: relative;
  }

    @import "@radix-ui/colors/black-alpha.css";
    @import "@radix-ui/colors/mauve.css";
    @import "@radix-ui/colors/violet.css";

    button {
	    all: unset;
    }

    .SelectTrigger {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        padding: 0 15px;
        font-size: 13px;
        line-height: 1;
        height: 35px;
        gap: 5px;
        background-color: white;
        color: green;
        box-shadow: 0 2px 10px #000;
    }
    .SelectTrigger:hover {
        background-color: #fff;
    }
    .SelectTrigger:focus {
        box-shadow: 0 0 0 2px black;
    }
    .SelectTrigger[data-placeholder] {
        color: blue;
    }

    .SelectIcon {
        color: green;
    }

    .SelectContent {
        overflow: hidden;
        background-color: green !important;
        border-radius: 6px;
        box-shadow:
            0px 10px 38px -10px rgba(22, 23, 24, 0.35),
            0px 10px 20px -15px rgba(22, 23, 24, 0.2);
    }

    .SelectViewport {
        padding: 5px;
    }

    .SelectItem {
        font-size: 13px;
        line-height: 1;
        color: var(--violet-11);
        border-radius: 3px;
        display: flex;
        align-items: center;
        height: 25px;
        padding: 0 35px 0 25px;
        position: relative;
        user-select: none;
    }
    .SelectItem[data-disabled] {
        color: var(--mauve-8);
        pointer-events: none;
    }
    .SelectItem[data-highlighted] {
        outline: none;
        background-color: var(--violet-9);
        color: var(--violet-1);
    }

    .SelectLabel {
        padding: 0 25px;
        font-size: 12px;
        line-height: 25px;
        color: var(--mauve-11);
    }

    .SelectSeparator {
        height: 1px;
        background-color: var(--violet-6);
        margin: 5px;
    }

    .SelectItemIndicator {
        position: absolute;
        left: 0;
        width: 25px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .SelectScrollButton {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 25px;
        background-color: white;
        color: var(--violet-11);
        cursor: default;
    } */


