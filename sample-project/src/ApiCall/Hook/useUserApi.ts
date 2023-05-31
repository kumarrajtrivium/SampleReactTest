import { useEffect, useState } from 'react'
import axios from 'axios';
import IUserApi from '../IUserApi';

const useUserApi = () => {
    const [users, setUsers] = useState<IUserApi[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
      axios
        .get("http://localhost:5223/Admin")
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

export default useUserApi;
