using RabbitMQ.Client;
using System.Text;
using System;

var factory = new ConnectionFactory() { HostName = "localhost" };
using var connection = factory.CreateConnection();
using var channel = connection.CreateModel();

channel.QueueDeclare(queue: "user.events", durable: true, exclusive: false, autoDelete: false, arguments: null);

string message = "Hej jag är .NET Core";
var body = Encoding.UTF8.GetBytes(message);

channel.BasicPublish(exchange: "", routingKey: "user.events", basicProperties: null, body: body);
Console.WriteLine($"[Producer .NET] Sent: {message}");
