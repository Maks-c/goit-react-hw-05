import React from 'react';
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
export const FoundMovies = ({founds}) => {
const location=useLocation()
  console.log(location)

  return (
    <div>
      <ul>
        {founds.map(({id, title, poster_path}) => {
          return (
            <li key={id}>
              <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title}/>
              <div>
                <Link to={{pathname:`/movies/${id}`, state: {from:6}}}>{title}</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
};

