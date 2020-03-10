import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import Film from './Film';

import ShowInfo from './ShowInfo';

function FilmsList({ listOfFilms }) {
  const match = useRouteMatch();

  return (
    match.params.id !== undefined
      // eslint-disable-next-line max-len
      ? <ShowInfo film={listOfFilms.find(item => item.episode_id === +match.params.id)} />
      : (
        <ul>
          {
            listOfFilms.map(film => <Film film={film} key={film.episode_id} />)
          }
        </ul>
      )
  );
}

FilmsList.propTypes = {
  listOfFilms: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FilmsList;
