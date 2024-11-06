import express from "express";
import { engine } from "express-handlebars";
import morgan from "morgan";
import {join, dirname} from 'path';
import { fileURLToPath } from "url";
import personaRoutes from './routes/persona.routes.js';

//INITIALIZATION
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//SETTINGS
app.set('port', process.env.PORT | 3000);
app.set('views', join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//MIDDLEWARE

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//ROUTES

app.get('/', (req, res)=>
    res.render('index')
);
app.use(personaRoutes);

//PUBLIC FILES

app.use(express.static(join(__dirname, 'public')));

//RUN SERVER

app.listen(app.get('port'), ()=>
    console.log('Server listennig on port ', app.get('port')));