import React, { useEffect, useState } from 'react';
import "./App.css";
import { cinemaToday, cinemaFilm, cinemaTime } from './models/bek';



const App = () => {
  const [statestr, setStatestr] = useState('main')

  const cinematoday = cinemaToday()
  const [cinemafilm, setCinemafilm] = useState(cinemaFilm(cinematoday.films[0].id))
  const [cinematime, setCinematime] = useState(cinemaTime(cinematoday.films[0].id))

  const intoFilm = ( id: string ) => {
    setCinemafilm(cinemaFilm(id))
    setCinematime(cinemaTime(id))
    setStatestr('film')
    console.log(id)
  }

  const back = () => {
    setStatestr('main')
  }

  if (statestr == 'main') {
    return (
    <p className = "debuts">
        <h1 className='popcorn'>POPCORNISSIMO</h1>
        <h2 className='todayprok'>Сегодня в прокате</h2>
        <br></br>
        {cinematoday.films.map(film => 
            <p key={film.name}>
                <h1 className='filmsname'>{film.name}</h1>
                <td><img className="film" src={'https://shift-intensive.ru/api'+film.img} alt=""/></td>
                <td valign="top" className='descr'>
                  <p className='ageR'><span>{film.ageRating}</span>{film.genres.map(gen =>
                  <div key={gen} className='geners'>{gen + ' '}</div>
                )}
                </p>
                <p className='descr'>
                <br></br>
                  {film.description}
                <br></br>
                <br></br>
                  Дата выхода: {film.releaseDate}
                <br></br>
                <br></br>
                  {film.runtime} мин.
                </p>                 
                </td>
                
                <button onClick={() => intoFilm(film.id)} className="butDeb">подробнее</button>
                <br></br>
            </p>
        )}
        <p className='bottom'></p>
    </p>
  );
  }

  if (statestr == 'film') {
    return (
    <p className = "filmbody">
        
        <h1 className='filmname'>{cinemafilm.film.name}</h1>
        <button onClick={() => back()} className="butfilm">к списку фильмов</button>

        <td><img className="film" src={'https://shift-intensive.ru/api'+cinemafilm.film.img} alt=""/></td>
        
        <td valign="top">
          <p className='inf'>
                  {cinemafilm.film.country.name}
                <br></br>
                <br></br>
                  {cinemafilm.film.originalName}
                <br></br>
                <br></br>
                <p className='userR'>
                    кинопоиск {cinemafilm.film.userRatings.kinopoisk}
                  <br></br>
                    imdb {cinemafilm.film.userRatings.imdb}
                  </p>
                <br></br>

                <br></br>
                  </p>
                </td>
                <td valign="top">
                <p className='inf'>
                  <p className='nameA'>Актеры:</p> {cinemafilm.film.actors.map(actor =>
                    <div key={actor.id} className='actor'>
                      {actor.professions}: {actor.fullName}
                    </div>
                  )}
                  <br></br>
                  <p className='nameA'>Режисеры:</p> {cinemafilm.film.directors.map(actor =>
                    <div key={actor.id} className='actor'>
                      {actor.professions}: {actor.fullName}
                    </div>
                  )}
                  </p>
                </td>
                <br></br>

        {cinematime.schedules.map(date => 
          <div key={date.date}>
            <p className='date'>{date.date}</p>
            <br></br>
            {date.seances.map(t =>
              <button onClick={() => back()} className='buttime'>{t.time}</button>
            )}
          </div>
        )}

      <p className='bottom'></p>
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