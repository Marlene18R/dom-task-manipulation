const input = document.getElementById('task-input');
const btn = document.getElementById('add-btn');
const list = document.getElementById('task-list');

btn.addEventListener('click', () => {
  if (input.value === "") return; // Don't add empty tasks

  // 1. Create the element
  const li = document.createElement('li');

  // 2. Configure (Text and a delete button)
  li.innerHTML = `
    <span>${input.value}</span>
    <button class="delete-btn">❌</button>
  `;

  // 3. Attach to the list
  list.appendChild(li);

  // 4. Clear the input
  input.value = "";

  // 5. Setup Removal (Add listener to the new delete button)
  const delBtn = li.querySelector('.delete-btn');
  delBtn.addEventListener('click', () => {
    li.remove(); // Removes the entire LI
  });
});

function updateCounter(){
  counter.textContent = list.children.length;
}