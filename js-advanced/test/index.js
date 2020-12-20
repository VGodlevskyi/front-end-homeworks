const postsContainer = document.querySelector("#posts");
 postsContainer.addEventListener('click' , (e) => {
     new PostTemplate().deletePost(e)
 })

async function customFetch(endpoint, options = {}) {
    const DOMAIN = "https://jsonplaceholder.typicode.com/";
    const res = await fetch(`${DOMAIN}${endpoint}`, {
        // method: "GET",
        headers: {'content-type': 'application/json'},
        ...options
    });
    const data = await res.json();
    return data;
}

async function getPosts() {
    const dataPosts = await customFetch('posts/', {method: "GET"});
    return dataPosts;
}

async function getDataUserByID(userId) {
    const dataUsers = await customFetch('users/');
    let name, email;
    dataUsers.forEach(function (user) {
        if (user.id === userId) {
            name = user.name;
            email = user.email;
        }
    });
    return {name, email};
}

(async function() {
    const dataPosts = await getPosts();
    for (let {title, body, userId, id} of dataPosts) {
        const dataUser = await getDataUserByID(userId);
        const post = new PostTemplate({title, body, userId, id}, dataUser);
        post.buildPost();
    }
})();


class PostTemplate {
    constructor({title = "", body = "", userId, id}, {name, email}) {
        this.name = name;
        this.email = email;
        this.title = title;
        this.body = body;
        this.id = id;
        // this.post = document.createElement('div');
        // this.post.className = "post";
        // this.post.innerHTML = `
        //             <p>Title: <span class="post-title">${this.title}</span></p>
        //             <p>Article: <span class="post-body">${this.body}</span></p>
        //             <p class="user-name">User-name: ${this.name}</p>
        //             <p class="user-email">User-email: ${this.email}</p>
        //             <div class="buttons-post">
        //                 <button data-edit>EDIT POST</button>
        //                 <button data-delete>DELETE POST</button>
        //             </div>`;
        // const btnCreateNewPost = document.querySelector("#btn-create_post");
        // this.editModule = document.createElement('div');
        // this.editTitle = document.createElement("p");
        // this.editBody = document.createElement("p");
        // this.editTitle.textContent = "Enter new title post";
        // this.editBody.textContent = "Enter new body post";
        // this.inputTitle = document.createElement("input");
        // this.inputBody = document.createElement("input");
        // this.submitBtn = document.createElement("button");
        // this.inputTitle.value = this.title.textContent;
        // this.inputBody.value = this.body.textContent;
        // this.submitBtn.type = "submit";
        // this.submitBtn.textContent = "SUBMIT";

        // this.submitBtn.addEventListener("click", (e) => {
        //     this.title = this.inputTitle.value;
        //     this.body = this.inputBody;
        //     this.editModule.hidden = true;
        // });

        // postsContainer.addEventListener('click', this.deletePost.bind(this));
        // postsContainer.addEventListener('click', this.editPost.bind(this));

        // btnCreateNewPost.addEventListener('click', this.createNewPost.bind(this));
    }
    render() {
        this.post = document.createElement('div');
        this.post.className = "post";
        this.post.innerHTML = `
                    <p>Title: <span class="post-title">${this.title}</span></p>
                    <p>Article: <span class="post-body">${this.body}</span></p>
                    <p class="user-name">User-name: ${this.name}</p>
                    <p class="user-email">User-email: ${this.email}</p>
                    <div class="buttons-post">
                        <button data-edit >EDIT POST</button>
                        <button data-delete class="edit" id=${this.id}>DELETE POST</button>
                    </div>`;
        const btnCreateNewPost = document.querySelector("#btn-create_post");
        this.editModule = document.createElement('div');
        this.editTitle = document.createElement("p");
        this.editBody = document.createElement("p");
        this.editTitle.textContent = "Enter new title post";
        this.editBody.textContent = "Enter new body post";
        this.inputTitle = document.createElement("input");
        this.inputBody = document.createElement("input");
        this.submitBtn = document.createElement("button");
        this.inputTitle.value = this.title.textContent;
        this.inputBody.value = this.body.textContent;
        this.submitBtn.type = "submit";
        this.submitBtn.textContent = "SUBMIT";

        this.submitBtn.addEventListener("click", (e) => {
            this.title = this.inputTitle.value;
            this.body = this.inputBody;
            this.editModule.hidden = true;
        });

        btnCreateNewPost.addEventListener('click', this.createNewPost.bind(this));

        const btnEdit = document.querySelectorAll('.edit')
        btnEdit.forEach(item => {
            item.addEventListener('click', this.deletePost.bind(this))
        })

        return this.post
    }

    async deletePost(e) {
        // if ('delete' in e.target.dataset) {
        //     const isUserSure = confirm('Are you sure?');
        //     if (isUserSure) {
                // console.log(this.id)
                // this.post.remove();
                const res = await customFetch(`posts/${e.target.id}`, {method: "DELETE"})
                // const data = await res.json()
                console.log(res)
                // }
        // }
    }

    // async customFetch(endpoint, options = {}) {
    //     const DOMAIN = "https://jsonplaceholder.typicode.com/";
    //     const res = await fetch(`${DOMAIN}${endpoint}`, {
    //         method: "GET",
    //         headers: {'content-type': 'application/json'},
    //         ...options
    //     });
    //     const data = await res.json();
    //     return data;
    // }

    buildPost() {
        if (this.id > 100) {
            postsContainer.prepend(this.post)
        } else {
            postsContainer.append(this.render())
        }
        return this.post;
    }


    async editPost(e) {
        debugger
        if ('edit' in e.target.dataset) {
            this.post = e.target.closest('.post');
            this.addEditModule();
            const res = await customFetch(`posts/${this.id}`, {
                method: "PATCH",
                body: JSON.stringify({"title": this.title, "body": this.body})
            })
        }
    }

    addEditModule() {
        this.editModule.hidden = false;
        this.post.prepend(this.editModule);
        this.editModule.prepend(this.editTitle, this.inputTitle, this.editBody, this.inputBody, this.submitBtn);
    }

    async createNewPost() {
        this.posts = await getPosts();
        this.id = this.posts.length + 1;
        this.userId = 1;
        this.dataUser = await getDataUserByID(this.userId);
        this.addEditModule();
        this.post = await new PostTemplate(`{title:${this.title}, body:${this.body}, userId:${this.userId}, id:${this.id}`, this.dataUser);
        this.post.buildPost();
        postsContainer.prepend(this.post);


        const res = await customFetch(`posts/${this.id}`, {
            method: "POST",
            body: JSON.stringify({"title": this.title, "body": this.body, "id": this.id, "userId": this.userId})
        });
    }
}






