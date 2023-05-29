import { useParams } from "react-router-dom";

const Contact = () => {
  let { id } = useParams();
  return (
    <div style={{ border: 1 }}>
      <h1 style={{ color: "aqua" }}>You are in Contact us page no. {id}</h1>;
    </div>
  );
};
export default Contact;
