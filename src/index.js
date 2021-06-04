import { nav_fill } from "./navFiller.js"
import { new_project_form, clean_form } from "./form.js"
import { new_task_form, tasks_display, clear_table, edit_task_form} from "./tasks.js"
import { isThisSecond } from "date-fns";

function refresh_page() {
    //Updates selected project so the page can update its content
    //Also used to initialize the page having overview as the default project
    //And to add event listeners to the current projects and buttons
    for (let i = 0; i < all_projects.length; i++) {
        let project = document.getElementById(all_projects[i].id);
        if (all_projects[i] === current_project) {
            project.setAttribute("class", "menu selected-project");
        }
        else {
            project.setAttribute("class", "menu");
        }
        project.addEventListener("click", change_current_project);
    }
}

function new_task() {
    new_task_form();
}

function edit_task() {
    //Checks for the task selected and open edit log
    for (let i = 0; i < current_project.tasks.length; i++) {
        if (i === parseInt(this.parentNode.id)){
            clean_form();
            current_task = i;
            edit_task_form(current_project.tasks[i]);
        }
    }
}

function delete_task() {
    //Removes task from folder
    for (let i = 0; i < current_project.tasks.length; i++) {
        if (i === parseInt(this.parentNode.id)){
            current_project.tasks.splice(i, 1);
            clear_table();
            tasks_display(current_project);
        }
    }
}

function confirm_edition() {
    const name = document.getElementById("task_name").value;
    const date = document.getElementById("task_date").value;
    if (name != "" && date != "") {
        for (let i = 0; i < current_project.tasks.length; i++) {
            if (i === current_task) {
                current_project.tasks[i].name = name;
                current_project.tasks[i].date = date;
                clear_table();
                clean_form();
                tasks_display(current_project);
            }
        }
    }
}

function submit_new_task() {
    const name = document.getElementById("task_name").value;
    const date = document.getElementById("task_date").value;
    if (name != "" && date != "") {
        let new_task = Task(name, date);
        current_project.tasks.push(new_task);
    }
    clear_table();
    clean_form();
    tasks_display(current_project);
}

function delete_project() {
    //Deletes selected project
    //Doesnt allow deleting overview
    const index = all_projects.indexOf(current_project);
    if (index > 0) {
        all_projects.splice(index, 1);
        current_project = overview;
        nav_fill(all_projects);
        refresh_page();
    }
}

function submit_new_project() {
    //Submit new project from user input, check if field are not empty or
    //If the name is already taken (Part not completed)
    const name = document.getElementById("project_name").value;
    const description = document.getElementById("project_description").value;
    if (name != "" && description != "") {
        let new_project = Project(name, description);
        all_projects.push(new_project);
    }
    nav_fill(all_projects);
    refresh_page();
    clean_form();
}

function add_project() {
    //Create form window (cleaning if there is any open currently)
    clean_form();
    new_project_form();
}

function change_current_project() {
    //Function responsible to change current project selected
    for (let i = 0; i < all_projects.length; i++) {
        if (this.id === all_projects[i].id) {
            current_project = all_projects[i];
            refresh_page();
            clear_table();
            clean_form();
            tasks_display(current_project);
            break;
        }
    }
}

const Project = (id, description) => {
    //Object that describes the project (initializes with an empty list of tasks)
    let tasks = [];
    let name = id.charAt(0).toUpperCase() + id.slice(1);
    const add_task = task => {
        tasks.push(task);
    }
    return { id, name, tasks, description, add_task }
}

const Task = (id, date) => {
    //Object that describes a task
    let name = id.charAt(0).toUpperCase() + id.slice(1);
    return { id, name, date }
}

//Creates first and default project, overview wich will contain all the tasks later inputted
const overview = Project("overview", "All tasks here");
const sports = Project("sports", "Sport tasks here");
let current_task = -1;

const dentist = Task("dentist", "2020-05-27");
const run = Task("run", "2020-01-27");
const eat = Task("eat", "2018-10-11");
overview.add_task(dentist);
overview.add_task(run);
overview.add_task(eat);

//Define global variables, current_project(initialized to overview) and all projects array
let current_project = overview;
let all_projects = [overview, sports];

//Initialize page
nav_fill(all_projects);
refresh_page();
tasks_display(current_project);

export { new_task, delete_task, confirm_edition, edit_task, add_project, delete_project, submit_new_project, submit_new_task }

