import React from "react";

function Navbar() {
  return (
    <div class="container" id="nav-container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#sobre">
                  Sobre
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#skills">
                  My Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#projetos">
                  Projetos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#contato">
                  Contato
                </a>
              </li>
            </ul>
            <nav class="navbar bg-body-tertiary">
              <div class="container">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/57/57049.png"
                    alt="Foto Perfil"
                    width="30"
                    height="24"
                  />
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
