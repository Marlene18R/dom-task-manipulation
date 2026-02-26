const input = document.getElementById('task-input');
const btn = document.getElementById('add-btn');
const list = document.getElementById('task-list');
const counter = document.getElementById('counter');

//Tecaher i dont know why but my counter wont update, I tried everything but it still doesn't work :(
function updateCounter() {
  counter.textContent = task-list.children.length;
}

btn.addEventListener('click', () => {
  if (input.value === "") return; // Don't add empty tasks

  // 1. Create the element
  const li = document.createElement('li');

  // 2. Configure (Text and a delete button)
  li.innerHTML = `
    <span>${input.value}</span>
    <button class="delete-btn">Remove</button>
  `;

  // 3. Attach to the list
  list.appendChild(li);

  // 4. Clear the input
  input.value = "";

  // 5. Setup Removal (Add listener to the new delete button)
  const delBtn = li.querySelector('.delete-btn');
  delBtn.addEventListener('click', () => {
    li.remove(); // Removes the entire LI
    updateCounter();
  });
});