import React from 'react';
import {Routes, Route} from "react-router-dom";
import {Navigation} from "./components/Navigation/Navigation";
import {HomePage} from "./pages"
import {MoviesPage} from "./pages";
import {MovieDetailsPage} from "./pages";
import {ActorsPage} from "./pages";
import {DescriptionPage} from "./pages";

export const App = () => {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='movies' element={<MoviesPage/>}/>
        <Route path='movies/:itemId' element={<MovieDetailsPage/>}>
          <Route path='cast' element={<ActorsPage/>}/>
          <Route path='reviews' element={<DescriptionPage/>}/>
        </Route>
      </Routes>
    </>

  )
};


