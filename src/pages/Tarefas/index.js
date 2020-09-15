import React, { useState, useEffect } from 'react'
import { FiCircle, FiCheckCircle } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import { Title, Form, Tasks } from './styles';

const Tarefas = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const response = await api.get(`tarefas`);
    setTasks(response.data);

    console.log("tasks loaded:", response.data);
  }

  async function handleAddTask(event) {
    event.preventDefault();

    const response = await api.get(`tarefas`);
  }

  return (
    <>
      <img src={logoImg} alt="Lista de Tarefas" />
      <Title>Lista de Tarefas</Title>

      <Form onSubmit={handleAddTask}>
        <input 
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          type="text" 
          placeholder="Digite a nova tarefa aqui..." 
        />
        <button type="submit">Criar</button>
      </Form>

      <Tasks>
        { tasks.map(task => (
          <a key={task.id} href="teste">
            <strong>{task.descricao}</strong>
            <FiCircle size={22} />
          </a>
        ))}
        
      </Tasks>
    </>
  )
}

export default Tarefas;