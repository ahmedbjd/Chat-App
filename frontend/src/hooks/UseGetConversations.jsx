import react, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const UseGetConversations = () => {
    const {setErrorState} = useAuth();
    const [conversations, setConversations] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      const getConversations = async () => {
        setLoading(true);
        try {
          const response = await axios.get('/api/users');
          if (response.error){
            throw new Error(response.error);
          }
          const data = response.data;
          setConversations(data);
        } catch (error) {
          setErrorState(error.message);
        }finally{
          setLoading(false);
        }
      }

      getConversations();
    }, []);

    return {conversations, loading};
}

export default UseGetConversations;