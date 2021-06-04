import { add_project, delete_project } from "./index.js"

function nav_fill(all_projects) {
    // Fill nav bar with all the project that currently exist
    const nav = document.querySelector("#main_nav");

    while(nav.firstChild){
        nav.removeChild(nav.firstChild);
    }

        const header = document.createElement("h1");
            header.setAttribute("class", "header");
            header.textContent = "Projects";
        nav.appendChild(header);

        for (let i = 0; i < all_projects.length; i++){
            let new_project = document.createElement("p");
            new_project.setAttribute("id", all_projects[i].id);
            new_project.textContent = all_projects[i].name;
            nav.appendChild(new_project);  
        }

        //Add buttons to end: create and delete
        const nav_button = document.createElement("div");
            nav_button.setAttribute("id", "nav-buttons-layout");
            const button_add = document.createElement("button");
                button_add.setAttribute("id", "add-project");
                button_add.textContent = "CREATE";
                button_add.addEventListener("click", add_project);
            nav_button.appendChild(button_add);

            const button_del = document.createElement("button");
                button_del.setAttribute("id", "delete-project");
                button_del.textContent = "DELETE";
                button_del.addEventListener("click", delete_project);
            nav_button.appendChild(button_del);

        nav.appendChild(nav_button);
        
}

export { nav_fill }