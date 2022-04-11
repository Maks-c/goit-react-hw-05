import React from 'react';
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {ListFoundStyle,ImageFoundItem,Container,ImageFound} from "./FoundMoviesStyle";


export const FoundMovies = ({founds}) => {
const location=useLocation()
  return (
    <Container>
      <ListFoundStyle>
        {founds.map(({id, title, poster_path}) => {
          return (
            <ImageFoundItem key={id}>
              <ImageFound src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title}/>
              <div>
                <Link to={`/movies/${id}`} state={{from:location}}>{title}</Link>
              </div>
            </ImageFoundItem>
          );
        })}
      </ListFoundStyle>
    </Container>
  )
};

