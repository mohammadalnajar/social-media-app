## POSTS:
(auth) means that user should be logged in to have access ^_^ 
1.  **CREATE A POST:** (auth)
    
    1. ***POST*** => http:localhost:4444/api/posts/
    2. Request body example: 
   

    ```json
        {
            "text":"test 3453453453dsffsdfsdfsd3", (required)
            "visibility":"only me", (required)
            "imageUrl":"/images/ cc7df0f4-cc2b-4fd8-bd87-0dd723cd53db.png"
        }
    ```
    ___
2. **UPDATE A POST:** (auth)
    
    1. ***PUT*** =>  http://localhost:4444/api/posts/
    2. Request body example: 
    ```json
        {
            "id":"61efba77cd56659ffb066a5c", (required)
            "text":"test fdssdds",
            "visibility":"public",
            "userId":"45645645345" (required)
        }
    ```
    ___
3. **DELETE A POST:** (auth)
    
    1. ***DELETE*** =>  http://localhost:4444/api/posts/
    2. Request body example: 
    ```json
        {
            "id":"61efbaeccd56659ffb066a61" (required)
        }
    ```
    ___
4. **GET ALL POSTS FOR LOGGED IN USER:** (auth)
    
    1. ***GET*** =>  http://localhost:4444/api/posts/
    ```json
        "no body required"
    ```
    ___
5. **GET ALL POSTS(public) FOR ALL USERS:** (auth)
    
    1. ***GET*** =>  http://localhost:4444/api/posts/users/
    ```json
        "no body required"
    ```