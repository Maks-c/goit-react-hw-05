import {useEffect, useState} from 'react';
import {getMovies} from "../services/moviesApi";

export const UseFetchItems = () => {
  const [items, setItems] = useState([])
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    async function fetchItems (){
      setLoading(true);
      try{
        const items=await getMovies();
        setItems(items);
      }catch(error){
      }finally{
        setLoading(false);
      }
    }
    fetchItems();
  }, [])
  return {items,loading}
};

