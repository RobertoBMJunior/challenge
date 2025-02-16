import { useEffect, useState } from "react";
import { CardTask } from "./CardTask";
import { HomeContainer } from "./Home.styles";
import { CreateTask } from "./CreateTask";

// Definindo o tipo da tarefa
interface Task {
  id: number;
  titulo: string;
  descricao: string;
  status: 'PENDENTE' | 'EM_ANDAMENTO' | 'FEITO';
}

export default function Home() {
  const url = 'http://localhost:3333/task';
  const [tasks, setTasks] = useState<Task[]>([]); // Definindo o tipo de tasks como um array de Task

  function fetchTasks() {
    fetch(url, {
      method: 'GET', // Método da requisição (GET é o padrão, mas pode ser explícito)
    })
      .then(response => {
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados');
        }
        return response.json();
      })
      .then(data => {
        console.log('Dados recebidos:', data); // Mostra os dados no console
        setTasks(data); // Armazena os dados no estado 'tasks'
      })
      .catch(error => {
        console.error('Erro:', error); // Captura e exibe erros
      });
  }

  useEffect(() => {
    fetchTasks()
  }, []); // O array vazio [] garante que a requisição seja feita apenas uma vez, ao montar o componente

  function handleTaskCreated() {
    fetchTasks()
  } 


  return (
    <HomeContainer>
      <h1>Suas Tarefas</h1>
      <CreateTask onTaskCreated={handleTaskCreated}/>
      <div className="tasksContainer">
        {tasks.length > 0 ? (
            tasks.map((task) => (
                <CardTask
                    key={task.id} // Usando o id da tarefa como key
                    id={task.id}
                    titulo={task.titulo}
                    descricao={task.descricao}
                    status={task.status}
                />
            ))
            ) : (
                <p>Carregando tarefas...</p> // Exibe enquanto os dados estão sendo carregados
            )}
      </div>
      
    </HomeContainer>
  );
}
