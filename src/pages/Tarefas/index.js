import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom';
import { FiCircle, FiCheckCircle, FiDelete } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import { 
  Title, 
  Form, 
  Tasks, 
  ErrorMessage, 
  Header 
} from './styles';

const Tarefas = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const loadTasks = useCallback(
    async () => {
      const response = await api.get(`tarefas`);
      setTasks(response.data);
    },[],
  );

  // async function loadTasks() {
  //   const response = await api.get(`tarefas`);
  //   setTasks(response.data);

  //   console.log("tasks loaded:", response.data);
  // }

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const handleAddTask = useCallback(
    async (event) => {
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
    },[loadTasks, newTask],
  );

  // async function handleAddTask(event) {
  //   event.preventDefault();

  //   if(newTask === "") {
  //     setErrorMessage("Digite a tarefa a ser adicionada");
  //     return;
  //   }

  //   setErrorMessage("");

  //   const params = {
  //     descricao: newTask,
  //     concluido: false
  //   };

  //   try {
  //     await api.post(`tarefas`, params);  
      
  //     loadTasks();
  //     setNewTask("");
  //   } catch (error) {
  //     console.log("error handleAddTask:", error);

  //     setErrorMessage("Ocorreu um erro ao adicionar tarefa");
  //   }
  // }

  const handleTask = useCallback(
    async (task) => {
      const params = {
        ...task,
        concluido: !task.concluido
      }
  
      await api.put(`tarefas/${task.id}`, params);
  
      loadTasks();
    },[loadTasks],
  );

  // async function handleTask(task) {
  //   const params = {
  //     ...task,
  //     concluido: !task.concluido
  //   }

  //   await api.put(`tarefas/${task.id}`, params);

  //   loadTasks();
  // }

  const removeTask = useCallback(
    async (task) => {
      await api.delete(`tarefas/${task.id}`);

      loadTasks();
    },[loadTasks],
  );

  // async function removeTask(task) {
  //   await api.delete(`tarefas/${task.id}`);

  //   loadTasks();
  // }

  return (
    <>
      <Header>
        <img src={logoImg} alt="Lista de Tarefas" />

        <ul>
          <li>
            <Link to="/">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/tarefas">
              Tarefas
            </Link>
          </li>
        </ul>
      </Header>

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
                  <>
                    <FiDelete size={22} onClick={() => removeTask(task) } style={{marginRight: 10}} />
                    <FiCheckCircle size={22} onClick={() => handleTask(task) } />
                  </>
                :
                  <FiCircle size={22} onClick={() => handleTask(task) } />
              }
            </span>
          </div>
        ))}
        
      </Tasks>
    </>
  )
}

export default Tarefas;