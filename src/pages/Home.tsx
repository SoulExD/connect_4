import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home: React.FC = () => {

  const nav = useNavigate();

  return (
    <div className="background">
      <div className="container">
        <h1>CONNECT 4</h1>
        <Button text="PLAY" className="primary-button" onClick={()=>{
            nav("/connect_4/game");
        }}></Button>
      </div>
    </div>
  );
};

export default Home;
