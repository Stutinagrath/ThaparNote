
// Function to add a task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskDescriptionInput = document.getElementById("taskDescriptionInput");
    var taskDeadlineInput = document.getElementById("taskDeadlineInput");
    var taskPriorityInput = document.getElementById("taskPriorityInput");

    // Check if taskInput exists and is not empty
    if (taskInput && taskInput.value.trim() !== "") {
        var taskList = document.getElementById("taskList");

        // Create a new list item
        var li = document.createElement("li");
        li.className = "task-item";

        // Build the task content
        var taskContent = `<strong>${taskInput.value}</strong>`;

        if (taskDescriptionInput && taskDescriptionInput.value.trim() !== "") {
            taskContent += `<br><em>${taskDescriptionInput.value}</em>`;
        }

        if (taskDeadlineInput && taskDeadlineInput.value.trim() !== "") {
            taskContent += `<br>Deadline: ${taskDeadlineInput.value}`;
        }

        if (taskPriorityInput && taskPriorityInput.value.trim() !== "") {
            taskContent += `<br>Priority: ${taskPriorityInput.value}`;
        }

        li.innerHTML = taskContent;
        taskList.appendChild(li);

        // Clear input fields after adding the task
        taskInput.value = "";
        if (taskDescriptionInput) taskDescriptionInput.value = "";
        if (taskDeadlineInput) taskDeadlineInput.value = "";
        if (taskPriorityInput) taskPriorityInput.value = "low";
    }
    document.getElementById("tasksSection").style.display = "block";
    document.getElementById("notesSection").style.display = "none";
    document.getElementById("remindersSection").style.display = "none";
    document.getElementById("scheduleSection").style.display = "none";
}




function showNotes() {
    // Use prompt to get user input
    var userNotes = prompt("Enter your notes:");

    // Check if the user provided some notes
    if (userNotes !== null) {
        // Update the content of the notes section
        var notesSection = document.getElementById("notesSection");
        notesSection.innerHTML = userNotes;

        // Display the notes section
        document.getElementById("tasksSection").style.display = "none";
        notesSection.style.display = "block";
        document.getElementById("remindersSection").style.display = "none";
        document.getElementById("scheduleSection").style.display = "none";
    }
}


function showReminders() {
    document.getElementById("tasksSection").style.display = "none";
    document.getElementById("notesSection").style.display = "none";
    document.getElementById("remindersSection").style.display = "block";
    document.getElementById("scheduleSection").style.display = "none";
}

function showSchedule() {
    document.getElementById("tasksSection").style.display = "none";
    document.getElementById("notesSection").style.display = "none";
    document.getElementById("remindersSection").style.display = "none";
    document.getElementById("scheduleSection").style.display = "block";
}
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

