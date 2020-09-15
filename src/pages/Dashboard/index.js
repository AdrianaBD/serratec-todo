import React, { useEffect, useState, useMemo } from 'react';
import api from '../../services/api';

import Header from '../../components/Header';

import { Title, Resumo } from './styles';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const tasks_qtd = useMemo(() => tasks.length, [tasks]);

  const tasks_concluded_qtd = useMemo(
    () => {
      const filtered = tasks.filter(task => {
        return task.concluido === true;
      })

      return filtered.length;
    },
    [tasks],
  )

  async function loadTasks() {
    const response = await api.get(`tarefas`);
    setTasks(response.data);

    console.log("tasks loaded:", response.data);
  }

  return (
    <>
      <Header />
      <Title>Resumo</Title>

      <Resumo style={{marginTop: 40}}>
        { tasks_qtd - tasks_concluded_qtd === 0 ? 
          <h2>Parabéns! Você concluiu todas as tarefas!</h2>
        :
          <h2>Existem {tasks_qtd - tasks_concluded_qtd} tarefas pendentes.</h2>
        }
        <p><b>Total de tarefas:</b> {tasks_qtd}</p>
        <p><b>Tarefas concluídas:</b> {tasks_concluded_qtd}</p>
      </Resumo>
    </>
  )
}

export default Dashboard;