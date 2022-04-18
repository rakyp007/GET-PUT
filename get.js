const url = 'https://jsonplaceholder.typicode.com/posts';

const getBtn = document.getElementById('get_Btn')
const userName = document.getElementById('user_id')



getBtn.addEventListener('click', () => {
    const userIdValue = userName.value;
    console.log(`${url}?id=${userIdValue}`);

    fetch(`${url}?id=${userIdValue}`)
.then(response => response.json())
.then(data => console.log(data))
})