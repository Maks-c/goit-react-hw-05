import {useEffect, useState} from "react";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {getFoundMovie} from "../services/moviesApi";
import {SearchBar} from "../components/SearchBar/SearchBar";
import {FoundMovies} from "../components/MoviesPage/FoundMovies";


export const MoviesPage = () => {

  const [query, setQuery] = useState('');
  const [found, setFound] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const search = searchParams.get('query')
  console.log(found)
  useEffect(() => {
    if(query === '') {
      return
    }

    async function fetchItem(){
      try{
        const item = await getFoundMovie(query);
        setFound(item)
      } catch (error){
      }
    }

    fetchItem()
  }, [query])

  useEffect(() => {
    if(search === null) {
      return
    }

    async function fetchItem(){
      try{
        const item = await getFoundMovie(search)
        setFound(item)
      } catch (error){
      }
    }

    fetchItem()
  }, [search])


  const forForm = (searchQuery) => {
    setQuery(searchQuery);
    console.log()
    navigate({...location, search: `query=${searchQuery}`})
  }

  return (
    <>
      <SearchBar onSubmit={forForm}/>
      <FoundMovies found={found}/>
    </>

  );
};

