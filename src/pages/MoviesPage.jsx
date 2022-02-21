import {useEffect, useState} from "react";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {getFoundMovie} from "../services/moviesApi";
// import {getFoundMovie} from "../services/moviesApi";
// import {toast} from "react-hot-toast";

export const MoviesPage = () => {

  const [query, setQuery] = useState('');
  const [found, setFound] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const search = searchParams.get('query')

  useEffect(() => {
    if(query === '') {
    }

    async function fetchItem(){
      const item = await getFoundMovie(query);
      setFound(item)
    }
    fetchItem()
  }, [query])

  useEffect(() => {
    if(search === null) {
    }

    async function fetchItem(){
      const item = await getFoundMovie(search)
      setFound(item)
    }
    fetchItem()
  }, [search])


  const forForm=(searchQuery)=>{
    setQuery(searchQuery);
    navigate({...location,search:`query=${searchQuery}`})
  }

  return (
    <div>

    </div>
  );
};

