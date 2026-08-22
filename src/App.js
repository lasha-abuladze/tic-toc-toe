import logoImg from "./assets/logo.svg";
import { ReactComponent as IconO } from "./assets/icon-o.svg";
import { ReactComponent as IconX } from "./assets/icon-x.svg";
import { ReactComponent as IconRestart } from "./assets/icon-restart.svg";
import { useState } from "react";

export default function App() {
  const [chosenMark, setChosenMark] = useState(`x`);
  let playWith;

  const [page, setPage] = useState(1);

  return (
    <>
      {page === 0 ? (
        <NewGameMenu
          setChosenMark={setChosenMark}
          chosenMark={chosenMark}
          playWith={playWith}
        />
      ) : (
        <MainPage />
      )}
    </>
  );
}

////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////////////////////////////

//////    GAME PAGE             ?/////////

function MainPage() {
  return (
    <div className="game-container">
      <GameHeader />
      <GameBoard />
    </div>
  );
}

function GameHeader() {
  return (
    <header className="game-header">
      <Logo classN="game-logo" />
      <WhoseTurn />
      <RestartBtn />
    </header>
  );
}

function WhoseTurn({ classN }) {
  return <span className="whose-turn">x turn</span>;
}

function RestartBtn() {
  return (
    <button className="btn--gen btn--restart">
      <IconRestart className="icon-restart" />
    </button>
  );
}

function GameBoard() {
  return (
    <div className="game-board">
      <MarkCell />
      <MarkCell />
      <MarkCell />
      <MarkCell />
      <MarkCell />
      <MarkCell />
      <MarkCell />
      <MarkCell />
      <MarkCell />
    </div>
  );
}

function MarkCell() {
  return <button className="btn--gen btn--mark-cell"></button>;
}

//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

/////////////           NEW GAMW MENU             //////////

function NewGameMenu({ chosenMark, setChosenMark, playWith }) {
  return (
    <div className="new-game-menu">
      <Logo classN="logo-gameMenu" />
      <PlayersMarkContainer setChosenMark={setChosenMark} />
      <BtnNewGame
        className="btn--gen btn--chose-opponent btn--chose-opponent--vs-cpu"
        btnText={`NEW GAME (VS CPU)`}
        dataPlayWith="cpu"
        chosenMark={chosenMark}
        playWith={playWith}
      />
      <BtnNewGame
        className="btn--gen btn--chose-opponent btn--chose-opponent--vs-player"
        btnText={`NEW GAME  (VS PLAYER)`}
        dataPlayWith="player"
        chosenMark={chosenMark}
        playWith={playWith}
      />
    </div>
  );
}

function Logo({ classN }) {
  return <img className={`logo ${classN}`} src={logoImg} alt="logo" />;
}

function PlayersMarkContainer({ setChosenMark }) {
  const [isActive, setIsActive] = useState(true);

  function active(el) {
    setIsActive(true);
    setChosenMark(el.dataset.mark);
  }

  function noActive(el) {
    setIsActive(false);
    setChosenMark(el.dataset.mark);
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

function BtnNewGame({
  btnText,
  className,
  dataPlayWith,
  chosenMark,
  playWith,
}) {
  return (
    <button
      onClick={(el) => {
        playWith = el.target.dataset.playWith;
        console.log(chosenMark, playWith);
      }}
      className={className}
      data-play-with={dataPlayWith}
    >
      {btnText}
    </button>
  );
}
