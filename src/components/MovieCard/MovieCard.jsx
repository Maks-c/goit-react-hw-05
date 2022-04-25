import {Link,useLocation} from "react-router-dom";
import { BtnGoBack } from '../BtnGoBack/GoBack';
import {LinkBtn,Container,Feature,CardBlock,H2,LinkCast} from "./MovieCardStyle";
import PropTypes from 'prop-types';


//
// export const BackBtn = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate(location?.state?.from ?? '/movies');
//   }
//   return (
//     <BackBtnStyled type="button" onClick={handleClick}><BsArrowLeft size='20px'/> Go back</BackBtnStyled>
//   )
// }





export const MovieCard = ({item}) => {

  const location=useLocation()


  const releaseYear = new Date(item.release_date).getFullYear()
  return (
    <Container>
      <BtnGoBack/>
      {/*<LinkBtn type='button' to={ location?.state?.from ?? '/movies' }>Go Back</LinkBtn>*/}
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
