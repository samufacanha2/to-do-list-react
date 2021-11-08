import "../styles/global.scss";
import "../styles/update.scss";

import Form from "../components/Form";
import { useHistory } from "react-router";

function Update({ props }) {
  const history = useHistory();
  const task = history.location.state;

  return (
    <div className="Update">
      <div className="container">
        <Form update={true} initialState={task} />
      </div>
    </div>
  );
}

export default Update;
