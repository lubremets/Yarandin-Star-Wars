import React, { useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import _ from 'lodash';
import FilmsList from './components/FilmsList';

const FilmUrl = 'https://swapi.co/api/films/';

const App = () => {
  const [listOfFilms, setListOfFilms] = useState([]);
  const [title, setTitle] = useState('');
  // const match = useRouteMatch();

  const getFilmFromServer = async() => {
    const response = await fetch(`${FilmUrl}`);

    return response.json();
  };

  const setQueryWithDebounce = _.debounce((query) => {
    setTitle(query);
  }, 1000);

  const loadFilms = async() => (
    setListOfFilms((await getFilmFromServer()).results)
  );

  const sortByName = () => setListOfFilms(prevState => (
    [...prevState].sort((a, b) => a.title.localeCompare(b.title))));

  const sortByEpisod = () => setListOfFilms(prevState => (
    [...prevState].sort((a, b) => b.episode_id - a.episode_id)));

  const findPost = () => listOfFilms.filter(item => item.title.includes(title));

  return (
    <div className="App" align="center">
      <div className="image" />
      <h1 className="App__header">Star Wars Films</h1>
      <NavLink to="/films" onClick={loadFilms}>
        Show films
      </NavLink>
      {listOfFilms.length !== 0
        && (
          <>
            <input
              placeholder="Search..."
              onChange={event => setQueryWithDebounce(event.target.value)}
            />
            <button type="button" onClick={sortByName}>sortByName</button>
            <button type="button" onClick={sortByEpisod}>sortByEpisod</button>

            <Route path="/films/:id?">
              <FilmsList listOfFilms={findPost()} />
            </Route>
            {/* {console.log(match.params.id)} */}
          </>
        )
      }
    </div>
  );
};

export default App;
