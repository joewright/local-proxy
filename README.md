# Local web proxy

This server redirects all requests to the specified `--base-url`.

It was made to test domain-dependent web apps on a local network without having to modify other computers' `hosts` file.

### Setup

Requirements
* nodejs 7.x

Clone this project and from the project directory run

```bash
npm install
```

### Usage

Run the server like so:

```bash
node server.js --base-url=http://my-cool-webserver.net --port=5309
# then visit http://localhost:5309
```