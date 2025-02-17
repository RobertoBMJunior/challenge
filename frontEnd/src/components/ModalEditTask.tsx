import { TextSelect, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { EditTaskContainer, StyledClose, StyledContent, StyledDescription, StyledOverlay, StyledTitle, StyledTrigger } from './ModalEditTask.styles';

export function ModalEditTask() {
    return (
        <Dialog.Root>
            <StyledTrigger>
                <TextSelect/>
            </StyledTrigger>
            <Dialog.Portal>
            <StyledOverlay className="DialogOverlay"/>
            <StyledContent>
                <StyledTitle>
                    Editar Tarefa
                </StyledTitle>
                <StyledDescription>
                    Edite o título e/ou descrição da sua tarefa
                </StyledDescription>

                <EditTaskContainer>
                    <input 
                        type="text" 
                        placeholder="Titulo"
                    />

                    <input 
                        type='text' 
                        id="" 
                        placeholder="Descrição"
                    />

                    <select 
                        id="" 
                        className='selectContainer'
                    >
                        <option value="PENDENTE">PENDENTE</option>
                        <option value="EM_ANDAMENTO">EM ANDAMENTO</option>
                        <option value="FEITO">FEITO</option>
                    </select>
                        
                    <button type="submit" className="buttonCreate">Editar Tarefa</button>
                </EditTaskContainer>
                


                <StyledClose>
                    <X/>
                </StyledClose>
            </StyledContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
} 