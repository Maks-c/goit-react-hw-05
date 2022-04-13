import {Link,useLocation} from "react-router-dom";
import {LinkBtn,Container,Feature,CardBlock,H2} from "./MovieCardStyle";




export const MovieCard = ({item}) => {

  const location=useLocation()
  const releaseYear = new Date(item.release_date).getFullYear()
  return (
    <Container>
      <LinkBtn to={ location?.state?.from ?? '/' }>Go Back</LinkBtn>
      <H2>{item.title} <span>{releaseYear}</span></H2>
      <CardBlock>
        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title}/>
        <Feature>
          <p>User score: {item.vote_average*10}%</p>
          <p>Overview: {item.overview}</p>
          <p>Genres: </p>
          <p>{item.genres.map(({id,name})=>{return <span key={id}>{name} </span>}) }</p>
        </Feature>
      </CardBlock>
      <h2>Additional information</h2>
      <hr/>
      <Link to='cast' state={{from:location}}>Cast</Link>
      <Link to='reviews' state={{from:location}}>Reviews</Link>

    </Container>

  )
};

