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

---

## {Authorization 'Bearer yJzdiOil...}

## JWT are crednetials. Be careful with them

Signing vs encrypting
Signing - proves that the data in the JWT han't been modified
Encrypting - prevents third parties from seein the data inside the JWT

---

Benefits:

- stateless - doesn't require backend to actively keep track of who is logged in (mark user as logged in on server)

- more compact and secure than XML

Drawbacks:

- tokens are valid until they expire or until the private key on server is changed. If the user is hacked, changing password will not help.
  Browser doesHard to block specific users. Logging out is deleting token from browser

- the user will have to reauthenticate when the token expires

## Adding sign-up route to the server

`npm i bcrypt dotenv jsonwebtoken`

## Genereting JSON web tokens

`-r dotenv/config` - load environment variables when server starts up
