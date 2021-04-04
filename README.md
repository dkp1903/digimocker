Welcome to Digimocker - a simple Mock of the Digilocker APIs.

Digilocker, stands for Digital Locker - a service provided by the Government of India to store documents like Aadhar, PAN, Passport, Driving License etc, so that we needn't carry the actual copies around.

Digilocker provides APIs, which could be used to import documents from Digilocker to other apps, but the APIs are accessible only to Digilocker partners called Requesters.

Thus, this is a service that mocks the basic essentials of Digilocker to be used for development and testing purposes. Do note that the actual parameters and request-response structure of the actual Digilocker API may vary. 

This service has been deployed to Heroku : 

Deployed version - https://digimocker.herokuapp.com/api/

The service is CLI based only(no UI), so you'll have to use Postman to test the APIs.

1. Sign up route - POST /user/register. Sign up using name, email and password
2. Log in route - POST /user/login. Login using email and password.
3. Log in will return an auth token. Copy it.

**Note : In points 4 and 5, GET has been changed to POST, to allow email to be passed as request-body. In point 6, the request will be made to `/add` instead of `/docs/add`**

4. To fetch list of all docs - POST /docs - pass in the auth token you'd copied in the request header as 'auth-token' and pass in { email: <your-login-email> } in the body
5. To fetch a particular document (Aadhar/PAN/DL) - POST /docs/Aadhar or /docs/PAN and so on. Everything else the same as in 4.
6. To add a document - POST /add. Auth token, as described in 4 should be part of header. Body - 
{
    name: "Aadhar"(or PAN or DL),
    email: email of the user in which account this doc will be added(must be the same as the user logged in, to avoid errors),
    identifier: identifier of the document(Aadhar/PAN no. etc),
    URL : a link to the PDF/jpg version of the document
}

Sample user - 

Email : user1@example.com
Password : user-password

Database schema : 
    The database will contain two sets of documents - Users, and Documents.
    
    User - {
        name: String,
        username: String,
        password: String,
        date: Date
    }

    Doc - {
        name: String,
        username: String,
        identifier : String,
        URL: String
    }
    
You can refer to the /models folder for better understanding of the schemas.

If you want to build on this, follow these steps : 
    a. Fork the repository
    b. Clone it to local
    c. Rename the .env.example file to .env, and add the URL to your MongoDB Atlas instance.
    d. Run `npm install` to install the dependencies
    e. Run `npm run start` to start the app. If it all works well, the application will be live on localhost:5000


Creator - [Dushyant Pathak](mailto:dushyant.pathak@crio-users.in)
