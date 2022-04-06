# User authentication basics

## Building a login page

Setting up mongodb
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
`brew services start mongodb-community@4.2` - run mongodb
`npm start dev` - run server
`npm start` - start front

## JSON web tokens

Strings that we give to users when they authenticate
Can be used instead of the user's password to interact with protected server resources

```
{
	id: '123',
	email: 'john.doe@gmail.com
}
```

have:

- header
- pahload
- signature - proves authenticity of data

encoded into string

---

logging in process:

- the user logs in
- the server generates a JWT containing the user's information (using secret key)
- server sends JWT to the user
- front stores this JWT
- front includes JWT whenever it nees privileges access
- server uses the JWT signature to verify that it hasn't been modified (if user modifies id in the token, token will be invalid, because user doesn't know the secret key to encrypt signature of token)
