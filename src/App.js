import logoImg from "./assets/logo.svg";
import { ReactComponent as IconO } from "./assets/icon-o.svg";
import { ReactComponent as IconX } from "./assets/icon-x.svg";
import { useState } from "react";

export default function App() {
  const [chosenMark, setChosenMark] = useState(`x`);
  const [chooseOpponent, setChooseOpponent] = useState();
  // let chosenMark = `x`;
  // const [playWith, setPlayWith] = useState();
  // let playWith;

  function startGame() {
    console.log(
      `you have chossen ${chosenMark} and play with ${chooseOpponent}`,
    );
  }

  return (
    <>
      <NewGameMenu
        chosenMark={setChosenMark}
        playWith={setChooseOpponent}
        startGame={startGame}
      />
    </>
  );
}

function NewGameMenu({ chosenMark, playWith, startGame }) {
  return (
    <div className="new-game-menu">
      <Logo />
      <PlayersMarkContainer chosenMark={chosenMark} />
      <BtnNewGame
        className="btn--gen btn--chose-opponent btn--chose-opponent--vs-cpu"
        btnText={`NEW GAME (VS CPU)`}
        dataPlayWith="cpu"
        playWith={playWith}
        startGame={startGame}
      />
      <BtnNewGame
        className="btn--gen btn--chose-opponent btn--chose-opponent--vs-player"
        btnText={`NEW GAME  (VS PLAYER)`}
        dataPlayWith="player"
        playWith={playWith}
        startGame={startGame}
      />
    </div>
  );
}

function Logo() {
  return <img className="logo" src={logoImg} alt="logo" />;
}

function PlayersMarkContainer({ chosenMark }) {
  const [isActive, setIsActive] = useState(true);

  function active(el) {
    setIsActive(true);
    chosenMark(el.dataset.mark);
    // console.log(chosenMark);
  }

  function noActive(el) {
    setIsActive(false);
    chosenMark(el.dataset.mark);
    // console.log(chosenMark);
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
          onClick={(e) => active(e.target.closest(`.btn--mark-icon`))}
          dataMark="x"
        />
        <BtnMark
          className={
            !isActive
              ? `btn--gen btn--mark-icon mark-active`
              : `btn--gen btn--mark-icon`
          }
          mark={<IconO className="icon-mark iconO-mark" />}
          onClick={(e) => noActive(e.target.closest(`.btn--mark-icon`))}
          dataMark="o"
        />
      </div>
      <p>REMEMBER : X GOES FIRST</p>
    </div>
  );
}

function BtnMark({ mark, className, onClick, dataMark }) {
  return (
    <button onClick={onClick} className={className} data-mark={dataMark}>
      {mark}
    </button>
  );
}

function BtnNewGame({ btnText, className, dataPlayWith, playWith, startGame }) {
  function chooseOpponent(el) {
    playWith(el.target.dataset.playWith);
  }

  return (
    <button
      onClick={(e) => {
        chooseOpponent(e);
        startGame();
      }}
      className={className}
      data-play-with={dataPlayWith}
    >
      {btnText}
    </button>
  );
}
