# Use official JDK 21 image
FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY . .

# Build with Maven
RUN ./mvnw clean package -DskipTests

# Run the Spring Boot jar (replace with your jar name)
CMD ["java", "-jar", "target/api-resume-0.0.1-SNAPSHOT.jar"]
