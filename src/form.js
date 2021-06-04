import { submit_new_project } from "./index.js"

function clean_form() {
    const content = document.querySelector("#content");
    if (document.contains(document.getElementById("form"))) {
        const form = document.querySelector("#form");
        content.removeChild(form);
    } 

    if (document.contains(document.getElementById("table"))) {
        const table = document.querySelector("#table");
        const titl = document.querySelector("#titl");
        const desc = document.querySelector("#desc");
        table.style.opacity = "1";
        titl.style.opacity = "1";
        desc.style.opacity = "1";
    }
}

function new_project_form() {
    if (document.contains(document.getElementById("table"))) {
        const table = document.querySelector("#table");
        const titl = document.querySelector("#titl");
        const desc = document.querySelector("#desc");
        table.style.opacity = "0.1";
        titl.style.opacity = "0.1";
        desc.style.opacity = "0.1";
    }
    
    const content = document.querySelector("#content");
        const form = document.createElement("div");
            form.setAttribute("id", "form");
            const form_header = document.createElement("div");
                form_header.setAttribute("id", "form-header");
                const title = document.createElement("h2");
                    title.textContent = "New Project";
                form_header.appendChild(title);

                const close_button = document.createElement("button");
                    close_button.setAttribute("id", "close-form");
                    close_button.textContent = "x";
                    close_button.addEventListener("click", clean_form);
                form_header.appendChild(close_button);

            form.appendChild(form_header);

            const title_one = document.createElement("input");
                title_one.setAttribute("type", "text");
                title_one.setAttribute("id", "project_name");
                title_one.setAttribute("value", "");
                title_one.setAttribute("placeholder", "Name");
            form.appendChild(title_one);

            const title_two = document.createElement("input");
                title_two.setAttribute("type", "text");
                title_two.setAttribute("id", "project_description");
                title_two.setAttribute("value", "");
                title_two.setAttribute("placeholder", "Description");
            form.appendChild(title_two);

            const submit_button = document.createElement("button");
                submit_button.setAttribute("id", "submit");
                submit_button.textContent = "Submit";
                submit_button.addEventListener("click", submit_new_project);
            form.appendChild(submit_button);

        content.appendChild(form);
}

export {new_project_form, clean_form}