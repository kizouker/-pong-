import amqp from 'amqplib';
import { USER_EVENTS_QUEUE } from './constants/queues.js';

export async function runProducer(connection) {
  const channel = await connection.createChannel();
  await channel.assertQueue(USER_EVENTS_QUEUE, { durable: true });

  const message = {
    id: 1,
    name: 'Rickard',
    email: 'rickard@example.com'
  };

  const payload = Buffer.from(JSON.stringify(message));
  channel.sendToQueue(USER_EVENTS_QUEUE, payload);

  console.log('[Producer] Sent:', message);
}
