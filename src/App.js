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
  const [isActive, setIsActive] = useState(false);

  function handleActiveMark() {
    setIsActive(!isActive);
  }

  return (
    <div className="new-game-menu">
      <Logo />
      <PlayersMarkContainer
        handleActiveMark={handleActiveMark}
        isActive={isActive}
      />
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

function PlayersMarkContainer({ handleActiveMark, isActive }) {
  return (
    <div className="players-mark-container">
      <p>PICK PLAYER 1’S MARK</p>
      <div className="marks">
        <BtnMark
          handleActiveMark={handleActiveMark}
          className={
            isActive
              ? `btn--gen btn--mark-icon`
              : `btn--gen btn--mark-icon mark-active`
          }
          mark={<IconX className="icon-mark iconX-mark" />}
        />
        <BtnMark
          handleActiveMark={handleActiveMark}
          className={
            !isActive
              ? `btn--gen btn--mark-icon`
              : `btn--gen btn--mark-icon mark-active`
          }
          mark={<IconO className="icon-mark iconO-mark" />}
        />
      </div>
      <p>REMEMBER : X GOES FIRST</p>
    </div>
  );
}

function BtnMark({ mark, className, handleActiveMark }) {
  return (
    <button onClick={handleActiveMark} className={className}>
      {mark}
    </button>
  );
}

function BtnNewGame({ btnText, className }) {
  return <button className={className}>{btnText}</button>;
}
