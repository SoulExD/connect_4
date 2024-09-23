import Button from "../components/Button";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="background">
      <div className="container">
        <h1>Connect 4</h1>
        <Button text="Play" className="primary-button" onClick={()=>{
            console.log("Button Clicked")
        }}></Button>
      </div>
    </div>
  );
};

export default Home;
