import { Header } from "./components/Header";

import style from "./app.module.css";

export function App() {
  return (
    <div className={style.container}>
      <Header />
    </div>
  );
}

export default App;
