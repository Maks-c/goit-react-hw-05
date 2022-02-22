import {useState} from "react";
import {ImSearch} from 'react-icons/im';


export const SearchBar = ({onSubmit}) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleQueryChange = (e) => {
    console.log(e.currentTarget.value)

    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchQuery.trim() === '') {
      return;
    }
    onSubmit(searchQuery);
    console.log(searchQuery)
    setSearchQuery('')
  };



  return (
    <>
      <form onSubmit={handleSubmit}>

        <input
          name='query'
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleQueryChange}
        />
        <button type="submit">Search<ImSearch/></button>
      </form>
    </>
  );
}
