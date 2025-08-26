package com.pooja.resume.service;

import com.pooja.resume.model.Resume;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class ResumeService {

    public Resume getResume() {
        return new Resume(
                "Pooja Baranwal",
                "Backend Engineer",
                11,
                Arrays.asList("Java", "Spring Boot", "Oracle SQL", "Kafka", "Microservices"),
                Arrays.asList("Payment Systems", "Dance Workshop App", "Authorization Flows"),
                "Passionate about building resilient backend systems and exploring creative visual design."
        );
    }
}