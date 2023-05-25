import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Menu from "./Component/Menu";
import MainContent from "./Component/MainContent";

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
