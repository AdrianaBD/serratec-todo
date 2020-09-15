import React, { useState, useEffect } from 'react'
import { FiCircle, FiCheckCircle } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import { Title, Form, Tasks, ErrorMessage } from './styles';

const Tarefas = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

    if(newTask === "") {
      setErrorMessage("Digite a tarefa a ser adicionada");
      return;
    }

    setErrorMessage("");

    const params = {
      descricao: newTask,
      concluido: false
    };

    try {
      await api.post(`tarefas`, params);  
      
      loadTasks();
      setNewTask("");
    } catch (error) {
      console.log("error handleAddTask:", error);

      setErrorMessage("Ocorreu um erro ao adicionar tarefa");
    }
    
  }

  return (
    <>
      <img src={logoImg} alt="Lista de Tarefas" />
      <Title>Lista de Tarefas</Title>

      <Form onSubmit={handleAddTask} hasError={!!errorMessage}>
        <input 
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          type="text" 
          placeholder="Digite a nova tarefa aqui..." 
        />
        <button type="submit">Criar</button>
      </Form>

      {errorMessage &&
        <ErrorMessage>{errorMessage}</ErrorMessage>
      }

      <Tasks>
        { tasks.map(task => (
          <div key={task.id}>
            <strong>{task.descricao}</strong>
            <span>
              {
                task.concluido ?
                  <FiCheckCircle size={22} />
                :
                  <FiCircle size={22} />
              }
            </span>
          </div>
        ))}
        
      </Tasks>
    </>
  )
}

export default Tarefas;