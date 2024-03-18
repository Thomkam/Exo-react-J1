/* import { useState } from "react"; */
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import "./App.css";
import Content from "./components/Content";

const App = () => {
  const duplicate =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dicta, id voluptatem consectetur dolore corporis suscipit sed quis doloribus ullam harum, totam obcaecati vel temporibus reiciendis repellendus delectus. Minima, rerum.";

  const duplicate2 =
    "Prendre la plume pour écrire un texte ou une carte à caractère personnel est bien plus compliqué que de le faire pour une lettre administrative. Bien sûr la difficulté ne sera pas la même pour une simple lettre de remerciements ou une invitation que pour une lettre d'amour ou une carte pour annoncer un décès, car l'émotion s'ajoute à la difficulté de trouver les mots justes.";

  return (
    <>
      <Content duplicate={duplicate} />
      <Content duplicate={duplicate2} />
    </>
  );
};

export default App;
