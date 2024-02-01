import WineProfile from "../components/WineProfile";
import Food from "../components/Food";
import foodDummy from "../dummyFiles/foodDummy";
import "../styles/Home.css";

export default function Home() {
  return (
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
    </div>
  );
}
