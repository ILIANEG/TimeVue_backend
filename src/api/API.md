# api folder purpose
This folder contains **components subfolders, middleware subfolder** and files including:
- <mark>routes.ts</mark>
    - Here we **register all components and middleware routes**
- <mark>server.ts</mark>
    - Here we declare **everything required for our express server**
        - **import middleware / component routes**
        - **error handling**
        - etc.
    - Later we can **import the server class for unit tests**
