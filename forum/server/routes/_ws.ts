
import WebSocket from "ws";

export default defineWebSocketHandler({
  async handle(request, ws: WebSocket) {
    console.log('Client connected');
    const peers = new Set<WebSocket>();
    peers.add(ws);

    ws.addEventListener('message', (event) => {
      console.log(`Message received: ${event.data}`);

      // Broadcast the message to all connected clients
      peers.forEach((client) => {
        client.send(event.data);
      });
    });

    ws.addEventListener('close', () => {
      console.log('Client disconnected');
      peers.delete(ws);
    });

    ws.addEventListener('error', (error) => {
      console.log(`[ws] error: ${error.message}`);
    });
  }
});