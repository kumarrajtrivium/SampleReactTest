import { MouseEvent } from "react";
import { Route, Routes, useNavigate } from "react-router";
// import Contact from ".Page/Contact";
// import Home from ".Page/Home";

function Menu() {
  let array = ["Home", "Contact"];
  //array = [];
  const handleClick = (event: MouseEvent) => console.log({ event });
  return (
    <>
      <h1>Dynamic List</h1>
      {array.length === 0 && <p>No Menu</p>}
      <ul className="list-group">
        {array.map((x, index) => (
          <li className="list-group-item" key={x} onClick={handleClick}>
            <a href={x}>{x}</a>
          </li>
        ))}
      </ul>
    </>
  );
  // const navigate = useNavigate();

  // const navigateToContacts = () => {
  //   // 👇️ navigate to /contacts
  //   navigate("/contact");
  // };
  // const navigateHome = () => {
  //   // 👇️ navigate to /
  //   navigate("/home");
  // };
  // return (
  //   <div>
  //     <div>
  //       <button onClick={navigateHome}>Home</button>
  //       <hr />
  //       <button onClick={navigateToContacts}>Contacts</button>

  //       <Routes>
  //         <Route path="/contact" element={<Contact />} />
  //         <Route path="/home" element={<Home />} />
  //       </Routes>
  //     </div>
  //   </div>
  // );
}
export default Menu;
