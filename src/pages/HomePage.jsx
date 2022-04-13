import {useEffect, useState} from 'react';
import {getMovies} from "../services/moviesApi";
import {MainPage} from "../components/MainPage/MainPage";
import {Loader} from "../components/Loader/Loader";

export const HomePage = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchItems(){
      setLoading(true);
      try{
        const items = await getMovies();
        const movies = items.map(({id, title, poster_path}) => ({id, title, poster_path}))
        setItems(movies);
      } catch (error){
      } finally{
        setLoading(false);
      }
    }

    fetchItems();
  }, [])

  return (
    <>
      {loading && Loader()}
      <MainPage items={items}/>
    </>
  );
};

