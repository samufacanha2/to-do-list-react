import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BsTrash, BsPencil } from "react-icons/bs";

import api from "../services/api";
import "../styles/global.scss";
import "../styles/home.scss";

import Form from "../components/Form";

function Home() {
  const [taskList, setTaskList] = useState([]);

  const history = useHistory();

  const getTaskList = async () => {
    await api.get("/get").then((res) => {
      setTaskList(res.data);
    });
  };
  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <div className="Home">
      <div className="container">
        <Form update={false} getTaskList={getTaskList} />
        <div className="dashboard">
          {taskList.length ? (
            taskList.map((task) => {
              return (
                <div key={task._id} className="task-card">
                  <div className="text">
                    <h1 className="task-title">{task.title}</h1>
                    <p className="task-description">{task.description}</p>
                  </div>
                  <div
                    className="task-options update"
                    onClick={() => {
                      history.push(`/update`, task);
                    }}
                  >
                    <BsPencil className="task-icon" />
                  </div>
                  <div
                    className="task-options delete"
                    onClick={() => {
                      api.delete(`/delete/${task._id}`).then(() => {
                        getTaskList();
                      });
                    }}
                  >
                    <BsTrash className="task-icon" />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="empty-tasks">
              Registre uma atividade utilizando os campos acima
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
