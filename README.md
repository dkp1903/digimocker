Welcome to Digimocker - a simple Mock of the Digilocker APIs

Deployed version - https://digimocker.herokuapp.com/api/

Routes 

Sign up(name/email/password) - /api/user/register/

Login(email/password) - /api/user/login/

Get all docs - /api/docs

Process - 

- Sign up
- Login
- Copy the access token that login returns, and pass it in the header for the GET /api/docs request, with request body being the email.

Sample user - 

Email : user1@example.com
Password : user-password

Creator - [Dushyant Pathak](mailto:dushyant.pathak@crio-users.in)