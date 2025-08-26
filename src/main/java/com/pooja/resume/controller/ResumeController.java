package com.pooja.resume.controller;

import com.pooja.resume.model.Resume;
import com.pooja.resume.service.ResumeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResumeController {

    private final ResumeService resumeService;

    public ResumeController(ResumeService resumeService) {
        this.resumeService = resumeService;
    }

    @GetMapping("/resume")
    public Resume getFullResume() {
        return resumeService.getResume();
    }

    @GetMapping("/skills")
    public Object getSkills() {
        return resumeService.getResume().getSkills();
    }

    @GetMapping("/projects")
    public Object getProjects() {
        return resumeService.getResume().getProjects();
    }

    @GetMapping("/about")
    public Object getAbout() {
        return resumeService.getResume().getAbout();
    }

    @GetMapping("/experience")
    public Object getExperience() {
        return resumeService.getResume().getExperience();
    }
}
