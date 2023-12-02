// websocketModule.js
const WebSocket = require('ws');

function startWebSocketServer(port) {
    const wsServer = new WebSocket.Server({ port });

    let users = 0;

    wsServer.on('connection', (ws) => {
        console.log(`User ${users} connected`);
        users++;

        ws.on('message', (message) => {
            console.log(`Received message: ${message}`);

            // Пример обработки данных и отправки обновлений на клиентскую сторону
            const processedData = processData(message);

            // Отправка обновленных данных на клиент
            ws.send(processedData);
        });

        ws.on('close', () => {
            console.log('WebSocket connection closed');
            users--;
            console.log(`Current users: ${users}`);
        });
    });

    wsServer.on('error', (error) => {
        console.error('Error with WebSocket connection:', error);
    });

    return wsServer;
}

function processData(data) {
    // Здесь вы можете добавить логику обработки данных
    // Например, изменение формы

    // Простой пример: просто добавим текущее время к данным
    const processedData = `${data} - ${new Date().toLocaleTimeString()}`;

    return processedData;
}

module.exports = { startWebSocketServer };