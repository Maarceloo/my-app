import React from "react";
import Link from "@mui/material/Link";

function Navbar() {
  return (
    <div className="nav">
      <h1 className="name">Marcelo de Lima</h1>
      <div className="navbar">
        <Link href="#about" underline="none">
          Sobre
        </Link>
        <Link href="#skills" underline="none">
          My Skills
        </Link>
        <Link href="#projects" underline="none">
          Projetos
        </Link>
        <Link href="#contact" underline="none">
          Contato
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
