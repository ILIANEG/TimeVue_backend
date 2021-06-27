# components folder purpose
This directory should contain a **subdirectory for each component**
Each component should contain at least following files:
- <mark>controller.ts</mark>
    - Controller class handles **incoming requests, validates them and sends the response data back to the client**
    - It uses service class to interact with the database
- <mark>model.ts</mark>
    - The model represents the **database model for its component**
    - It might be ORM
- <mark>routes.ts</mark>
    - Here we define **API endpoints for the component and assign the controller method to them**
    - We can do things like **authorization (e.g JWS), permission validation (e.g. ACL) or add component secific middleware**
- <mark>service.ts</mark>
    - The service class acts like a **wrapper for the database**
    - Here we **read and write data to the database**
    - Can implement caching
