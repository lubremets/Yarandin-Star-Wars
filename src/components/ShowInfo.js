import React from 'react';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';

export default function ShowInfo({ film }) {
  return (
    <ul>
      <li style={{
        color: 'red', fontSize: '32px',
      }}
      >
        {film.title}
      </li>
      <li style={{ color: 'red' }}>{film.opening_crawl}</li>
      <li style={{ color: 'red' }}>
        <span style={{ color: 'yellow' }}>Director: </span>
        {film.director}
      </li>
      <li style={{ color: 'red' }}>
        <span style={{ color: 'yellow' }}>Producer: </span>
        {film.producer}
      </li>
      <li style={{ color: 'red' }}>
        <span style={{ color: 'yellow' }}>Release Date: </span>
        {film.release_date}
      </li>
    </ul>
  );
}

ShowInfo.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string,
    opening_crawl: PropTypes.string,
    director: PropTypes.string,
    producer: PropTypes.string,
    release_date: PropTypes.string,
  }).isRequired,
};
