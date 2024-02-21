import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import './style.scss'

const NewsCtx = () => {

  const[news, setNews] = useState([]);

  async function getNews(){
    try{
      let res = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=563c480ede074658ad66eb973c3c2107&pageSize=100');
      setNews(res.data.articles);
    }catch(err){
      alert('refresh and try again');
    }
  }
  useEffect(() => {
    getNews()
  }, [])
  

  return (
    <div className="news_contain">
      <div className='newsBox'>
      {
        news.map((item) => {
          return(
            <div className="each_news" key={nanoid()}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <a href={item.url}>To explore the news visit the page</a>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default NewsCtx