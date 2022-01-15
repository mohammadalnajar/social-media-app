# social-media-app





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
        build: (optional name) [this_job_will_group_a_set_of_actions]
            runs-on: [system] ex: [ubuntu-latest]
            steps: [run_commands] [setup_tasks] [run_action]
            - uses: ex: [actions/checkout@v2] => [selects_an_action] (to use an action already exists on github
               made by some other team)
            - run: [runs_a_command-line] ex: (cd server && npm install)
            