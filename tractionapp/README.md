# Traction APP

Live *here:* http://franzejr.com/tractionapp/

(the requests may be slow, because of the API is using Heroku free dyno)

Simple AngularJS Application getting data from [Traction API](https://github.com/franzejr/tractionapi).

## How to run

If you want to run it locally and you have Python installed, you may:

```
python -m SimpleHTTPServer 8000
```

on this repository, and then it will create a simple WebServer for you.

## Set your `API_URL`

1. Set where is your `API`, by setting `TRACTION_API_URL` variable in the
[tractionapp.js](https://github.com/franzejr/traction_challenge/blob/master/tractionapp/tractionapp.js#L4)
