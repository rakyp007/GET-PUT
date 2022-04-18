const posts = 'https://jsonplaceholder.typicode.com/posts/';

const getPosts = document.getElementById('get_posts')
const userId = document.getElementById('user_posts')

 const data = {
     userId:1,
     id:2,
     title:'test',
     body:"test body"
 }
 function HTTP(e) {
     e.preventDefault();
     const id = userId.value;
     console.log(`${posts}${id}`);

     fetch(`${posts}${id}`,{
           method:'PUT',
         headers:{
             'Content-Type':'application/json'
         },
         body:JSON.stringify(data)
        })
     .then(response => response.json())
     .then(data => console.log(data))
     }
       
 

 getPosts.addEventListener('click', HTTP)