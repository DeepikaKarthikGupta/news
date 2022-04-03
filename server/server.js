import "babel-polyfill";
import express from "express";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from 'react-router';
import bodyParser from 'body-parser';

import App from './src/App';

const PORT = 8000;
const app = express();

app.use(bodyParser.json());
app.use(express.static('build/Public'));


app.get('*',(req, res) => {
  const context = {}
  
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} content={context}> 
    <Provider store={store}>
      <App />
      </Provider>
    </StaticRouter>
  )

  const html = `
   <html>
   <body>
    <div id="root">
    ${content}
    </div>
   </body>
   </html>
  `;

 res.send({html})
})


// app.use("^/$", (req, res, next) => {
//   fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).send("Some error happened");
//     }
//     return res.send(
//       data.replace(
//         '<div id="root"></div>',
//         `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
//       )
//     );
//   });
// });

// app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
