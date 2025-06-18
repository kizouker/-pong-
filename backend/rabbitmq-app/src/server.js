import amqp from 'amqplib';
import { runProducer } from './producer.js';
import { runConsumer } from './consumer.js';

const AMQP_URL = 'amqp://localhost';

(async () => {
  try {
    const connection = await amqp.connect(AMQP_URL);
    await runConsumer(connection);
    await runProducer(connection);
    // Optionally close connection later
    // setTimeout(() => connection.close(), 1000);
  } catch (err) {
    console.error('Failed to connect to RabbitMQ:', err);
  }
})();
