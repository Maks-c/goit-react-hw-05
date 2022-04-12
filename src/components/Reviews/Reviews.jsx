import { ReviewsList } from './ReviewsStyle';


export const Reviews = ({ items }) => {


  return (
    <ReviewsList>
      {items.map(review => (
        <li key={review.id}>
          <p>Author: {review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ReviewsList>


  );
};


