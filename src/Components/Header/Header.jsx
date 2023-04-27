import React, { useState } from "react";
import styles from "./Header.module.scss";
import ListItem from "./ListItem";

const Header = (props) => {
  const [activePlanet, setAtivePlanet] = useState("Mercury");
  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);

  const activePlanetChanger = (id) => {
    setAtivePlanet(id);
    props.onChangePlanet(id);
  };

  const burgerHandler = () => {
    setIsBurgerMenuActive(!isBurgerMenuActive);
  };

  return (
    <div className={styles.header}>
      <h1>Planets</h1>
      <ul className={`${isBurgerMenuActive ? styles.active : ""}`}>
        <ListItem
          id="Mercury"
          onPlanetChange={activePlanetChanger}
          class={activePlanet === "Mercury" ? "active" : ""}
        />
        <ListItem
          id="Venus"
          onPlanetChange={activePlanetChanger}
          class={activePlanet === "Venus" ? "active" : ""}
        />
        <ListItem
          id="Earth"
          onPlanetChange={activePlanetChanger}
          class={activePlanet === "Earth" ? "active" : ""}
        />
        <ListItem
          id="Mars"
          onPlanetChange={activePlanetChanger}
          class={activePlanet === "Mars" ? "active" : ""}
        />
        <ListItem
          id="Jupiter"
          onPlanetChange={activePlanetChanger}
          class={activePlanet === "Jupiter" ? "active" : ""}
        />
        <ListItem
          id="Saturn"
          onPlanetChange={activePlanetChanger}
          class={activePlanet === "Saturn" ? "active" : ""}
        />
        <ListItem
          id="Uranus"
          onPlanetChange={activePlanetChanger}
          class={activePlanet === "Uranus" ? "active" : ""}
        />
      </ul>
      <button
        className={`${styles.burger} ${
          isBurgerMenuActive ? styles.active : ""
        } `}
        onClick={burgerHandler}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>
    </div>
  );
};

export default Header;
