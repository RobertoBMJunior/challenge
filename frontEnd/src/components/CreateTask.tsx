import { useForm } from "react-hook-form";
import { CreateTaskContainer } from "./CreateTask.styles";

interface Task {
    titulo: string;
    descricao: string;
    status: 'PENDENTE' | 'EM_ANDAMENTO' | 'FEITO';
  }


export function CreateTask () {
    const { register, handleSubmit, reset } = useForm<Task>();
    const url = 'http://localhost:3333/task';

    function submit(data: Task) {
        // Dados a serem enviados
        const newTask = {
        titulo: data.titulo,
        descricao: data.descricao,
        status: data.status
        };

        // Configuração da requisição POST
        fetch(url, {
        method: 'POST', // Método da requisição
        headers: {
            'Content-Type': 'application/json' // Especifica que o conteúdo está em JSON
        },
        body: JSON.stringify(newTask) // Converte o objeto data em uma string JSON
        })
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => {
            console.log('Sucesso:', data); // Exibe os dados retornados
        })
        .catch(error => {
            console.error('Erro:', error); // Exibe erros caso ocorram
        });


        // console.log(data)


        reset()
    }

    return (
        <CreateTaskContainer onSubmit={handleSubmit(submit)}>
            <h2>Crie uma nova tarefa</h2>
            <div className="optionsContainer">
                <div className="inputsContainer">
                    <input 
                        type="text" 
                        placeholder="Titulo"
                        {...register("titulo", {required: true})}
                    />

                    <input 
                        type='text' 
                        id="" 
                        placeholder="Descrição"
                        {...register("descricao", {required: true})}
                    />
                </div>
                <select 
                    id="" 
                    className='selectContainer'
                    {...register("status", {required: true})}
                >
                    <option value="PENDENTE">PENDENTE</option>
                    <option value="EM_ANDAMENTO">EM ANDAMENTO</option>
                    <option value="FEITO">FEITO</option>
                </select>
            </div>
            <button type="submit" className="buttonCreate">Criar Tarefa</button>
        </CreateTaskContainer>
    )
}