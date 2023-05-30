import { useEffect, useState } from "react";
import axios from "axios";
interface sampleData {
  id: number;
  name: string;
  username: string;
  email: string;
}
const ImportSampleData = () => {
  const [users, setUsers] = useState<sampleData[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      //success of api call
      .then((res) => {
        setUsers(res.data);
      })
      //if any error or failed the API call to the server
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default ImportSampleData;
