function submitForm() {
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const data = {
    name: name,
    description: description
  };

  fetch('https://your-server.com/api/saveData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // Chuyển đối tượng JavaScript thành chuỗi JSON
  })
  .then(response => response.json()) // Giả sử server trả về JSON
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}