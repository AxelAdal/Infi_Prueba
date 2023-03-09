import { data_info } from "./data";

function nueva_tarea (){
    data_info.push(
        {
            id : "1",
            titulo : "git add .",
            mensaje : "Organizar y gabeta",
            estado: true
        },
    );
    caja_de_todos.innerHTML = "";
    imprimir_todos();

    document.querySelector(".modal").classList.remove("activar");
}