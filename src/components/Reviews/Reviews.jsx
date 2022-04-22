import { ReviewsList } from './ReviewsStyle';
import PropTypes from 'prop-types';


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

Reviews.propTypes={
  items:PropTypes.array.isRequired
}
