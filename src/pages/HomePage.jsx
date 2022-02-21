import {useEffect, useState} from 'react';
import {Loader} from "../components/Loader/Loader";
// import {getMovies} from "../services/moviesApi";
// import {UseFetchItems} from "../helpers/UseFetchItems";
import {Link} from "react-router-dom";
import {getMovies} from "../services/moviesApi";

export const HomePage = () => {
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
 // const {items,loading}=UseFetchItems( )
  return (
    <main>
     <h1>List Movies</h1>
      {loading && Loader()}
      <ul>
        {items.map(item=> <li key={item.id}>
          <Link to={`movies/${item.id}`}>{item.title}</Link>
        </li>)}
      </ul>

    </main>
  );
};

