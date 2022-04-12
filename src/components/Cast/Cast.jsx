import { CastList } from './CastStyle';


export const Cast = ({ items }) => {
  return (
    <>
      {items && (
        <div>
          {items.length > 0 && (
            <CastList>
              {items.map(item => {
                  return <li key={item.id}>
                    <div>
                      {item.profile_path && (
                        <img src={`https://image.tmdb.org/t/p/w300${item.profile_path}`} alt={item.name} />)
                      }
                      <div>
                        <p>Name: {item.name}</p>
                        <p>Character: {item.character}</p>
                      </div>
                    </div>
                  </li>;
                },
              )}
            </CastList>
          )}
        </div>
      )}
    </>


  );
};

