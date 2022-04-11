import {useParams, Outlet, Link,useLocation} from "react-router-dom";
import {getMovieById} from "../services/moviesApi";
import {useEffect, useState} from "react";
import {MovieCard} from "../components/MovieCard/MovieCard";
import {toast} from "react-hot-toast";


export const MovieDetailsPage = () => {
  const location=useLocation()

  const {itemId} = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    async function fetchItem(){
      try{
        const item = await getMovieById(itemId);
        setItem(item)
      } catch (error){
        toast.error('NOT FOUND, PLEASE ENTRY')
      }
    }

    fetchItem()
  }, [itemId])


  return (
    <main>
      <Link to={ location?.state?.from ?? '/' }> Go back </Link>
      {item && <MovieCard to='movies/:itemId' item={item}/> }
      <h2>Additional information</h2>
      <Link to='cast' state={{from:location}}>Cast</Link>
      <Link to='reviews' state={{from:location}}>Reviews</Link>
      <hr/>
      <Outlet/>

    </main>)
};

