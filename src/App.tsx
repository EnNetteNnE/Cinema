import React, { useEffect, useState } from 'react';
import "./App.css";
import { cinemaToday } from './models/bek';



const App = () => {
  const [statestr, setStatestr] = useState('main')

  const cinematoday = cinemaToday()

  const intoFilm = ( id: string ) => {
    setStatestr('film')

    //setRestartTrue(true)
  }

  if (statestr == 'main') {
    return (
    <p className = "debuts">
        <h3>Сегодня в прокате</h3>
        {cinematoday.films.map(film => 
            <p key={film.name}>
                <h2>{film.name}</h2>
                <img src={'https://shift-intensive.ru/api'+film.img} alt=""/>
                <button onClick={() => intoFilm(film.id)} className="butDeb">подробнее</button>
                
            </p>
        )}
    </p>
  );
  }

  if (statestr == 'film') {



    return (
    <p className = "debuts">
        <h3>Сегодня в прокате</h3>
        {cinematoday.films.map(film => 
            <p key={film.name}>
                <h2>{film.name}</h2>
                <img src={'https://shift-intensive.ru/'+film.img} alt=""/>
                <button onClick={() => intoFilm(film.id)} className="butDeb">подробнее</button>
            </p>
        )}
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