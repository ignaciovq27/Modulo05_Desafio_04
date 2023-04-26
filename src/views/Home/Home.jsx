// css
import "../Home/Home.css"

//components
import Gallery from "../../components/Gallery/Gallery";
import MyHeader from "../../components/MyHeader/MyHeader"

export default function Home() {
  return (
    <div className="home-container" id="Home">
      <MyHeader />
      <h4 className="mt-4 mb-0">Nuestras pizzas:</h4>
      <Gallery />
    </div>
  );
}
