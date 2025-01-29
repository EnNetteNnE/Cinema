import React, { FC } from "react";


interface FilmsProps {
    intoFilm: ( id: string ) => void;
    cinematoday: any;
    setRestartTrue: (restartTrue: boolean) => void;
}


const Films: FC<FilmsProps> = ({intoFilm}, cinematoday) => {

    

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
};


export default Films;


