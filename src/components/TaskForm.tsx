import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

import { ITask } from "../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = { id, title, difficulty };
    setTaskList!([...taskList, newTask]);
    setTitle("");
    setDifficulty(0);

    console.log(taskList);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form
      onSubmit={addTaskHandler}
      className="flex flex-col max-w-[400px] mx-auto"
    >
      <div className="flex flex-col text-left">
        <label className="font-bold mb-1.5" htmlFor="title">
          Título:
        </label>
        <input
          onChange={handleChange}
          className="px-[8px] py-x mb-6 rounded-[4px] border-2 border-solid border-slate-950"
          type="text"
          name="title"
          placeholder="Título da tarefa"
          value={title}
        />
      </div>
      <div className="flex flex-col text-left">
        <label className="font-bold mb-1.5" htmlFor="difficulty">
          Dificuldade:
        </label>
        <input
          className="px-[8px] py-x mb-6 rounded-[4px] border-2 border-solid border-slate-950"
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={difficulty}
        />
      </div>
      <input
        className="bg-teal-200 border-2 rounded-[4px] border-solid border-teal-200 text-black duration-[500ms] cursor-pointer hover:bg-white hover:border-slate-950"
        type="submit"
        value={btnText}
      />
    </form>
  );
};

export default TaskForm;
