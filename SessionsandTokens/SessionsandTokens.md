<!-- 
    What is sessions ?
    Sessions are a way to maintian users state and authenicate users in web application. 
    A session is a way or a small file, most likely in json format that stores information about the user, such as a unique id, time of 
    login expirations, and so on. It is generated to stored on the server so that the server can keep track of the user request.

    Working: 
    1.The user sends a login request to the server 
    2.the server authenticates the login request, sends a session to the database, and returns a cookie containing the session ID to the user
    3. Now the user sends the new request (Cookie)
    4. THe server checks in the database for the ID found in the cookie, if the id is found it send the requested pages to the user.
    


    What is Cookies ?
    Cookies is basically a file in which we store our sessions ID, it get stored in website store on a users computer device.

    Type of Cookies
    1.> Session Cookies: - These cookies are temporary and are deleted when you close your browser
    2.> Persistent Cookies:- These cookies are stored on your device for a specified duration even after you close your browser.
    3.> THey can be used for purposes such as remmebering your prefereneces or login information that the website itself provides.


    Cookies can raise privacy concerns because they can be used to track users browsing behvaiour across the different websites. However cookies cannot execute code or transmit the viruses and they can only store informations that the website itself provides.





 -->


