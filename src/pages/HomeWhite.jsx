import WineProfile from "../components/WineProfile";
import Food from "../components/Food";
import foodDummy from "../dummyFiles/foodDummy";
import "../styles/Home.css";

export default function HomeWhite() {
  return (
    <div className="home-container">
      <aside className="home-aside">
        <h1>This is Home White</h1>
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
