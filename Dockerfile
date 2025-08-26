# ---- Build stage ----
FROM amazoncorretto:21-alpine AS build

WORKDIR /app

# Copy Maven wrapper + pom first (for dependency caching)
COPY mvnw* pom.xml ./
COPY .mvn .mvn

# Make mvnw executable (important in Alpine)
RUN chmod +x mvnw

# Download dependencies
RUN ./mvnw dependency:go-offline

# Copy the source code
COPY src src

# Build the app
RUN ./mvnw clean package -DskipTests

# ---- Run stage ----
FROM amazoncorretto:21-alpine

WORKDIR /app

# Copy jar from build stage
COPY --from=build /app/target/*.jar app.jar

# Run the Spring Boot jar
ENTRYPOINT ["java","-jar","/app/app.jar"]
