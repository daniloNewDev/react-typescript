import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] p-8 mb-3 text-center">
        <div>
          <h2 className="text-gray-950 text-2xl p-2">
            O que você pretende fazer?
          </h2>
          <TaskForm btnText="Criar Tarefa" />
        </div>
        <div>
          <h2 className="text-gray-950 text-2xl">Suas tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
