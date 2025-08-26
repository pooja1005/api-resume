const output = document.getElementById("output");
const input = document.getElementById("command");

const commands = {
  help: { text: `⚡ Available commands:
- 💁 about      : Who am I
- 🛠 skills     : My technical skills
- 💼 experience : Work history
- 🚀 projects   : Key projects
- 📬 contact    : Contact info`, class: "info" },

  about: { text: `👩‍💻 🙋 Hi! I'm Pooja Baranwal, Backend Engineer with 11 years of experience in designing and developing scalable, high-performance, and secure software systems.`, class: "about" },

  skills: { text: `🛠️ Technical Skills:
- 💻 Languages: Java, Spring Boot, Spring MVC, Hibernate, ReactJS (basic)
- 📚 Frameworks: Spring Boot, Hibernate
- ⚙️ DevOps: Docker, Jenkins, Git, CI/CD Pipelines, Jira, IntelliJ, Eclipse, Azure
- 🧠 Concepts: System design, Multithreading, Algorithms, Data Structures, Reactive Programming
- 🗄 Databases: Oracle, MySQL, PostgreSQL
- 📡 Messaging: Kafka
- ✅ Testing Tools: JUnit, Mockito`, class: "skills" },

  experience: { text: `💼 Work Experience:
- 2025-Present: STL at Trianz Holdings Pvt Ltd
- 2019-2025: Lead Software Engineer at Cast Software Pvt Ltd
- 2017-2019: Associate Technical Consultant at Genpact Headstrong
- 2014-2017: Software Engineer at Digite Infotech Pvt Ltd
- 2012-2014: Junior Software Engineer at Syntel`, class: "experience" },

  projects: { text: `📂 Key Projects:
- 🖥 Interactive Resume: This website as a live terminal resume
- 🔍 Modernization Tool: Application scanning tool
- 🖼 Imaging Console V3: MRI for Softwares
- 📊 VRMS Recertification: Java, Spring Boot, Hibernate, MySQL
- 🌍 TRACER: Tracked global trading activities & managed data ingestion
- 🔄 Data Migration (ALM Tool): Java, Spring MVC
- 🇯🇵 International DOE (Japan Market): Core Java, MySQL`, class: "projects" },

  contact: { text: `📧 Contact:
📧 Email: baranwalpuja12345@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/pooja-baranwal-96148b59/`, class: "contact" },

  logs: { text: `[2025-08-26 16:00:12] INFO: Server initialized
[2025-08-26 16:01:03] INFO: User accessed interactive resume
[2025-08-26 16:01:05] INFO: Executed 'about' command`, class: "logs" },

  deploy: { text: `🚀 Deploying interactive resume...
[25%] ⏳ Installing dependencies...
[50%] 🏗 Building project...
[75%] 🚀 Starting server...
[100%] ✅ Deployment Success!`, class: "deploy" }
};

// Boot sequence
const bootLines = [
  { text: "[OK] Terminal initialized", class: "ok" },
  { text: "[OK] Loading profile: Pooja Baranwal", class: "ok" },
  { text: "[INFO] Type 'help' to see available commands", class: "info" },
  { text: "", class: "" }
];

// Typewriter effect
function typeLine(line, cssClass, callback, speed = 18) {
  let i = 0;
  const div = document.createElement("div");
  if (cssClass) div.classList.add(cssClass);
  output.appendChild(div);

  function typing() {
    if (i < line.length) {
      div.textContent += line.charAt(i);
      output.scrollTop = output.scrollHeight;
      i++;
      setTimeout(typing, speed);
    } else if (callback) {
      callback();
    }
  }
  typing();
}

function typeBoot(lines, i = 0) {
  if (i < lines.length) {
    typeLine(lines[i].text, lines[i].class, () => typeBoot(lines, i + 1), 15);
  }
}

function typeOutput(text, cssClass) {
  const lines = text.split("\n\n");
  let i = 0;
  function next() {
    if (i < lines.length) {
      typeLine(lines[i], cssClass, () => {
        i++;
        next();
      }, 12);
    }
  }
  next();
}

// History
let history = [];
let historyIndex = -1;

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const command = input.value.trim();
    const cmdLine = document.createElement("div");
    cmdLine.innerHTML = `<span class="ok">user@resume:~$</span> ${command}`;
    output.appendChild(cmdLine);

    if (command === "clear") {
      output.innerHTML = "";
    } else if (commands[command]) {
      typeOutput(commands[command].text + "\n", commands[command].class);
    } else if (command.length > 0) {
      typeOutput(`❌ Command not found: ${command}\n`, "err");
    }

    history.push(command);
    historyIndex = history.length;
    input.value = "";
    output.scrollTop = output.scrollHeight;
  }

  if (e.key === "ArrowUp") {
    if (historyIndex > 0) {
      historyIndex--;
      input.value = history[historyIndex];
    }
  } else if (e.key === "ArrowDown") {
    if (historyIndex < history.length - 1) {
      historyIndex++;
      input.value = history[historyIndex];
    } else {
      input.value = "";
    }
  }
});

// Start boot
typeBoot(bootLines);
