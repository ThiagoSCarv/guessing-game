import logo from "../../assets/logo.png";

import style from "./style.module.css";

export function Header() {
  return (
    <div className={style.container}>
      <img src={logo} alt="Logo" />
    </div>
  );
}
