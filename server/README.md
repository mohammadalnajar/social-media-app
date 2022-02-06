## POSTS:
(auth) means that user should be logged in to have access ^_^ 
1.  **CREATE A POST WITHOUT IMAGE:** (auth)
    
    1. ***POST*** => http:localhost:4444/api/posts/
    2. Request body example: 
   

    ```json
        {
            "text":"test 3453453453dsffsdfsdfsd3", (required)
            "visibility":"only me" (required)
        }
    ```
    ___
2.  **CREATE A POST WITH IMAGE:** (auth)
    
    1. ***POST*** => http:localhost:4444/api/posts/
    2. Request body example: 
   

    ```json
        {
            "text":"test 3453453453dsffsdfsdfsd3", (required)
            "visibility":"only me", (required)
            "imageData":"base64", (required)
        }
    ```
    ___
3. **UPDATE A POST:** (auth)
    
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
4. **DELETE A POST:** (auth)
    
    1. ***DELETE*** =>  http://localhost:4444/api/posts/
    2. Request body example: 
    ```json
        {
            "id":"61efbaeccd56659ffb066a61" (required)
        }
    ```
    ___
5. **GET ALL POSTS FOR LOGGED IN USER:** (auth)
    
    1. ***GET*** =>  http://localhost:4444/api/posts/
    ```json
        "no body required"
    ```
    ___
6. **GET ALL POSTS(public) FOR ALL USERS:** (auth)
    
    1. ***GET*** =>  http://localhost:4444/api/posts/users/
    ```json
        "no body required"
    ```


### Workflow: (explain)

- Server:
    
    .yaml file:
    1. name: => [optional] (description)
    2. on: => [required] (event that triggers a workflow)

        ex: push:
                branches: [master]
            pull_request: 
                branches: [master]
    3. jobs: [required] (these jobs wil get executed whenever events happen)
   

        ex:
        ```yaml
        build: (optional name) [this_job_will_group_a_set_of_actions]
            runs-on: [system] ex: [ubuntu-latest]
            steps: [run_commands] [setup_tasks] [run_action]
            - uses: ex: [actions/checkout@v2] => [selects_an_action] (to use an action already exists on github
               made by some other team)
            - run: [runs_a_command-line] ex: (cd server && npm install)
            ```