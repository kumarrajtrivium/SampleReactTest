import Header from "./Component/Header";
import Footer from "./Component/Footer";
import MainContent from "./Component/MainContent";
import Menu from "./Component/Menu";
import FacColor from "./Component/FavColor";

function App() {
  return (
    <div>
      <FacColor></FacColor>
      <Header />
      <span>
        <Menu />
        <MainContent />
      </span>
      <Footer />
    </div>
  );
}

export default App;
