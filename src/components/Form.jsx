import api from "../services/api";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/form.scss";
const Form = ({ update, initialState }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: false,
  });
  useEffect(() => {
    if (initialState) {
      setTask({
        title: initialState.title,
        description: initialState.description,
        status: initialState.status,
      });
    }
    console.log(initialState, update);
  }, [initialState, update]);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (update) {
      try {
        console.log(task);
        await api.put(`/update/${initialState._id}`, task);
        history.push("/");
      } catch (err) {
        alert("Erro ao atualizar a tarefa");
      }
    } else {
      api.post("/create", task);
      window.location.reload();
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label className={task.title ? "visible" : null}>Titulo</label>
      <input
        type="text"
        id="title"
        placeholder="Digite um titulo"
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        defaultValue={initialState ? initialState.title : ""}
      />
      <label className={task.description ? "visible" : null}>Descrição</label>
      <input
        type="text"
        id="description"
        placeholder="Digite uma descrição"
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        defaultValue={initialState ? initialState.description : ""}
      ></input>
      {update ? (
        <div className="footer-buttons">
          <button
            onClick={() => {
              history.push("/");
            }}
          >
            Voltar
          </button>
          <button type="submit"> Salvar</button>
        </div>
      ) : (
        <button type="submit">Adicionar</button>
      )}
    </form>
  );
};
export default Form;
