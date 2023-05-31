import { useEffect, useState } from 'react'
import axios from 'axios';
import IUserData from '../IUserData';

const useUser = () => {
    const [users, setUsers] = useState<IUserData[]>([]);
    const [error, setError] = useState("");
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
            setError(err.message);
        })
        .finally(() => {
            setLoading(false);
        });;
    }, []);
    return{users,error,isLoading};
}

export default useUser;
