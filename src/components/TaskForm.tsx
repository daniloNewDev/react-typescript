import React from "react";

interface Props {
  btnText: string;
}

const TaskForm = ({ btnText }: Props) => {
  return (
    <form className="flex flex-col max-w-[400px] mx-auto">
      <div className="flex flex-col text-left">
        <label className="font-bold mb-1.5" htmlFor="title">
          Título:
        </label>
        <input
          className="px-[8px] py-x mb-6 rounded-[4px] border-2 border-solid border-slate-950"
          type="text"
          name="title"
          placeholder="Título da tarefa"
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
