import axios from "axios";
import useUser from "./Hook/useUser";
import IUserData from "./IUserData";
import { useEffect, useState } from "react";

const ImportSampleData = () => {
  //const { users, error, isLoading } = useUser();
  const [users, setUsers] = useState<IUserData[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      //success of api call
      .then((res) => {
        setUsers(res.data);
      })
      //if any error or failed the API call to the server
      .catch((err) => {
        setErrors(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const deleteUser = (user: IUserData) => {
    const orginalState = [...users];
    setUsers(users.filter((x) => x.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setErrors(err.message);
        setUsers(orginalState);
      });
  };
  const addUser = () => {
    const newUser = {
      id: Math.floor(Math.random() * 100),
      name: "Raj",
      username: "Rajranjan",
      email: "raj.ranjan@gmail.com",
    };
    setUsers([...users, newUser]);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => setUsers([...users, res.data]));
  };
  return (
    <div>
      {isLoading && <div className="spiner-border"></div>}
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <button onClick={addUser}>Add User</button>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={() => deleteUser(item)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};
export default ImportSampleData;
