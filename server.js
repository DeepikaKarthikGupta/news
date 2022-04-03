import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 8000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to News Headlines!');
});

app.get('/TopHeadlines/:Key', async(req, resp) => {
  fetch(
    `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${req.params.Key}`)
    .then((res) => res.json())
    .then((data) => {      
      resp.status(200).send(data)
    })
    .catch(error => {
      resp.status(500).send(error)
    });
})

app.get('/SearchHeadlines/:searchItem', async(req, resp) => {  
  const recVal = req.params.searchItem.split(',');
  fetch(
    `https://newsapi.org/v2/everything?q=${recVal[0]}&apiKey=${recVal[1]}`)
    .then((res) => res.json())
    .then((data) => {      
      resp.status(200).send(data)
    })
    .catch(error => {
      resp.status(500).send(error)
    });
})

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`)});