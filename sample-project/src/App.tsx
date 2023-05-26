import Header from "./Component/Header";
import Footer from "./Component/Footer";
import MainContent from "./Component/MainContent";
import Menu from "./Component/Menu";
import FavColor from "./Component/FavColor";
import Message from "./Component/Message";

function App() {
  return (
    <div>
      <FavColor></FavColor>
      <Message text="i am dynamic mesage"></Message>
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
