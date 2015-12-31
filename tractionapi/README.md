#Traction API

This is a Scrapper Job API. It grabs the Alexa top 100 sites and add to
the database.


#How to setup

### Environment

Make sure you are using:

- Ruby 2.3.0
- Rails 4.2.5

### Create AWS Keys

1. Go to: http://aws.amazon.com/
2. Sign Up & create a new account (they'll give you the option for 1 year trial or similar)
3. Go to your AWS account overview
4. Account menu in the upper-right (has your name on it)
5. sub-menu: Security Credentials

With your keys, as we are using [dotenv](https://github.com/bkeepers/dotenv),
you need to create a file and put your env variables.

1. Create your .env.local / production file for Alexa Top Sites:
```
AWS_ACCESS_KEY_ID=<KEY>
AWS_SECRET_ACCESS_KEY=<KEY>
```
