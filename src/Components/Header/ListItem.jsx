import React from "react";
import styles from "./ListItem.module.scss";

const ListItem = (props) => {

  const activePlanetHandler = () => {
    props.onPlanetChange(props.id);
  }

  return (
    <li
      id={props.id}
      onClick={activePlanetHandler}
      className={props.class === 'active' ? styles.active : ''}
    >
      {props.id}
    </li>
  );
};

export default ListItem;
