export function cinemaToday(): {
    success: boolean,
    reason: string,
    films: [
      {
        id: string,
        name: string,
        originalName: string,
        description: string,
        releaseDate: string,
        actors: [
          {
            id: number,
            professions: string,
            fullName: string
          }
        ],
        directors: [
          {
            id: number,
            professions: string,
            fullName: string
          }
        ],
        runtime: number,
        ageRating: string,
        genres: [
          string
        ],
        userRatings: {
          kinopoisk: number,
          imdb: number
        },
        img: string,
        country: {
          name: string,
          code: string,
          code2: string,
          id: number
        }
      }
    ]
    } {

    const xhr = new XMLHttpRequest();
    const url = 'https://shift-intensive.ru/api/cinema/today'; 

    xhr.open('GET', url, false); 

    xhr.send();

    return JSON.parse(xhr.responseText); 
    
}


export function cinemaFilm(id: string): {
    success: boolean,
    reason: string,
    film: 
      {
        id: string,
        name: string,
        originalName: string,
        description: string,
        releaseDate: string,
        actors: [
          {
            id: number,
            professions: string,
            fullName: string
          }
        ],
        directors: [
          {
            id: number,
            professions: string,
            fullName: string
          }
        ],
        runtime: number,
        ageRating: string,
        genres: [
          string
        ],
        userRatings: {
          kinopoisk: number,
          imdb: number
        },
        img: string,
        country: {
          name: string,
          code: string,
          code2: string,
          id: number
        }
      }
    } {
    const xhr = new XMLHttpRequest();
    const url = 'https://shift-intensive.ru/api/cinema/film/'+id; 

    xhr.open('GET', url, false); 

    xhr.send();

    return JSON.parse(xhr.responseText); 

}



export function cinemaTime(id: string): {
  success: boolean,
  //reason: string,
  schedules: [
    {
      date: string,
      seances: [
        {
          time: string,
          hall: {
            name: string,
            places: [
              [
                {
                  price: number,
                  type: string
                }
              ]
            ]
          }
        }
      ]
    }
  ]
} {
  const xhr = new XMLHttpRequest();
  const url = 'https://shift-intensive.ru/api/cinema/film/'+id+'/schedule'; 

  xhr.open('GET', url, false); 

  xhr.send();

  return JSON.parse(xhr.responseText); 

}




export function sendPostUser(login: string, password: string): number {
    const xhr = new XMLHttpRequest();
    const url = 'http://localhost:8080/user'; // Замените на ваш URL

    const requestBody = {
        login: login,
        password: password,
    };

    // Создаем объект с данными для отправки
    const data = JSON.stringify(requestBody);

    // Инициализируем запрос
    xhr.open('POST', url, false); // false делает запрос синхронным

    // Устанавливаем заголовок для отправки JSON
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Отправляем запрос
    xhr.send(data);

    
        // Парсим ответ в JSON
        const response = JSON.parse(xhr.responseText);
        // Возвращаем значение поля id

        //console.log('aaaaaaaaaaa');
        //console.log(response.id);

        return response.id; // Предполагается, что id - это число
    
}




export function sendPostUserToken(login: string, password: string): string {
    const xhr = new XMLHttpRequest();
    const url = 'http://localhost:8080/user/token'; // Замените на ваш URL

    const requestBody = {
        login: login,
        password: password,
    };

    // Создаем объект с данными для отправки
    const data = JSON.stringify(requestBody);

    // Инициализируем запрос
    xhr.open('POST', url, false); // false делает запрос синхронным

    // Устанавливаем заголовок для отправки JSON
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Отправляем запрос
    xhr.send(data);

        // Возвращаем ответ как строку
    return xhr.responseText; // Предполагается, что ответ - это строка

}


export function sendPostTree(name: string, token: string): number {
    const xhr = new XMLHttpRequest();
    const url = 'http://localhost:8080/tree'; // Замените на ваш URL

    const requestBody = {
        name: name
    };

    // Создаем объект с данными для отправки
    const data = JSON.stringify(requestBody);

    // Инициализируем запрос
    xhr.open('POST', url, false); // false делает запрос синхронным


    // Устанавливаем заголовок для токена
    xhr.setRequestHeader('token', token); // Используем 'token' вместо 'Authorization'

    // Устанавливаем заголовок для отправки JSON
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Отправляем запрос
    xhr.send(data);

    
        // Парсим ответ в JSON
        const response = JSON.parse(xhr.responseText);
        // Возвращаем значение поля id

        //console.log('aaaaaaaaaaa');
        //console.log(response.id);
        console.log("asasasas", response.id)
        return response.id; // Предполагается, что id - это число
    
}







