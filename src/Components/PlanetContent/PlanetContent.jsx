import React, { useEffect, useState } from "react";
import styles from "./PlanetContent.module.scss";
import mercury from "../../img/mercury.png";
import venus from "../../img/venus.png";
import earth from "../../img/earth.png";
import mars from '../../img/mars.png';
import jupiter from '../../img/jupiter.png';
import saturn from '../../img/saturn.png';
import uranus from '../../img/uranus.png';


const Planets = [
  {
    id: "Mercury",
    rotationTime: "59 Days",
    revolutionTime: "88 Days",
    radius: "2439 Km",
    averageTemp: "167C",
    overview:
      "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon  From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth,",
    structure:
      "It's made of iron, nickel, and sulfur. Surrounding the core is a rocky mantle between 770 and 1,170 miles (1,240 to 1,880 kilometers) thick, and above that, a crust made of iron, magnesium, aluminum, calcium, and potassium.",
    geology:
      "The surface of Mars is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt and may be similar to andesitic rocks on ...",
    img: mercury,
  },
  {
    id:"Venus" , 
    rotationTime : '243 Days' ,
    revolutionTime : '225 days' , 
    radius : "6051 Km" ,
    averageTemp : '464C' , 
    overview : "Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density." ,
    structure : 'Venus has a thick, toxic atmosphere filled with carbon dioxide and it s perpetually shrouded in thick, yellowish clouds of sulfuric acid that trap heat, causing a runaway greenhouse effect.' , 
    geology : "The crust of Venus appears to be almost entirely volcanic and basaltic. There is nothing there like Earth's continents—no granitic rocks at all, high in silicon and oxygen." ,
    img : venus ,
  } , 
  
  {
    id: "Earth" , 
    rotationTime : "24 hours" , 
    revolutionTime : '365 days' , 
    radius : '6371 Km' , 
    averageTemp : '15C' , 
    overview : 'Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system.' ,
    structure : 'The structure of the earth is divided into four major components: the crust, the mantle, the outer core, and the inner core. Each layer has a unique chemical composition, physical state, and can impact life on Earths surface.' , 
    geology : 'Earth formed about 4.54 billion years ago by accretion from the solar nebula, a disk-shaped mass of dust and gas left over from the formation of the Sun, which also created the rest of the Solar System.' , 
    img : earth , 
  } , 
  {
    id: 'Mars' , 
    rotationTime : '24.5 hours' , 
    revolutionTime : '687 days' , 
    radius : '3389 Km' , 
    averageTemp : '27C' , 
    overview : '​Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.' , 
    structure : "It's made of iron, nickel, and sulfur. Surrounding the core is a rocky mantle between 770 and 1,170 miles (1,240 to 1,880 kilometers) thick, and above that, a crust made of iron, magnesium, aluminum, calcium, and potassium." , 
    geology : 'The surface of Mars is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt and may be similar to andesitic rocks on Earth or silica glass.' , 
    img : mars , 
  } , 
  {
    id:'Jupiter' , 
    rotationTime : '10 hours' , 
    revolutionTime : '12 years' , 
    radius : '69000 Km' , 
    averageTemp : '-110C' , 
    overview : 'Jupiter has a long history of surprising scientists – all the way back to 1610 when Galileo Galilei found the first moons beyond Earth.Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined.' , 
    structure : 'Structure. The composition of Jupiter is similar to that of the Sun – mostly hydrogen and helium. Deep in the atmosphere, pressure and temperature increase, compressing the hydrogen gas into a liquid' , 
    geology : 'he strong gravitational pull of Jupiter causes Io to be geologically active, and it is thought to be the most geologically active object in the Solar System, with over 500 volcanic' , 
    img : jupiter
  } , 
  {
    id : "Saturn" , 
    rotationTime : '10.5 hours' , 
    revolutionTime : '29.5 years' , 
    radius : '58232 Km',
    averageTemp : '-140C' , 
    overview : 'Saturn is the sixth planet from the Sun and the second-largest planet in our solar system. Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings – made of chunks of ice and rock' , 
    structure :  'Structure. Like Jupiter, Saturn is made mostly of hydrogen and helium. At Saturn is center is a dense core of metals like iron and nickel surrounded by rocky material and other compounds solidified by intense pressure and heat.' , 
    geology : 'It is not the only planet to have rings – made of chunks of ice and rock – but none are as spectacular or as complicated as Saturn is. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.' , 
    img : saturn 
  } , 
  {
    id : 'Uranus' , 
    rotationTime : '17 hours' , 
    revolutionTime : '84 years' , 
    radius : '25362 Km' , 
    averageTemp : '-195C' , 
    overview : 'Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel' , 
    structure : 'Structure. Uranus is one of two ice giants in the outer solar system (the other is Neptune). Most (80% or more) of the planet is mass is made up of a hot dense fluid of "icy" materials – water, methane, and ammonia – above a small rocky core' , 
    geology : 'Uranus is one of two ice giants in the outer solar system (the other is Neptune). Most (80% or more) of the planet is mass is made up of a hot dense fluid of "icy" materials – water, methane, and ammonia – above a small rocky core.' , 
    img : uranus , 
  }

];

