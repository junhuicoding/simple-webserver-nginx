# Simple web server with NGINX Reverse Proxy 

## To start the server
Run `docker-compose up` within this directory to automatically bring up the 3 Docker containers:
- reverse-proxy: Nginx reverse proxy to direct incoming http requests to their respective ports
- webapp: Simple React Frontend application with a button to retrieve a random dog picture from the backend
- dog-picture-service: Simple Flask server that returns a url of a random dog picture

Access the webapp on <http://localhost>, click the button to retrieve a random dog picture from the backend.

## Troubleshooting instructions
1. If you encounter "502 Bad Gateway" open <http://localhost> in Incognito to prevent cache from interfering.
3. Use `docker-compose down` to bring down the . Then, run this command: `docker-compose up -d --build` to rebuild the containers and then `docker-compose up` to bring them up again.