export function sendGetMoveTree(treeId: number): number {
    const xhr = new XMLHttpRequest();
    const url = 'http://localhost:8080/move/tree/' + treeId; // Замените на ваш URL

    // Инициализируем запрос
    xhr.open('GET', url, false); // false делает запрос синхронным

    // Устанавливаем заголовок для токена
    //xhr.setRequestHeader('token', token); // Используем 'token' вместо 'Authorization'

    // Отправляем запрос
    xhr.send();

    const response = JSON.parse(xhr.responseText);
        // Возвращаем значение поля id

        //console.log('aaaaaaaaaaa');
        //console.log(response.id);
    //console.log("asasasas", response.id)
    return response.id; // Предполагается, что id - это число
    
}

export function sendGetMoveNext(idMove: number): {
    id: number,
    number: number,
    treeId: number,
    positionAfter: string,
    nameMove: null | string,
    colorWhite: boolean,
    preventMove: number
}[] {
    const xhr = new XMLHttpRequest();
    const url = 'http://localhost:8080/move/next/' + idMove; // Замените на ваш URL

    // Инициализируем запрос
    xhr.open('GET', url, false); // false делает запрос синхронным

    // Устанавливаем заголовок для токена
    //xhr.setRequestHeader('token', token); // Используем 'token' вместо 'Authorization'

    // Отправляем запрос
    xhr.send();

        // Парсим ответ в JSON и возвращаем массив объектов
    //let A: { id: number; positionAfter: string }[] = [];
    return JSON.parse(xhr.responseText); // Предполагается, что ответ - это массив объектов
    
}

export function sendGetMoveRandom(idMove: number): {
    id: number,
    number: number,
    treeId: number,
    positionAfter: string,
    nameMove: null | string,
    colorWhite: boolean,
    preventMove: number
} {
    const xhr = new XMLHttpRequest();
    const url = 'http://localhost:8080/move/random/' + idMove; // Замените на ваш URL

    // Инициализируем запрос
    xhr.open('GET', url, false); // false делает запрос синхронным

    // Устанавливаем заголовок для токена
    //xhr.setRequestHeader('token', token); // Используем 'token' вместо 'Authorization'

    // Отправляем запрос
    xhr.send();

        // Парсим ответ в JSON и возвращаем массив объектов
    //let A: { id: number; positionAfter: string }[] = [];
    return JSON.parse(xhr.responseText); // Предполагается, что ответ - это массив объектов
    
}


export function sendPostMove(treeId: number, positionAfter: string, preventMoveId: number, colorWhite: boolean, token: string): number {
    const xhr = new XMLHttpRequest();
    const url = 'http://localhost:8080/move'; // Замените на ваш URL

    const requestBody = {
        treeId: treeId,
        positionAfter: positionAfter,
        preventMoveId: preventMoveId,
        colorWhite: colorWhite
    }

    // Создаем объект с данными для отправки
    const data = JSON.stringify(requestBody);

    // Инициализируем запрос
    xhr.open('POST', url, false); // false делает запрос синхронным


    // Устанавливаем заголовок для токена
    xhr.setRequestHeader('token', token); // Используем 'token' вместо 'Authorization'

    // Устанавливаем заголовок для отправки JSON
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Отправляем запрос
    xhr.send(data);

    
        // Парсим ответ в JSON
        const response = JSON.parse(xhr.responseText);
        // Возвращаем значение поля id

        //console.log('aaaaaaaaaaa');
        //console.log(response.id);
        console.log("asasasas", response.id)
        return response.id; // Предполагается, что id - это число
    
}

export function sendDeleteUserToken(token: string) {
    const xhr = new XMLHttpRequest();
    const url = 'http://localhost:8080/user/token'; // Замените на ваш URL

    // Инициализируем запрос
    xhr.open('DELETE', url, false); // false делает запрос синхронным

    // Устанавливаем заголовок для токена
    xhr.setRequestHeader('token', token); // Используем 'token' вместо 'Authorization'

    // Отправляем запрос
    xhr.send();

        // Парсим ответ в JSON и возвращаем массив объектов
    return 0; // Предполагается, что ответ - это массив объектов
    
}


export function hashPassword(input: string): string { // MD5

let hash = 0;
for (let i = 0; i < input.length; i++) {
hash = (hash << 5) - hash + input.charCodeAt(i); // hash * 31 + charCode
hash |= 0; // Приведение к 32-битному знаковому числу
}

// Преобразуем хэш в строку в шестнадцатеричном формате
let result = Math.abs(hash).toString(16);
return result.substring(0, 40);
}