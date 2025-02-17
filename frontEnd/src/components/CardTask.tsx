// import * as Select from '@radix-ui/react-select';
import React, { useState } from 'react';
import { CardTaskContainer } from './CardTask.styles';
import { Trash2 } from 'lucide-react';

interface TaskProps {
  id: number;
  titulo: string;
  descricao: string;
  status: 'PENDENTE' | 'EM_ANDAMENTO' | 'FEITO';
  onUpdateTask: () => void
}



export function CardTask({ id, titulo, descricao, status, onUpdateTask }: TaskProps) {
  const [selectedStatus, setSelectedStatus] = useState<'PENDENTE' | 'EM_ANDAMENTO' | 'FEITO'>(status);

  const handleStatusChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const novoStatus = event.target.value as 'PENDENTE' | 'EM_ANDAMENTO' | 'FEITO';
    setSelectedStatus(novoStatus);

    // Aqui fazemos a requisição PUT para alterar o status
    try {
      const response = await fetch(`http://localhost:3333/task/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: novoStatus, // Alteramos apenas o status
        }),
      });

      if (response.ok) {
        console.log('Status atualizado com sucesso!');
      } else {
        console.error('Erro ao atualizar status');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  async function handleDelete() {

    try {
      const response = await fetch(`http://localhost:3333/task/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Tarefa deletada com sucesso!');
        onUpdateTask()
      } else {
        console.error('Erro ao deletar a task');
      }
    } catch (error) {
      console.error('Erro na requisição ao deletar a task:', error);
    }

  }

  return (
    <CardTaskContainer status={selectedStatus}>
      <div>
        <h2>{titulo}</h2>
        <p className="descricao">{descricao}</p>
      </div>

      <div className='selectAndExclude'>
        <select name="status" id="" className='selectContainer' value={selectedStatus} onChange={handleStatusChange}>
          <option value="PENDENTE">PENDENTE</option>
          <option value="EM_ANDAMENTO">EM ANDAMENTO</option>
          <option value="FEITO">FEITO</option>
        </select>

        <button className='exclude' onClick={handleDelete}>
          <Trash2/>
          <span>Excluir</span>
        </button>
      </div>

    </CardTaskContainer>
  );
}


      {/* <div className="select-container">
        <Select.Root value={selectedStatus} onValueChange={handleStatusChange}>
          <Select.Trigger className="SelectTrigger">
            <Select.Value placeholder="Selecione o Status" />
            <Select.Icon className="SelectIcon"/>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content className="SelectContent">
              <Select.ScrollUpButton className="SelectScrollButton" />
              <Select.Viewport className="SelectViewport">
                <Select.Item value="PENDENTE">
                  <Select.ItemText>Pendente</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="EM_ANDAMENTO">
                  <Select.ItemText>Em andamento</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="FEITO">
                  <Select.ItemText>Feito</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
              </Select.Viewport>
              <Select.ScrollDownButton />
              <Select.Arrow />
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div> */}