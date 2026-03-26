
import React, { useState } from "react";

export const Todolist = () => {
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState([]);

  const agregar = (e) => {
    setTarea(e.target.value);
  };

  const agregarALaLista = (e) => {
    if (e.key === "Enter") {
      if (tarea.trim() === "") {
        return;
      }

      setLista([...lista, tarea]);
      setTarea("");
    }
  };

  const eliminarTarea = (paramIndex) => {
    let elementos = lista.filter((item, index) => index !== paramIndex);
    setLista(elementos);
  };

  return (
    <div className="todo-wrapper">
      <h1 className="title">todos</h1>

      <div className="todo-box">
        <input
          type="text"
          className="todo-input"
          placeholder="What needs to be done?"
          value={tarea}
          onChange={agregar}
          onKeyDown={agregarALaLista}
        />

        <ul className="todo-list">
          {lista.length === 0 ? (
            <li className="empty-task">No hay tareas, añadir tareas</li>
          ) : (
            lista.map((item, index) => (
              <li key={index} className="todo-item">
                <span>{item}</span>
                <span
                  className="delete-btn"
                  onClick={() => eliminarTarea(index)}
                >
                  x
                </span>
              </li>
            ))
          )}
        </ul>

        <p className="items-left">{lista.length} item left</p>
      </div>
    </div>
  );
};

