import WineProfile from "../components/WineProfile";
import Food from "../components/Food";
import ProgressBar from "../components/ProgressBar";
import foodDummy from "../dummyFiles/foodDummy";
import "../styles/Home.css";
import Header from "../components/Header";

export default function HomeWhite() {
  return (
    <div>
      <Header></Header>
      <div className="home-container">
        <aside className="home-aside">
          <WineProfile />
        </aside>
        <hr className="home-divider" />
        <section className="home-section">
          {foodDummy.map((foodData) => (
            <Food key={foodData.id} foodDummy={foodData} />
          ))}
        </section>
        <ProgressBar />
      </div>
    </div>
  );
}
