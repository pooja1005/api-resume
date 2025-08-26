const output = document.getElementById("output");
const commandInput = document.getElementById("command");

commandInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        const command = commandInput.value.trim();
        output.innerHTML += `<div><span>user@resume:~$</span> ${command}</div>`;
        handleCommand(command);
        commandInput.value = "";
    }
});

function handleCommand(cmd) {
    if (cmd === "show resume") {
        fetch("/resume")
            .then(res => res.json())
            .then(data => {
                output.innerHTML += `<div>About: ${data.about}</div>`;
                output.innerHTML += `<div>Name: ${data.name}</div>`;
                output.innerHTML += `<div>Role: ${data.role}</div>`;
                output.innerHTML += `<div>Skills: ${data.skills}</div>`;
                output.innerHTML += `<div>Projects: ${data.projects}</div>`;
                output.innerHTML += `<div>Experience years: ${data.experience} years</div>`;
                output.scrollTop = output.scrollHeight;
            });
    } else if (cmd === "help") {
        output.innerHTML += `<div>Available commands:</div>`;
        output.innerHTML += `<div>show resume</div>`;
        output.innerHTML += `<div>help</div>`;
        output.scrollTop = output.scrollHeight;
    } else {
        output.innerHTML += `<div>Command not found: ${cmd}</div>`;
        output.scrollTop = output.scrollHeight;
    }
}
