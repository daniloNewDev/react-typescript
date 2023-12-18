import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

import { ITask } from "./interfaces/Task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <main className="min-h-[60vh] p-8 mb-3 text-center">
        <div>
          <h2 className="text-gray-950 text-2xl p-2">
            O que você pretende fazer?
          </h2>
          <TaskForm
            setTaskList={setTaskList}
            btnText="Criar Tarefa"
            taskList={taskList}
          />
        </div>
        <div>
          <h2 className="text-gray-950 text-2xl">Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
