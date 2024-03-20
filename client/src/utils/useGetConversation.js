import { useEffect, useState } from "react";
import fetchHelper from "./fetchHelper";
import { toast } from "react-hot-toast";

const useGetConversation = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await fetchHelper("/users", "get");
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error)
                }
                setConversations(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }

        getConversations();
    }, []);

    return { loading, conversations }
}

export default useGetConversation;