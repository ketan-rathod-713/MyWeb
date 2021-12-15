const http = require('http');
// we have set up our first server
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   here we can also add content or something like thatm n
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>css display property</title>
      <style>
          .{
              box-sizing: border-box;
          }
          header {
              margin: auto;
              border: 2px solid rebeccapurple;
  
          }
  
          img {
              margin: auto;
              width: 34px;
              display: block;
              /* because of header is block and then we can set width */
          }
  
          h3 {
              text-align: center;
              font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
              margin: 0px;
          }
  
          .box {
              border: 4px solid black;
              background-color: rgb(159, 213, 159);
              margin-top: 4px;
              padding: 10px;
              width: 33%;
              box-sizing: border-box;
              display: inline-block;
          }
      .container{
          margin: auto;
      width: 1200px;
     
      }
      </style>
  </head>
  
  <body>
      <header>
          <img src="https://www.codewithharry.com/assets/img/logo.png" alt="">
          <h3>welcome to harry</h3>
  
      </header>
      <div class="container">
          <div class="box">
              <h4>heading</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut fugit velit repellat porro non iusto hic ut
                  nobis? Labore voluptatem, eum necessitatibus natus, molestias inventore possimus incidunt distinctio
                  officia nulla ratione repudiandae fugiat aperiam.</p>
          </div>
          <div class="box">
              <h4>heading</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut fugit velit repellat porro non iusto hic ut
                  nobis? Labore voluptatem, eum necessitatibus natus, molestias inventore possimus incidunt distinctio
                  officia nulla ratione repudiandae fugiat aperiam.</p>
          </div>
          <div class="box">
              <h4>heading</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut fugit velit repellat porro non iusto hic ut
                  nobis? Labore voluptatem, eum necessitatibus natus, molestias inventore possimus incidunt distinctio
                  officia nulla ratione repudiandae fugiat aperiam.</p>
          </div>
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});