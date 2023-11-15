/* lista de las tareas y botones */
export const Task = (props) => {
  const { task, index, deleteTask, subrayados, toggleSubrayado, editTask } = props;

  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={subrayados[index]}
          onChange={() => toggleSubrayado(index)}
        />
        <span className={subrayados[index] ? "subrayado" : ""}>{task}</span>
        <button onClick={() => editTask(index)}>Editar</button>
        <button onClick={() => deleteTask(index)}>Borrar</button>
      </li>
    </>
  );
};