import {Link, useLocation, useNavigate} from "react-router-dom";


export const MovieCard = ({item}) => {
  const navigate=useNavigate()
  const location=useLocation()
  console.log(location)
  const releaseYear = new Date(item.release_date).getFullYear()
  const onGoBack = () =>
    location.state.from.search
      ? navigate(location?.state?.from ?? '/')
      : navigate(location?.state?.from?.state?.from ?? '/');

  return (
    <article>
      <button type='button' onClick={onGoBack}>Go Back</button>
      <h2>{item.title} <span>{releaseYear}</span></h2>
      <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title}/>
      <p>User score: {item.vote_average*10}%</p>
      <p>Overview: {item.overview}</p>
      <p>Genres: </p>
      <p>{item.genres.map(({id,name})=>{
        return <span key={id}>{name} </span>
      }) }</p>
      <hr/>
      <h2>Additional information</h2>
      <Link to='cast' state={{from:location}}>Cast</Link>
      <Link to='reviews' state={{from:location}}>Reviews</Link>
      <hr/>
    </article>

  )
};

