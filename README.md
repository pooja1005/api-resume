# Pooja Baranwal — Interactive Resume (Spring Boot + Terminal UI)

A tiny Spring Boot (Java 21) API that serves a **terminal-style interactive resume** from `/` and a JSON profile from `/resume`.

## Endpoints
- `GET /` — terminal-style UI (type `help`)
- `GET /resume` — JSON (name, role, experienceYears)

## Local Run
```bash
mvn clean package
java -jar target/api-resume-1.0.0.jar
# open http://localhost:8080
