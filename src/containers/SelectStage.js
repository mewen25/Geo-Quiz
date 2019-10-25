import React from "react";
import { LinkContainer } from "react-router-bootstrap";

function SelectStage(props) {
  const styles = {
    backgroundColor: "white"
  };

  return (
    <div>
      <LinkContainer to={props.title}>
        <button>{props.title}</button>
      </LinkContainer>
    </div>
  );
}

export default SelectStage;
