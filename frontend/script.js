const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const API = "http://localhost:5000";

// Busca e renderiza todas as tasks do banco
async function loadTasks() {
  const res = await fetch(`${API}/tasks`);
  const tasks = await res.json();

  taskList.innerHTML = ""; // limpa a lista antes de renderizar

  tasks.forEach((task) => renderTask(task));
}

// Cria o elemento <li> na tela
function renderTask(task) {
  const li = document.createElement("li");
  li.textContent = task.title;

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = " ❌";
  deleteBtn.classList.add("delete-btn");

  // chama o backend para deletar
  deleteBtn.addEventListener("click", async () => {
    await fetch(`${API}/tasks/${task.id}`, {
      method: "DELETE",
    });

    li.remove(); // remove da tela após deletar no banco
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

// Cria nova task no banco ao submeter o form
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = input.value.trim();
  if (title === "") return;

  const res = await fetch(`${API}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });

  const task = await res.json();
  renderTask(task); // renderiza sem precisar recarregar

  input.value = "";
});

// Carrega as tasks ao abrir a página
loadTasks();