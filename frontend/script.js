const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // 🚫 impede recarregar a página

    const tarefa = input.value.trim();

    if (tarefa === "") return;

    const li = document.createElement("li");
    li.textContent = tarefa;

    // botão de excluir
    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = " ❌";
    deleteBtn.classList.add("delete-btn");

    // remover tarefa ao clicar
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    input.value = ""; // limpa campo
});
