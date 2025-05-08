import { Header } from "./components/Header";

import style from "./app.module.css";

export function App() {
  function handleRestartGame() {
    alert("Reiniciar o jogo!");
  }

  return (
    <div className={style.container}>
      <Header current={5} max={10} onRestart={handleRestartGame} />
    </div>
  );
}

export default App;
