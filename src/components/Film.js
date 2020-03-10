import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
// import ShowInfo from './ShowInfo';

export default function Film({ film }) {
  const history = useHistory();

  return (
    <button
      className="film"
      type="button"
      style={{ cursor: 'pointer' }}
      onClick={() => {
        history.push({
          pathname: `/films/${film.episode_id}`,
        });
      }}
    >
      {film.title}
    </button>
  );
}

Film.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};
