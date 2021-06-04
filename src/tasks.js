import { clean_form } from "./form.js"
import { new_task, delete_task, submit_new_task, edit_task, confirm_edition } from "./index.js"

function clear_table() {
    const content = document.querySelector("#content");
    if (document.contains(document.getElementById("table"))) {
        const table = document.querySelector("#table");
        const titl = document.querySelector("#titl");
        const desc = document.querySelector("#desc");
        content.removeChild(table);
        content.removeChild(titl);
        content.removeChild(desc);
    } 
}

function new_task_form() {
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
                    title.textContent = "New Task";
                form_header.appendChild(title);

                const close_button = document.createElement("button");
                    close_button.setAttribute("id", "close-form");
                    close_button.textContent = "x";
                    close_button.addEventListener("click", clean_form);
                form_header.appendChild(close_button);

            form.appendChild(form_header);

            const title_one = document.createElement("input");
                title_one.setAttribute("type", "text");
                title_one.setAttribute("id", "task_name");
                title_one.setAttribute("value", "");
                title_one.setAttribute("placeholder", "Name");
            form.appendChild(title_one);

            const title_two = document.createElement("input");
                title_two.setAttribute("type", "date");
                title_two.setAttribute("id", "task_date");
                title_two.setAttribute("value", "");
            form.appendChild(title_two);

            const submit_button = document.createElement("button");
                submit_button.setAttribute("id", "submit");
                submit_button.textContent = "Submit";
                submit_button.addEventListener("click", submit_new_task);
            form.appendChild(submit_button);

        content.appendChild(form);
}

function edit_task_form(task) {
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
                    title.textContent = "New Task";
                form_header.appendChild(title);

                const close_button = document.createElement("button");
                    close_button.setAttribute("id", "close-form");
                    close_button.textContent = "x";
                    close_button.addEventListener("click", clean_form);
                form_header.appendChild(close_button);

            form.appendChild(form_header);

            const title_one = document.createElement("input");
                title_one.setAttribute("type", "text");
                title_one.setAttribute("id", "task_name");
                title_one.setAttribute("value", task.name);
            form.appendChild(title_one);

            const title_two = document.createElement("input");
                title_two.setAttribute("type", "date");
                title_two.setAttribute("id", "task_date");
                title_two.setAttribute("value", task.date);
            form.appendChild(title_two);

            const submit_button = document.createElement("button");
                submit_button.setAttribute("id", "submit");
                submit_button.textContent = "Submit";
                submit_button.addEventListener("click", confirm_edition);
            form.appendChild(submit_button);

        content.appendChild(form);
}


function tasks_display(current_project) {
    const content = document.querySelector("#content");
        const main_title = document.createElement("h2");
            main_title.setAttribute("id", "titl");
            main_title.textContent = current_project.name;
        content.appendChild(main_title);

        const descript = document.createElement("h3");
            descript.setAttribute("id", "desc");
            descript.textContent = current_project.description;
        content.appendChild(descript);

        const table_section = document.createElement("div");
            table_section.setAttribute("id", "table");
            const table = document.createElement("table");
                const trr = document.createElement("tr");
                    const thone = document.createElement("th");
                    thone.textContent = "Name";
                    trr.appendChild(thone);

                    const thtwo = document.createElement("th");
                    thtwo.textContent = "Date";
                    trr.appendChild(thtwo);
            
                table.appendChild(trr);
                for (let i = 0; i < current_project.tasks.length; i++) {
                    let tr = document.createElement("tr");
                        tr.setAttribute("id", String(i));
                        let tdone = document.createElement("td");
                        tdone.textContent = current_project.tasks[i].name;
                        tr.appendChild(tdone);

                        let tdtwo = document.createElement("td");
                        tdtwo.textContent = current_project.tasks[i].date;
                        tr.appendChild(tdtwo);

                        let tdthree = document.createElement("td");
                        tdthree.setAttribute("class", "edit");
                        tdthree.addEventListener("click", edit_task);
                        tdthree.innerHTML = '<i class="material-icons edt">edit</i>';
                        tr.appendChild(tdthree);

                        let tdfour = document.createElement("td");
                        tdfour.setAttribute("class", "edit");
                        tdfour.addEventListener("click", delete_task);
                        tdfour.innerHTML = '<i class="material-icons dlt">delete</i>';
                        tr.appendChild(tdfour);
                    table.appendChild(tr);
                }

            table_section.appendChild(table); 
            const add_button = document.createElement("button");
                add_button.textContent = "New Task";
                add_button.setAttribute("id", "task-add");
                add_button.addEventListener("click", new_task);
            table_section.appendChild(add_button);
       
        content.appendChild(table_section);
}

        


export { new_task_form, tasks_display, clear_table, edit_task_form }