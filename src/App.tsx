import React, { useEffect, useState } from 'react';
import "./App.css";
import { cinemaToday, cinemaFilm, cinemaTime } from './models/bek';



const App = () => {
  const [statestr, setStatestr] = useState('main')

  const cinematoday = cinemaToday()
  const [cinemafilm, setCinemafilm] = useState(cinemaFilm(cinematoday.films[0].id))
  const [cinematime, setCinematime] = useState(cinemaTime(cinematoday.films[0].id))
  const [cinemahall, setCinemahall] = useState(cinemaTime(cinematoday.films[0].id).schedules[0].seances[0].hall)
  const [cell, setCell] = useState({date: '', time: '', hall: '', row: 0, column: 0, price: 0})

  const intoFilm = ( id: string ) => {
    setCinemafilm(cinemaFilm(id))
    setCinematime(cinemaTime(id))
    setStatestr('film')
  }

  const back = () => {
    setStatestr('main')
  }

  const back1 = () => {
    setStatestr('film')
  }

  const back2 = () => {
    setStatestr('hall')
  }

  const hall = (date: string, time: string, hall: {
    name: string,
    places: [
      [
        {
          price: number,
          type: string
        }
      ]
    ]
  }) => {
    setCell({date: date, time: time, hall: hall.name, row: 0, column: 0, price: 0})
    setStatestr('hall')
    setCinemahall(hall)
  }

  const formToPay = (row: number, column: number, price: number) => {
    if (price !== 0) {
      setCell({date: cell.date, time: cell.time, hall: cell.hall, row: row, column: column, price: price})
      setStatestr('form')
    }
  }
  
  
  const [firstname, setFirstname] = useState('')
  const [firstnameDirty, setFirstnameDirty] = useState(false)
  const [firstnameError, setFirstnameError] = useState('Имя не может быть пустым')

  const [lastname, setLastname] = useState('')
  const [lastnameDirty, setLastnameDirty] = useState(false)
  const [lastnameError, setLastnameError] = useState('Фамилия не может быть пустым')

  const [phone, setPhone] = useState('')
  const [phoneDirty, setPhoneDirty] = useState(false)
  const [phoneError, setPhoneError] = useState('Телефон не может быть пустым')
  
  const [pan, setPan] = useState('')
  const [panDirty, setPanDirty] = useState(false)
  const [panError, setPanError] = useState('Номер карты не может быть пустым')
  
  const [expireDate, setExpireDate] = useState('')
  const [expireDateDirty, setExpireDateDirty] = useState(false)
  const [expireDateError, setExpireDateError] = useState('Срок действия не может быть пустым')

  const [cvv, setCvv] = useState('')
  const [cvvDirty, setCvvDirty] = useState(false)
  const [cvvError, setCvvError] = useState('cvv не может быть пустым')
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (cvvError || expireDateError || panError || firstnameError || lastnameError || phoneError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [cvvError, expireDateError, panError, firstnameError, lastnameError, phoneError])

  const firstnameHandler = (e: any) => {
    setFirstname(e.target.value)
      if(!e.target.value) {
        setFirstnameError('Имя не может быть пустым')
      }
    else {
      setFirstnameError('')
    }
  }

  const lastnameHandler = (e: any) => {
    setLastname(e.target.value)
      if(!e.target.value) {
        setLastnameError('Фамилия не может быть пустым')
      }
    else {
      setLastnameError('')
    }
  }

  const phoneHandler = (e: any) => {
    setPhone(e.target.value)
    if (e.target.value.length != 11) {
      setPhoneError('Номер телефона должен состоять из 11 цифр')
      if(!e.target.value) {
        setPhoneError('Телефон не может быть пустым')
      }
    } else {
      setPhoneError('')
    }
  }

  const cvvHandler = (e: any) => {
    setCvv(e.target.value)
    if (e.target.value.length != 3) {
      setCvvError('cvv должен состоять из 3 цифр')
      if(!e.target.value) {
        setCvvError('cvv не может быть пустым')
      }
    } else {
      setCvvError('')
    }
  }

  const panHandler = (e: any) => {
    setPan(e.target.value)
    if (e.target.value.length != 9) {
      setPanError('Номер карты должен состоять из 8 цифр в формате nnnn nnnn')
      if(!e.target.value) {
        setPanError('Номер карты не может быть пустым')
      }
    } else {
      setPanError('')
    }
  }
  
  const expireDateHandler = (e: any) => {
    setExpireDate(e.target.value)
    if (e.target.value.length != 5) {
      setExpireDateError('Срок действия должен выглядеть как дд/мм')
      if(!e.target.value) {
        setExpireDateError('Срок действия не может быть пустым')
      }
    } else {
      setExpireDateError('')
    }
  }

  const blurHeader = (e: any) => {
    switch (e.target.name) {
      case 'cvv':
        setCvvDirty(true)
        break
      case 'pan':
        setPanDirty(true)
        break
      case 'expireDate':
        setExpireDateDirty(true)
        break
      case 'firstname':
        setFirstnameDirty(true)
        break
      case 'lastname':
        setLastnameDirty(true)
        break
      case 'phone':
        setPhoneDirty(true)
        break
    }
  }

  const entrance = () => { //кнопочка входа
    setCvv('')
    setPan('')
    setExpireDate('')
    setFirstname('')
    setLastname('')
    setPhone('')
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
                      {actor.fullName}
                    </div>
                  )}
                  <br></br>
                  <p className='nameA'>Режисеры:</p> {cinemafilm.film.directors.map(actor =>
                    <div key={actor.id} className='actor'>
                      {actor.fullName}
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
              <button onClick={() => hall(date.date, t.time, t.hall)} className='buttime'>{t.time}</button>
            )}
          </div>
        )}

      <p className='bottom'></p>
    </p>
  );
  }

  if (statestr == 'hall') {
    return (
      <p className = "filmbody">
        <h1 className='filmname'>{'Зал: '+cinemahall.name}</h1>
        <button onClick={() => back()} className="butfilm">к списку фильмов</button>
        <button onClick={() => back1()} className="butfilm">к рассписанию</button>
        <br></br>
        <br></br>
          <button className='BLOCKED kom'>занято</button>
          <button className='ECONOM kom'>эконом</button>
          <button className='COMFORT kom'>комфорт</button>
          <p className='kran'>ЭКРАН</p>
        <p className='hall'>
       
        {cinemahall.places.map((row, i) =>
          <div key={'0'}>
            {row.map((cell, j) =>
                <button onClick={() => formToPay(i+1, j+1, cell.price)} className={cell.type}></button>

            )}
            
          </div>
        )}
        </p>
        <p className='bottom'></p>

      </p>
    )}

    if (statestr == 'form') {
      return (
        <p className = "filmbody">
          <button onClick={() => back2()} className="butfilm">отмена</button>
          

          <h1 className='filmname'>{cinemafilm.film.name}</h1>
          <div className='bill'>
            <p className='b'>{'Дата: '+cell.date}</p>
            <p className='b'>{'Время: '+cell.time}</p>
            <p className='b'>{'Зал: '+cell.hall}</p>
            <p className='b'>{'Ряд: '+cell.row}</p>
            <p className='b'>{'Место: '+cell.column}</p>
            <p className='b'>{'Стоимость билета: '+cell.price+' руб.'}</p>
          </div> 

          <div className='formpay'>
          <div className='black'>Форма оплаты</div>

          {(firstnameDirty && firstnameError) && <div style={{color:'red'}}>{firstnameError}</div>}
          <input className='input' onChange={e => firstnameHandler(e)} value={firstname} onBlur={e => blurHeader(e)} name='firstname' type="text" placeholder="Введите имя..."/>
          {(lastnameDirty && lastnameError) && <div style={{color:'red'}}>{lastnameError}</div>}
          <input className='input' onChange={e => lastnameHandler(e)} value={lastname} onBlur={e => blurHeader(e)} name='lastname' type="text" placeholder="Введите фамилию..."/>
          {(phoneDirty && phoneError) && <div style={{color:'red'}}>{phoneError}</div>}
          <input className='input' onChange={e => phoneHandler(e)} value={phone} onBlur={e => blurHeader(e)} name='phone' type="text" placeholder="Введите номер телефона..."/>

          <div className='black'>Данные карты</div>

          {(panDirty && panError) && <div style={{color:'red'}}>{panError}</div>}
          <input className='input' onChange={e => panHandler(e)} value={pan} onBlur={e => blurHeader(e)} name='pan' type="text" placeholder="Введите номер карты в формате nnnn nnnn..."/>
          
          {(expireDateDirty && expireDateError) && <div style={{color:'red'}}>{expireDateError}</div>}
          <input className='input' onChange={e => expireDateHandler(e)} value={expireDate} onBlur={e => blurHeader(e)} name='expireDate' type="text" placeholder="Введите срок действия карты в формате дд/мм..."/>

          {(cvvDirty && cvvError) && <div style={{color:'red'}}>{cvvError}</div>}
          <input className='input' onChange={e => cvvHandler(e)} value={cvv} onBlur={e => blurHeader(e)} name='cvv' type="text" placeholder="Введите cvv код..."/>

          <button className='butpay' onClick={() => entrance()} disabled={!formValid} type='submit'>{'Оплатить '+cell.price+' руб.'}</button>

          </div>
          <p className='bottom'></p>
  
        </p>
    )}

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