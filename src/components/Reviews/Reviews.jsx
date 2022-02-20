


export const Reviews = ({items}) => {

  console.log(items)
  return (
    <ul>
      {items.map(review => (
        <li key={review.id}>
          <p>Author: {review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>


  );
};