const PlanetContent = (props) => {

    

  const planetTarget = Planets.find((x) => x.id === props.planetToDisplay);
  const [infoToDisplay, setInfoToDisplay] = useState("OVERVIEW");
  const [animate , setAnimate] = useState(true);
  


  const infoHandler = (event) => {
    setInfoToDisplay(event.target.outerText);
    setAnimate(true);
  };

  useEffect(()=>{
   const interval = setTimeout(()=> {
        setAnimate(false);
    }, 1000);
    return () => {
        clearTimeout(interval);
    }
  } , [infoToDisplay])


  

  return (
    <div key={props.planetToDisplay} className={`${styles.content}`}>
      <div className={styles["main-content"]}>
        <img
          src={planetTarget.img}
          alt={planetTarget.id}
          className={styles["planet-img"]}
        />
        <div className={styles["general-info"]}>
          <h2>{planetTarget.id.toUpperCase()}</h2>
          <p  className = {`${styles['main-info']} ${animate ? styles.appear : ''} `}>
            {infoToDisplay === "OVERVIEW" ? planetTarget.overview : ""}{" "}
            {infoToDisplay === "INTERNAL STRUCTURE"
              ? planetTarget.structure
              : ""}{" "}
            {infoToDisplay === "SURTFACE GEOLOGY" ? planetTarget.geology : ""}{" "}
          </p>
          <div className={styles["info-box"]}>
            <div
              className={`${styles["info-item"]} ${
                infoToDisplay === "OVERVIEW" ? styles.active : ""
              } `}
              onClick={infoHandler}
            >
              OVERVIEW
            </div>
            <div
              className={`${styles["info-item"]} ${
                infoToDisplay === "INTERNAL STRUCTURE" ? styles.active : ""
              }`}
              onClick={infoHandler}
            >
              INTERNAL STRUCTURE
            </div>
            <div
              className={`${styles["info-item"]} ${
                infoToDisplay === "SURTFACE GEOLOGY" ? styles.active : ""
              }`}
              onClick={infoHandler}
            >
              SURTFACE GEOLOGY
            </div>
          </div>
        </div>
      </div>

        <div className={styles["other-info"]}>
        <div className={styles["other-box"]}><p>Rotation Time</p>{planetTarget.rotationTime}</div>
        <div className={styles["other-box"]}><p>Revolution Time</p>{planetTarget.revolutionTime}</div>
        <div className={styles["other-box"]}><p>Radius</p>{planetTarget.radius}</div>
        <div className={styles["other-box"]}><p>Average Temp.</p>{planetTarget.averageTemp}</div>
      </div> 
    </div>
  );
};

export default PlanetContent;
