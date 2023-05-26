import Card from "./Card";
import ListGroup from "./ListGroup";

function MainContent() {
  let city = [
    "Ranchi",
    "Kolkata",
    "bhagalpur",
    "Mangalore",
    "Delhi",
    "Bangalore",
  ];
  return (
    <>
      <Card></Card>
      <ListGroup Heading="Dynamic List from consumer" City={city}></ListGroup>
    </>
  );
}

export default MainContent;
