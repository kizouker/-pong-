package com.example;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.core.Queue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ProducerApplication implements CommandLineRunner {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    public static void main(String[] args) {
        SpringApplication.run(ProducerApplication.class, args);
    }

    @Override
    public void run(String... args) {
        String message = "Hej jag är Spring Boot";
        rabbitTemplate.convertAndSend("user.events", message);
        System.out.println("[Producer Spring] Sent: " + message);
    }

    @Bean
    public Queue queue() {
        return new Queue("user.events", true);
    }
}
