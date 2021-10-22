import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





const names = [
  {
    'path': 'babuska',
    'name': "Бабушка"
  },
  {
    'path': 'deduska',
    'name': "Дедушка"
  },
  {
    'path': 'tetia',
    'name': "Тётя"
  },
  {
    'path': 'ubeivolk',
    'name': "Владимир и Юлия Убейволк"
  },
  {
    'path': 'katevoronova',
    'name': "Екатерина Воронова"
  },
  {
    'path': 'voronovi',
    'name': "Ольга и Сергей Вороновы"
  },
  {
    'path': 'opinka',
    'name': "Даниил Опинка"
  },
  {
    'path': 'tanas',
    'name': "Даниил Танас"
  },

  {
    'path': 'kazacu',
    'name': "Дарья Казаку"
  },

  {
    'path': 'grozav',
    'name': "Давид Грозав"
  },
  {
    'path': 'tkacenko',
    'name': "Самуил Ткаченко"
  },
  {
    'path': 'vasilieva',
    'name': "Татьяна Васильева "
  },
  {
    'path': 'buckalov',
    'name': "Артем Букалов "
  },
  {
    'path': 'sozonovi',
    'name': "Полина и Вениамин Сазонов"
  },
  {
    'path': 'procopovi',
    'name': "Сергей и Лилия Прокопов"
  },
  {
    'path': 'michailovi',
    'name': " Сергей и Галина Михайлова"
  },
  {
    'path': 'litnevskaia',
    'name': "Дженнифер Литневская"
  },
  {
    'path': 'obada',
    'name': "Карина и Рувим Обада"
  },
  {
    'path': 'velicev',
    'name': "Радион и Ульяна Вельчева"
  },
  {
    'path': 'malaia',
    'name': "Анна Малая"
  },
  {
    'path': 'grecovi',
    'name': "Виталий и Наталья Грекова "
  },
  {
    'path': 'kiriak',
    'name': "Инна Кирияк"
  },

  {
    'path': 'orhei',
    'name': "Елена Орхей"
  },

  {
    'path': 'kigai',
    'name': "  Юлия и Виктор Кигай "
  },
  {
    'path': 'pimenova',
    'name': "Валентина Пименова"
  },
  {
    'path': 'ivanovi',
    'name': "Дмитрий и  Ирина Иванова"
  },
  {
    'path': 'derevianov',
    'name': "Егор Деревянов"
  },
  {
    'path': 'kovalenco',
    'name': "Мария Коваленко"
  },
  {
    'path': 'iakimenko',
    'name': "Сергей Якименко"
  },
  {
    'path': 'semaiev',
    'name': " Татьяна и Сергей Семаев "
  },
  {
    'path': 'afinescu',
    'name': "Ирина и Раду Афтинеску"
  },
]




console.log(names.path)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {
          names.map((t) => {
            return <Route path={`/${t.path}`}>
              <App name={t.name} />
            </Route>

          })
        }

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
