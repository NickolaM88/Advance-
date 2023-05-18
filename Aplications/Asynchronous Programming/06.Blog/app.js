function attachEvents() {
    const buttonLoadPosts = document.getElementById("btnLoadPosts");
    const idPosts = document.getElementById("posts");
    const buttonView = document.getElementById("btnViewPost");
    const postBody = document.getElementById("post-body");
    const postComments = document.getElementById("post-comments");
     
    let obj = [];
     
    buttonView.addEventListener("click", viewOnClick);
    buttonLoadPosts.addEventListener("click", onClick);
     
    async function onClick(){
    let posts = await getPosts();
    let entries = Object.entries(posts);
     
    for(let [key,value] of entries){
    let option = document.createElement("option");
    option.value = key; 
    option.textContent = value.title;
    idPosts.appendChild(option);
     
    obj.push({"id" : key,
    "body": value.body,
    "title": value.title})
    }
     
    }
     
    async function viewOnClick(){
        postBody.innerHTML = "";
        postComments.innerHTML = "";
        
    let comments = await views();
    let entries = Object.entries(comments);
     
    let foundComments = entries.filter((c) => {return c[1].postId === idPosts.value})
    let body = obj.find((p) => {return p.id === idPosts.value})
    document.getElementById("post-title").textContent = `${body.title}`;
    let p = createElement("p", `${body.body}`);
    postBody.appendChild(p);
     
    for(let [key,value] of foundComments){
        let li = createElement("li", `${value.text}`);
        li.id = value.id;
        postComments.appendChild(li);
    }
    }
     
     
    async function getPosts(){
        let response = await fetch("http://localhost:3030/jsonstore/blog/posts");
        let data = await response.json();
        
        return data;
    }
     
     
    async function views(){
        let response = await fetch(`http://localhost:3030/jsonstore/blog/comments`);
        let data = await response.json();
     
        return data;
    }
     
    function createElement(type, content, className){
        const element = document.createElement(type);
        element.textContent = content;
        if(className){
            element.className = className
        }
        return element;
        }
     
     
    }
    attachEvents();