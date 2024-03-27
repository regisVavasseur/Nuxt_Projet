
export default defineWebSocketHandler({
  async handle(request, ws: WebSocket) {
    console.log('Client connected');
    const peers = new Set<WebSocket>();
    peers.add(ws);

    ws.on('message', (message: string) => {
      console.log(`Message received: ${message}`);

      // Broadcast the message to all connected clients
      peers.forEach((client) => {
        client.send(message);
      });
    });

    ws.on('close', () => {
      console.log('Client disconnected');
      peers.delete(ws);
    });

    ws.on('error', (error) => {
      console.log(`[ws] error: ${error.message}`);
    });
  }
});