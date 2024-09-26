import GameBoard from "../components/Gameboard";
import "./Game.css";

const Game: React.FC = () => {
  return (
    <div className="background">
        <div className="container">
        <GameBoard/>
        </div>
    </div>
  );
};

export default Game;
