import React from 'react';
import {Routes, Route} from "react-router-dom";
import {Layout} from "./Layout";
import {ListPage} from "../pages";

export const App = () => {
  return <Routes>
    <Route path='/' element={<Layout/>}>
      <Route path='preview' element={<div>Preview page</div>}/>
      <Route path='create' element={<div>Create page</div>}/>
      <Route path='list' element={<ListPage/>}/>
    </Route>
  </Routes>

};

export default App;
