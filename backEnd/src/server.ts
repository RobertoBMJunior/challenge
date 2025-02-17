import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

import fastifyCors from '@fastify/cors';


const app = fastify();  // Inicializando o Fastify com o nome "app"
const prisma = new PrismaClient();

// Habilita o CORS para todas as origens ou uma origem específica
app.register(fastifyCors, {
  origin: '*', 
  // Ou para permitir de qualquer origem:
  // origin: '*',
});


interface TaskRequestBody{
  titulo: string; 
  descricao: string; 
  status: 'PENDENTE' | 'EM_ANDAMENTO' | 'FEITO';
}

// Criação de uma nova task
app.post('/task', async (request, reply) => {
  const { titulo, descricao, status } = request.body as TaskRequestBody;
  
  // Validação do status: se o status for diferente dos valores válidos, deve emitir um erro.
  const validStatus = ['PENDENTE', 'EM_ANDAMENTO', 'FEITO'];
  const upperStatus = status.toUpperCase();

  if (!validStatus.includes(upperStatus)) {
    return reply.code(400).send({ error: 'Status inválido. Os valores válidos são: PENDENTE, EM_ANDAMENTO, FEITO.' });
  }

  const newTask = await prisma.task.create({
    data: {
      titulo,
      descricao,
      status: upperStatus as 'PENDENTE' | 'EM_ANDAMENTO' | 'FEITO',  // Type assertion informando que é um valor válido do enum Status
    },
  });

  reply.code(201).send(newTask);
});


// Edição de uma task existente
app.put('/task/:id', async (request, reply) => {
  const { id } = request.params as { id: string };
  const { titulo, descricao, status } = request.body as TaskRequestBody;
  
  // Validação do status: se o status for diferente dos valores válidos, deve emitir um erro.
  const validStatus = ['PENDENTE', 'EM_ANDAMENTO', 'FEITO'];
  const upperStatus = status.toUpperCase();

  if (!validStatus.includes(upperStatus)) {
    return reply.code(400).send({ error: 'Status inválido. Os valores válidos são: PENDENTE, EM_ANDAMENTO, FEITO.' });
  }

  try {
    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: {
        titulo,
        descricao,
        status: upperStatus as 'PENDENTE' | 'EM_ANDAMENTO' | 'FEITO',  // Usando o status validado e convertido
      },
    });

    reply.send(updatedTask);
  } catch (error) {
    reply.code(404).send({ error: 'Task not found' });
  }
});


// Exclusão de uma task
app.delete('/task/:id', async (request, reply) => {
  const { id } = request.params as { id: string };
  
  try {
    await prisma.task.delete({
      where: { id: parseInt(id) },
    });

    reply.code(204).send("Tarefa deletada");
  } catch (error) {
    reply.code(404).send({ error: 'Task not found' });
  }
});

// Listar todas as tasks
app.get('/task', async (request, reply) => {
  try {
    const tasks = await prisma.task.findMany();  // Encontra todas as tasks no banco de dados
    reply.send(tasks);  // Retorna todas as tasks encontradas
  } catch (error) {
    reply.code(500).send({ error: 'Erro ao listar as tasks' });
  }
});

// Inicia o servidor na porta 3333
app.listen({
  port: 3333,
}, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Servidor rodando em ${address}`);
});
