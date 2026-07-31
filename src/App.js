import logoImg from "./assets/logo.svg";
import { ReactComponent as IconO } from "./assets/icon-o.svg";
import { ReactComponent as IconX } from "./assets/icon-x.svg";

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
      <BtnNewGame btnText={`NEW GAME (VS CPU)`} />
      <BtnNewGame btnText={`NEW GAME  (VS PLAYER)`} />
    </div>
  );
}

function Logo() {
  return <img className="logo" src={logoImg} alt="logo" />;
}

function PlayersMarkContainer() {
  return (
    <div className="players-mark-container">
      <p>PICK PLAYER 1’S MARK</p>
      <div className="marks">
        <BtnMark mark={<IconX className="icon" />} />
        <BtnMark mark={<IconO />} />
      </div>
      <p>REMEMBER : X GOES FIRST</p>
    </div>
  );
}

function BtnMark({ mark }) {
  return <button className="icon">{mark}</button>;
}

function BtnNewGame({ btnText }) {
  return <button>{btnText}</button>;
}
