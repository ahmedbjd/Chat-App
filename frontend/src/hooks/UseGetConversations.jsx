import react, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const UseGetConversations = () => {
    const {setLoadingState, setErrorState} = useAuth();
    const [conversations, setConversations] = useState([]);
    useEffect(() => {
      const getConversations = async () => {
        setLoadingState(true);
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
          setLoadingState(false);
        }
      }

      getConversations();
    }, []);

    return {conversations};
}

export default UseGetConversations;