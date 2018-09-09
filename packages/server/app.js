// @flow

import express from 'express';
import path from 'path';
import cors from 'cors';
import corsWhiteList from './bin/corsWhiteList';
import peopleRouter from './routes/people';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors(corsWhiteList));
app.use('/people', peopleRouter);

export default app;
