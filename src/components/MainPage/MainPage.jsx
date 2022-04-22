import React from 'react';
import { ImageGalleryStyle, ImageGalleryItemImage, ImageGalleryItemStyle, Container } from './MainPageStyle';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MainPage = ({ items }) => {
  const location = useLocation();
  return (
    <Container>
      <main>
        <h1>List Movies</h1>
        <ImageGalleryStyle>
          {items.map(({ id, title, poster_path }) =>
            <ImageGalleryItemStyle key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }} style={{ textDecoration: 'none' }}>
                <ImageGalleryItemImage src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
                <p>{title}</p>
              </Link>
            </ImageGalleryItemStyle>)}
        </ImageGalleryStyle>

      </main>
    </Container>
  );
};

MainPage.propTypes={
  items:PropTypes.array.isRequired
}
