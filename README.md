
[![Build Status](https://travis-ci.org/pixalive/pixalive.svg?branch=master)](https://travis-ci.org/pixalive/pixalive)

### Initial setup


See Pixalive in action here: https://pixalive.fly.dev/
Video: https://www.youtube.com/watch?v=PVSvkN2WdAw

Pixalive is a free, multi-user, real-time editor for animated sprites and pixel art. To invite friends to collaborate with you, simply send them the URL to your sprite. All changes are automatically saved and sent to all collaborators.

NOTE: db serialization of sprites is not currently supported due to postgres issues with the fly.io host; all sprites will be cleared when the last user leaves a shared session.

## Code highlights
Namespace-enabled socket IO server: https://github.com/pixalive/pixalive/blob/master/server/pixalive.js
Drawing & multi-user undo, server-side: https://github.com/pixalive/pixalive/blob/master/server/eventHandlers/canvasClick.js, https://github.com/pixalive/pixalive/blob/master/server/eventHandlers/undo.js
Flood-fill-based paint bucket tool: https://github.com/pixalive/pixalive/blob/master/server/eventHandlers/paintCan.js
Client-side root component w/ reducer and contexts: https://github.com/pixalive/pixalive/blob/master/client/components/Editor.js
Canvas render handling, mouse updates, outgoing event throttling: https://github.com/pixalive/pixalive/blob/master/client/components/BigCanvas.js
Client-side diffing to prevent uncessary redraws:
https://github.com/pixalive/pixalive/blob/master/client/components/SmallCanvas.js

## Development

#### Initial setup

After cloning, run `npm install`. You'll need a working postgres install-- and to create a db called `pixalive`.

#### Dev server

Run `npm run start-dev` and navigate to http://localhost:3000/. There is a seed script (`npm run seed`), but it isn't necessary to run it to be able to serve the application.
