package com.pooja.resume.model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Resume {
    private String name;
    private String role;
    private int experience;
    private List<String> skills;
    private List<String> projects;
    private String about;

    // Constructors, Getters, Setters
    public Resume() {}

    public Resume(String name, String role, int experience, List<String> skills, List<String> projects, String about) {
        this.name = name;
        this.role = role;
        this.experience = experience;
        this.skills = skills;
        this.projects = projects;
        this.about = about;
    }
}


