import amqp from 'amqplib';
import { USER_EVENTS_QUEUE } from './constants/queues.js';

export async function runConsumer(connection) {
  const channel = await connection.createChannel();
  await channel.assertQueue(USER_EVENTS_QUEUE, { durable: true });

  channel.consume(USER_EVENTS_QUEUE, msg => {
    if (msg !== null) {
      const data = JSON.parse(msg.content.toString());
      console.log('[Consumer] Received:', data);
      channel.ack(msg);
    }
  });

  console.log('[Consumer] Listening for messages...');
}
