/*
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
}*/


/*

// How to use Ajax
let posts = []
const getAllPosts=()=>{
   $.ajax({
       url:'https://jsonplaceholder.typicode.com/posts',
       type:'GET',
       dataType:'json',
       success:(response)=>{
           console.log(response)
       }
   })
}*/


let posts = []

async function getAllPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'GET',
        headers: new Headers({
            'Content-Type': 'application/json'  // data ana type aka
        })
    })
    posts = await res.json();

    let dataSet = ''
    posts.forEach(element=>{
       dataSet += `<tr>
                        <td>${element.userId}</td><td>${element.id}</td>
                        <td>${element.title}</td><td>${element.body}</td>
                        <td><button onclick="deleteComment(${element.id})" class="btn btn-danger">Delete</button></td>
                   </tr>`
    })
    $('tbody').html(dataSet)   // use jqery
    console.log(posts)
}

async function deleteComment(value){
    let isOk = confirm(`Are You Sure ?`)   // return ture or false

    if(isOk){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+value,{
            method:'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        const result = await res.json();
        console.log(result)
    }
}


async function saveComment(value){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            body: JSON.stringify({
                userId :Number($('#userId').val()),
                id :Number($('#id').val()),
                title :$('#title').val(),
                body :$('#comment').val()
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        const result = await res.json();
        console.log(result)
}



async function updateComment(value){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+$('#id').val(),{
        method:'PUT',
        body: JSON.stringify({
            userId :Number($('#userId').val()),
            id :Number($('#id').val()),
            title :$('#title').val(),
            body :$('#comment').val()
        }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    const result = await res.json();
    console.log(result)
}
