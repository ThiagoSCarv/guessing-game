import logo from "../../assets/logo.png";

import restart from "../../assets/restart.svg";

import style from "./style.module.css";

export function Header() {
  return (
    <div className={style.container}>
      <img src={logo} alt="Logo" />

      <header>
        <span>
          <strong>5</strong> de 10 tentativas
        </span>

        <button type="button">
          <img src={restart} alt="Ícone de Reiniciar" />
        </button>
      </header>
    </div>
  );
}
