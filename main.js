let posts = []
const getAllPosts=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'GET',
        headers: new Headers({
            'Content-Type': 'application/json'  // data ana type aka
        })
    }).then(response=>{
        posts  = response.json() // API aken dena values tika ape array akakat da gta
        posts.then(e=>{
            console.log(e)
        })
        // console.log(response.json())

    }).catch(error=>{
        console.log(error)
    })
}