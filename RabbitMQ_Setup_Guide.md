# 🐇 RabbitMQ + Producer Setup Guide

Detta projekt visar hur du installerar RabbitMQ, startar det lokalt, kör en producer (Node.js, .NET eller Java), samt verifierar meddelanden via RabbitMQ:s webbaserade admin-gränssnitt.

---

## 📦 1. Installera RabbitMQ

### 🪟 Windows

1. **Installera Erlang**  
   Ladda ner senaste versionen från:  
   👉 https://www.erlang.org/downloads  
   > *Obligatoriskt! RabbitMQ körs ovanpå Erlang.*

2. **Installera RabbitMQ Server**  
   👉 https://www.rabbitmq.com/install-windows.html  
   Ladda ner `.exe`-installern och följ anvisningarna.

3. Starta RabbitMQ via:  
   `Start -> RabbitMQ Service -> Start Service`

---

### 🍏 macOS

1. Installera med [Homebrew](https://brew.sh):
   ```bash
   brew update
   brew install rabbitmq
   ```

2. Lägg till RabbitMQ i din `PATH`:
   ```bash
   echo 'export PATH="/opt/homebrew/sbin:$PATH"' >> ~/.zprofile
   source ~/.zprofile
   ```

---

## ▶️ 2. Starta RabbitMQ

### 🪟 Windows

Starta tjänsten:
```powershell
rabbitmq-service.bat start
```

För att öppna admin-GUI:
```bash
rabbitmq-plugins enable rabbitmq_management
```

Öppna i webbläsaren:  
👉 http://localhost:15672  
Login: `guest` / `guest`

---

### 🍏 macOS

Starta RabbitMQ:
```bash
brew services start rabbitmq
```

Aktivera admin-GUI (endast första gången):
```bash
rabbitmq-plugins enable rabbitmq_management
```

Öppna i webbläsaren:  
👉 http://localhost:15672  
Login: `guest` / `guest`

---

## ✉️ 3. Köra en Producer

### 🔵 Node.js Producer

1. Gå till mappen:
   ```bash
   cd backend/rabbitmq-app/src/producers/node
   ```

2. Installera beroenden:
   ```bash
   npm install
   ```

3. Starta:
   ```bash
   node producer.js
   ```

---

### 🟣 .NET Producer

1. Gå till mappen:
   ```bash
   cd backend/rabbitmq-app/src/producers/dotnet
   ```

2. Kör:
   ```bash
   dotnet run
   ```

> Kräver att du har .NET SDK 6.0 eller högre. Installera via https://dotnet.microsoft.com

---

### 🟢 Spring Boot Producer

1. Gå till mappen:
   ```bash
   cd backend/rabbitmq-app/src/producers/springboot
   ```

2. Kör:
   ```bash
   ./mvnw spring-boot:run
   ```

> Kräver att du har Java 17+ och Maven eller kör wrapper (`mvnw`).

---

## 👀 4. Se meddelanden i RabbitMQ GUI

1. Öppna admin-gränssnittet i din webbläsare:
   👉 http://localhost:15672  
   Användarnamn: `guest`  
   Lösenord: `guest`

2. Klicka på `Queues` i menyn

3. Välj kön du producerar till (ex. `dotnet.messages` eller `user.events`)

4. Klicka på `Get messages` för att läsa meddelanden manuellt

---

## 🛠 TODO

- [ ] Lägg till Consumers för att läsa från kön
- [ ] Lägg till Dockerfile & docker-compose
- [ ] Lägg till ack / nack för tillförlitlig leverans

---

📫 Frågor? Kontakta [ditt_namn](mailto:din@mail.com)
