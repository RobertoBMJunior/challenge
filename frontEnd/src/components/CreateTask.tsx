import { CreateTaskContainer } from "./CreateTask.styles";

export function CreateTask () {
    return (
        <CreateTaskContainer>
            <h2>Crie uma nova tarefa</h2>
            <div className="optionsContainer">
                <div className="inputsContainer">
                    <input type="text" placeholder="Titulo"/>
                    <input type='text' name="" id="" placeholder="Descrição"/>
                </div>
                <select name="status" id="" className='selectContainer'>
                    <option value="PENDENTE">PENDENTE</option>
                    <option value="EM_ANDAMENTO">EM ANDAMENTO</option>
                    <option value="FEITO">FEITO</option>
                </select>
            </div>
            <button type="submit" className="buttonCreate">Criar Tarefa</button>
        </CreateTaskContainer>
    )
}