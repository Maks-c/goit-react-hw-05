import React from 'react';
import { useLocation } from 'react-router-dom';
import { ListFoundStyle, ImageFoundItem, Container, ImageFound, StyledLink } from './FoundMoviesStyle';


export const FoundMovies = ({ founds }) => {
  const location = useLocation();
  return (
    <Container>
      <ListFoundStyle>
        {founds.map(({ id, title, poster_path }) => {
          return (
            <ImageFoundItem key={id}>
              <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                <ImageFound src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
                {title}</StyledLink>
            </ImageFoundItem>
          );
        })}
      </ListFoundStyle>
    </Container>
  );
};

