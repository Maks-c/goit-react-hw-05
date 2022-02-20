
import {Loader} from "../components/Loader/Loader";
import {UseFetchItems} from "../helpers/UseFetchItems";
import {Link} from "react-router-dom";

export const HomePage = () => {
 const {items,loading}=UseFetchItems( )
  return (
    <main>
     <h1>List Movies</h1>
      {loading && Loader()}
      <ul>
        {items.map(item=> <li key={item.id}>
          <Link to={`movies/${item.id}`}>{item.title}</Link>
        </li>)}
      </ul>

    </main>
  );
};

