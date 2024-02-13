import { useNavigate } from "react-router-dom";
import About from "../component/About";
import "../style/Home.css";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="total-home-section">
        <div className="mid-section">
          <h2>Collection of 2023</h2>
          <h1>NEW ARRIVALS</h1>
          <button
            onClick={() => {
              navigate("/shop");
            }}
          >
            SHOP NOW
          </button>
        </div>
      </div>
      <About />
    </>
  );
};
export default Home;
