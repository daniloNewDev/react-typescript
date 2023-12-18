import React from "react";
import { ITask } from "../interfaces/Task";

interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
}

const TaskList = ({ taskList, handleDelete }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div
            key={task.id}
            className="flex justify-between max-w-[400px] my-0 mx-auto border-b border-solid border-white p-[1em]"
          >
            <div className="text-left mb-[1em]">
              <h4 className="text-[1.2em] font-bold mb-[1.8em] bg-[#c3c3c3] min-w-[320px]">
                {task.title}
              </h4>
              <p className="bg-[#c3c3c3] min-w-[280px]">
                Dificuldade: {task.difficulty}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="bi bi-pencil mb-[.5em] text-[1.2em] cursor-pointer bg-[#282c34] text-white hover:text-[#61dafb] p-[.4em] rounded-[4px] duration-500"></i>
              <i
                onClick={() => {
                  handleDelete(task.id);
                }}
                className="bi bi-trash  mb-[.5em] text-[1.2em] cursor-pointer bg-[#282c34] text-white hover:text-[#61dafb] p-[.4em] rounded-[4px] duration-500"
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não tem tarefas cadastradas.</p>
      )}
    </>
  );
};

export default TaskList;
