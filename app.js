const express = require('express');
const pageRoute = require('./routes/pageRoute');

const app = express();

const port = 4000;

//Template Engine (EJS)
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));

//Routes
app.use('/', pageRoute);
app.use('/meetings', pageRoute);

app.listen(port, () => {
  console.log(
    `Teknikhane Web Site Project Started On Port ${port} Successfully`
  );
});
