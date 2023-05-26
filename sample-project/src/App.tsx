import Header from "./Component/Header";
import Footer from "./Component/Footer";
import MainContent from "./Component/MainContent";
import Menu from "./Component/Menu";

function App() {
  return (
    <div>
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
