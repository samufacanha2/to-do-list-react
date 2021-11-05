import { useEffect, useState } from "react";
import { BsTrash, BsPencil } from "react-icons/bs";

import api from "../services/api";
import "../styles/global.scss";
import "../styles/update.scss";

import Form from "../components/Form";
import { useHistory } from "react-router";

function Update({ props }) {
  const history = useHistory();
  const task = history.location.state;

  const handleSubmit = () => {
    // api.post("/create", task);
    window.location.reload();
  };
  return (
    <div className="Update">
      <div className="container">
        <Form update={true} initialState={task} />
      </div>
    </div>
  );
}

export default Update;
