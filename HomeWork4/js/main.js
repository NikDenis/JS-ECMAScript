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

// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

fetch('https://dog.ceo/api/breeds/image/random/10')
  .then(response => response.json())
  .then(data => {
    const dogImages = data.message;

    let index = 0;
    const imageContainer = document.getElementById('image-container');

    const intervalId = setInterval(() => {
      if (index >= dogImages.length) {
        clearInterval(intervalId);
        return;
      }

      const imageUrl = dogImages[index];

      const imageElement = document.createElement('img');
      imageElement.classList.add("image")
      imageElement.src = imageUrl;

      imageContainer.appendChild(imageElement);

      index++;
    }, 3000);
  });