import React from 'react';
import {ImageGalleryStyle,ImageGalleryItemImage,ImageGalleryItemStyle} from "./MainPageStyle";
import {Link} from "react-router-dom";


export const MainPage = ({items}) => {

  return (
    <div>
      <main>
        <h1>List Movies</h1>
        <ImageGalleryStyle>
          {items.map(({id, title, poster_path}) =>
            <ImageGalleryItemStyle key={id}>
              <Link to={`movies/${id}`}>
                <ImageGalleryItemImage src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title}/>
                <p>{title}</p>
              </Link>
            </ImageGalleryItemStyle>)}
        </ImageGalleryStyle>
      </main>
    </div>
  );
};

