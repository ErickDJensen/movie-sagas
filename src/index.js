import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { HashRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects'

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovieSaga);
    yield takeEvery('FETCH_MOVIES_DETAILS', fetchMovieDetailSaga);
    yield takeEvery('FETCH_GENRES', fetchGenresSaga);
}

function* fetchMovieSaga(action) {
    try {
        const response = yield axios.get('/api/movie');
        yield put({ type: 'SET_MOVIES', payload: response.data });
        console.log('in fetchMovieSaga', response.data)
    }
    catch (error) {
        console.log('Error in fetchMovieSaga', error);
    }
}

function* fetchMovieDetailSaga(action) {
    try {
        const response = yield axios.get(`/api/details?q=${action.payload}`);
        yield put({ type: 'SET_MOVIE_DETAILS', payload: response.data });
        console.log('in fetchMovieDetailSaga', response.data);
    }
    catch (error) {
        console.log('Error in fetchMovieDetailSaga', error);
    }
}

function* fetchGenresSaga(action) {
    try {
        const response = yield axios.get(`/api/genres?q=${action.payload}`);
        yield put({ type: 'SET_GENRES', payload: response.data });
        console.log('in fetchGenresSaga', response.data);
    }
    catch (error) {
        console.log('Error in fetchGenresSaga', error);
    }

}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><Router><App /></Router></Provider>,
    document.getElementById('root'));
registerServiceWorker();
