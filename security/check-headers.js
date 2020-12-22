require('http').get(
  {port: process.env.port || 3000, method: 'HEAD'}
).on('socket', (socket) => socket.pipe(process.stdout));