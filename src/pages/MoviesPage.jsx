import {useState} from "react";


export const MoviesPage = () => {

  const [search, setSearch] = useState('')

  const handleNameChange = e => {
    setSearch(e.currentTarget.value.toLowerCase());
  }
  //
  // const handleSubmit = e => {
  //   e.preventDefault()
  //   if(search.trim() === '') {
  //     return alert('Please entry')
  //   }
  //   onSubmit(search)
  //   setSearch('')
  // }


  return (
    <div>
      <h2>Введите имя поиска</h2>
      <form>
        <input
          value={search}
          name='movies'
          type='text'
          onChange={handleNameChange}
        />
      </form>
    </div>


  );
};

