import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {RoutingContext, match} from 'react-router';
import createLocation from 'history/lib/createLocation';
import request from 'request';
import routes from './routes';

const app = express();
const API_SERVER = "https://c.milkteafuzz.com/api/1";

// set up Jade
app.set('views', './views');
app.set('view engine', 'jade');


function queryWagnaria(url, callback) {
  console.log(`Querying Wagnaria for ${url}`);
  request(`${API_SERVER}/${url}`, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      console.log("Success! Returning data");
      callback(body);
    }
    else {
      console.log(`Error: ${error}`);
      callback(body);
    }
  });
}

app.get('/shows/status.json', (request, response) => {
  queryWagnaria('shows/status.json', body => response.json(body));
});

app.get('/shows/airing.json', (request, response) => {
  queryWagnaria('shows/airing.json', body => response.json(body));
});

app.get('/shows/completed.json', (request, response) => {
  queryWagnaria('shows/completed.json', body => response.json(body));
});

app.get('/shows/incomplete.json', (request, response) => {
  queryWagnaria('shows/incomplete.json', body => response.json(body));
});

// FIXME: Wagnaria Unaired returns in 404
app.get('/shows/unaired.json', (request, response) => {
  queryWagnaria('shows/unaired.json', body => response.json(body));
});

app.get('/shows/dropped.json', (request, response) => {
  queryWagnaria('shows/dropped.json', body => response.json(body));
});

// TODO: Extract ID
app.get('/staff/:id.json', (request, response) => {
  queryWagnaria(`staff/${id}.json`, body => response.json(body));
});


app.get('/*', (request, response) => {
  let location = createLocation(request.url);
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (error) {
      response.send(500, error.message)
    }
    else if (renderProps == null) {
      response.send(404, 'Not found')
    }
    else {
      let content = ReactDOMServer.renderToString(<RoutingContext {...renderProps} />);
      response.render('index', { content: content });
    }
  });
});

var server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log(`Example app listening at http://${host}:${port}`);
});
