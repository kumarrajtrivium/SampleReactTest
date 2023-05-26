import Header from "./Component/Header";
import Footer from "./Component/Footer";
import MainContent from "./Component/MainContent";
import Menu from "./Component/Menu";
import FavColor from "./Component/FavColor";
import Message from "./Component/Message";
import Alert from "./Component/Alert";
import Button from "./Component/Button";
import { useState } from "react";
import OnSelectClick from "./Component/OnSelectClick";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["Kolkata", "Delhi", "Mumbai", "Bangalore", "Chennai"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {/* <Button></Button> */}
      {/* <Alert message="comming from app"></Alert> */}
      {/* <Alert>
        <p>
          <b>comming from app function</b>
        </p>
      </Alert> */}
      <OnSelectClick
        heading="Hello My Head"
        items={items}
        onSelectItem={handleSelectItem}
      ></OnSelectClick>
      <>
        <Button color="success" onClick={() => setAlertVisibility(true)}>
          My button
        </Button>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            <i>Alert is visible you can close it on click of close icon</i>
          </Alert>
        )}
      </>
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
