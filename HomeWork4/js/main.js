// Необходимо получить список всех пользователей с помощью бесплатного 
// API(https://jsonplaceholder.typicode.com/users) и отобразить их на странице. 
// Пользователь должен иметь возможность удалить любого пользователя из списка.

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const userList = document.getElementById('user-list');
    userList.classList.add("list")
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.classList.add("item")
      listItem.textContent = user.name;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Удалить';
      deleteButton.addEventListener('click', () => {
        deleteUser(user.id);
        listItem.remove();
      });

      listItem.appendChild(deleteButton);

      userList.appendChild(listItem);
    });
  });

function deleteUser(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(() => {
      console.log("Пользователь успешно удалён");
    })
    .catch(error => {
      console.error(error);
    });
}