import logoImg from "./assets/logo.svg";
import { ReactComponent as IconO } from "./assets/icon-o.svg";
import { ReactComponent as IconX } from "./assets/icon-x.svg";
import { useState } from "react";

export default function App() {
  return (
    <>
      <NewGameMenu />
    </>
  );
}

function NewGameMenu() {
  return (
    <div className="new-game-menu">
      <Logo />
      <PlayersMarkContainer />
      <BtnNewGame
        className="btn--gen btn--chose-opponent btn--chose-opponent--vs-cpu"
        btnText={`NEW GAME (VS CPU)`}
      />
      <BtnNewGame
        className="btn--gen btn--chose-opponent btn--chose-opponent--vs-player"
        btnText={`NEW GAME  (VS PLAYER)`}
      />
    </div>
  );
}

function Logo() {
  return <img className="logo" src={logoImg} alt="logo" />;
}

function PlayersMarkContainer() {
  const [isActive, setIsActive] = useState(true);

  function active() {
    setIsActive(true);
  }

  function noActive() {
    setIsActive(false);
  }

  return (
    <div className="players-mark-container">
      <p>PICK PLAYER 1’S MARK</p>
      <div className="marks">
        <BtnMark
          className={
            isActive
              ? `btn--gen btn--mark-icon mark-active`
              : `btn--gen btn--mark-icon`
          }
          mark={<IconX className="icon-mark iconX-mark" />}
          onClick={active}
        />
        <BtnMark
          className={
            !isActive
              ? `btn--gen btn--mark-icon mark-active`
              : `btn--gen btn--mark-icon`
          }
          mark={<IconO className="icon-mark iconO-mark" />}
          onClick={noActive}
        />
      </div>
      <p>REMEMBER : X GOES FIRST</p>
    </div>
  );
}

function BtnMark({ mark, className, onClick }) {
  return (
    <button onClick={onClick} className={className}>
      {mark}
    </button>
  );
}

function BtnNewGame({ btnText, className }) {
  return <button className={className}>{btnText}</button>;
}
