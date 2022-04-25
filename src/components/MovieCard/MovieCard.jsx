import {Link,useLocation} from "react-router-dom";
import { BtnGoBack } from '../BtnGoBack/GoBack';
import {Container,Feature,CardBlock,H2,LinkCast} from "./MovieCardStyle";
import PropTypes from 'prop-types';







export const MovieCard = ({item}) => {

  const location=useLocation()


  const releaseYear = new Date(item.release_date).getFullYear()
  return (
    <Container>
      <BtnGoBack/>
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
      <LinkCast to='cast' state={location.state}>Cast</LinkCast>
      <Link to='reviews' state={location.state}>Reviews</Link>
    </Container>
  )
};

MovieCard.propTypes={
  item:PropTypes.array.isRequired
}
