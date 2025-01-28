import React, { useEffect, useState } from 'react';
import "./App.css";
import { cinemaToday, cinemaFilm } from './models/bek';



const App = () => {
  const [statestr, setStatestr] = useState('main')

  const cinematoday = cinemaToday()
  const [cinemafilm, setCinemafilm] = useState(cinemaFilm(cinematoday.films[0].id))

  const intoFilm = ( id: string ) => {
    setCinemafilm(cinemaFilm(id))
    setStatestr('film')
    console.log(id)
  }

  if (statestr == 'main') {
    return (
    <p className = "debuts">
        <h1>POPCORNISSIMO</h1>
        <h2>Сегодня в прокате</h2>
        <br></br>
        {cinematoday.films.map(film => 
            <p key={film.name}>
                <h3>{film.name}</h3>
                <td><img className="film" src={'https://shift-intensive.ru/api'+film.img} alt=""/></td>
                <td valign="top">
                  <p className='ageR'><span>{film.ageRating}</span> jmhnfgv</p>
                  {film.description}
                <br></br>
                <br></br>
                  Дата выхода: {film.releaseDate}
                <br></br>
                <br></br>
                  {film.runtime} мин.
                <br></br>
                <br></br>
                  <p className='userR'>
                    кинопоиск {film.userRatings.kinopoisk}
                  <br></br>
                    imdb {film.userRatings.imdb}
                  </p>
                <br></br>
                  
                </td>
                
                <button onClick={() => intoFilm(film.id)} className="butDeb">подробнее</button>
                <br></br>
            </p>
        )}
    </p>
  );
  }

  if (statestr == 'film') {
    return (
    <p className = "debuts">
        <h1>{cinemafilm.film.name}</h1>
        <td><img className="film" src={'https://shift-intensive.ru/api'+cinemafilm.film.img} alt=""/></td>
        <td valign="top">
                  Дата релиза: {cinemafilm.film.releaseDate}
                <br></br>
                  Актеры: {cinemafilm.film.actors.map(actor =>
                    <div key={actor.id} className='actor'>
                      {actor.professions}: {actor.fullName}
                    </div>
                  )}
                <br></br>
                  Режисеры:
                <br></br>

                <br></br>
                  {cinemafilm.film.description}
                </td>
        
    </p>
  );
  }



  return (
    <div className="game">
      {
        
        <div className='form'>

        <input className='input'  name='login' type="text" placeholder="Введите логин..."/>
        
        <input className='input'  name='password' type="password" placeholder="Введите пароль..."/>
        <p></p>

      </div>

      }

    </div>
  );


};

export default App;