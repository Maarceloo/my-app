import React from "react";
import CardContact from "../Components/CardContact";
import CardSkills from "../Components/CardSkills";
import Projetos from "../Components/Projetos";

function About() {
  return (
    <div>
      <p>
        <a id="about"></a>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque harum
        explicabo quos laudantium rerum vel quae ullam, provident nam beatae
        illum! Explicabo doloremque magnam quae aliquid impedit nihil provident
        nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut
        quae nihil quos? Molestiae officia saepe est maxime, architecto, impedit
        vitae, ducimus pariatur sed asperiores cum. Quidem facere amet
        veritatis!
      </p>
      <div id="skills">
        <CardSkills />
      </div>
      <div id="projects">
        <Projetos />
      </div>
      <div id="contact">
        <CardContact />
      </div>
    </div>
  );
}

export default About;
