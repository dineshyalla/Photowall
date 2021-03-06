import React from 'react';
import PropTypes from 'prop-types';

function Photo(props) {
  const post = props.post;
  return (
    <figure className="figure">
      <img className="photo" src={post.imageLink} alt={post.description}></img>
      <figcaption>
        <p>{post.description}</p>
        <div className="button-container">
          <button
            className="remove-button"
            onClick={() => {
              props.onRemovePhoto(post);
            }}
          >
            Remove
          </button>
        </div>
      </figcaption>
    </figure>
  );
}

Photo.protoTypes = {
  post: PropTypes.object.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default Photo;
