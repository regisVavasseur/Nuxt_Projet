import WebSocket from 'ws';

import { Server, Server as HttpServer } from 'http';

const httpServer = new HttpServer((req, res) => {
  res.end('WebSocket server is running!');
});

const wss = new WebSocket.Server({ server: httpServer });

const peers = new Set<WebSocket>();


wss.on('connection', (ws: WebSocket) => {
  console.log('Client connected');
  peers.add(ws);

  wss.on("message", (message: string) => {
    console.log("Message received: " + message);
    // Broadcast the message to all connected clients
    peers.forEach((client) => {
      client.send(message);
    });

    peers.forEach((peer) => {
      if (peer !== ws) {
        peer.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
    peers.delete(ws);
  });

  ws.on('error', (error) => {
    console.log(`[ws] error: ${error.message}`);
  });
});

httpServer.listen(3000);