Welcome to Digimocker - a simple Mock of the Digilocker APIs

Deployed version - https://digimocker.herokuapp.com/api/

## How do you go about it?

The service is CLI based only(no UI), so you'll have to use Postman to test the APIs.

1. Sign up route - /user/register. Sign up using name, email and password
2. Log in route - /user/login. Login using email and password.
3. Log in will return an auth token. Copy it.
4. To fetch list of all docs - /docs - pass in the auth token you'd copied in the request header as 'auth-token' and pass in { email: <your-login-email> } in the body
5. To fetch a particular document (Aadhar/PAN/DL) - /docs/Aadhar. Everything else the same as in 4.

Sample user - 

Email : user1@example.com
Password : user-password

Creator - [Dushyant Pathak](mailto:dushyant.pathak@crio-users.in)