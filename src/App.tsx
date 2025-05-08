import style from "./app.module.css";

import { Header } from "./components/Header";

import { Tip } from "./components/Tip";

import { Letter } from "./components/Letter";

export function App() {
  function handleRestartGame() {
    alert("Reiniciar o jogo!");
  }

  return (
    <div className={style.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />

        <Tip tip="Biblioteca para criar interfaces Web com Javascript." />

        <div className={style.word}>
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>
      </main>
    </div>
  );
}

export default App;
