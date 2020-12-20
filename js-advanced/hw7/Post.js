import {postsContainer, getDataUserByID, getPosts, customFetch} from "./index.js";

export class Post {
    constructor({title, body, userId, id}, {name, email}) {
        this.title = title;
        this.body = body;
        this.userId = userId;
        this.id = id;
        this.name = name;
        this.email = email;
    }

    render() {
        const post = document.createElement('div');
        post.className = "post";
        post.dataset.id = this.id;
        post.innerHTML = `
                    <p>Title: <span class="post-title">${this.title}</span></p>
                    <p>Article: <span class="post-body">${this.body}</span></p>
                    <div class="edit-module"></div>
                    <p class="user-name">User-name: ${this.name}</p>
                    <p class="user-email">User-email: ${this.email}</p>
                    <div class="buttons-post">
                        <button class="edit">EDIT POST</button>
                        <button data-delete>DELETE POST</button>
                    </div>`;
        if (this.id > 100) {
            postsContainer.prepend(post)
        } else {
            postsContainer.append(post)
        }
    }
}

export class NewPost {

    constructor() {
        this.inputTitle = document.createElement("input");
        this.inputBody = document.createElement("input");
        this.submitBtn = document.createElement("button");
        this.editModule = document.createElement('div');
        this.editModule.classList.add("editModule");
        this.editTitle = document.createElement("p");
        this.editBody = document.createElement("p");
        this.editTitle.textContent = "Enter new title post";
        this.editBody.textContent = "Enter new body post";
        this.editModule.hidden = false;

        this.submitBtn.type = "submit";
        this.submitBtn.textContent = "SUBMIT";
        this.editModule.prepend(this.editTitle, this.inputTitle, this.editBody, this.inputBody, this.submitBtn);
    }

    render() {
        const checkRepeat = document.querySelector(".currentPost");
        if (!checkRepeat) {
            const currentPost = document.createElement('div');
            currentPost.className = "currentPost";

            postsContainer.prepend(currentPost);
            currentPost.prepend(this.editModule);


            this.submitBtn.addEventListener("click", async (e) => {
                const currentPost = postsContainer.querySelector(".currentPost");
                const title = this.inputTitle.value;
                const body = this.inputBody.value;
                const userId = 1;
                const posts = await getPosts();
                const id = posts.length + 1;
                const dataUser = await getDataUserByID(userId);
                const newPost = new Post({title, body, userId, id}, dataUser);
                currentPost.remove();
                newPost.render();

                const res = await customFetch(`posts`, {
                    method: "POST",
                    body: JSON.stringify({
                        "title": title.textContent,
                        "body": body.textContent,
                        "id": id,
                        "userId": userId
                    })
                })
            })
        }
    }
}

export class EditPost extends NewPost {
    constructor() {
        super();
    }

    render() {
        const checkRepeat = document.querySelector(".editModule");
        if (checkRepeat === null) {
            document.addEventListener("click", async (e) => {
                const target = e.target;
                const currentPost = e.target.closest('.post');
                const id = currentPost.dataset.id;

                currentPost.prepend(this.editModule);
                const title = currentPost.querySelector(".post-title");
                const body = currentPost.querySelector(".post-body");
                this.inputTitle.value = title.textContent;
                this.inputBody.value = body.textContent;
                this.submitBtn.addEventListener("click", async (e) => {
                    title.textContent = this.inputTitle.value;
                    body.textContent = this.inputBody.value;

                    this.editModule.hidden = true;
                    const res = await customFetch(`posts/${id}`, {
                        method: "PUT",
                        body: JSON.stringify({"title": title.textContent, "body": body.textContent})
                    })
                });
                this.checkRepeat = null;


            });
        }
    }
}

export async function editPost(e) {
    if ('edit' in e.target.dataset) {
        const currentPost = e.target.closest('.post');
        const id = currentPost.dataset.id;
        const title = currentPost.querySelector(".post-title");
        const body = currentPost.querySelector(".post-body");

        const editModule = document.createElement('div');
        const editTitle = document.createElement("p");
        const editBody = document.createElement("p");
        editTitle.textContent = "Enter new title post";
        editBody.textContent = "Enter new body post";
        editModule.hidden = false;
        const inputTitle = document.createElement("input");
        const inputBody = document.createElement("input");
        const submitBtn = document.createElement("button");

        inputTitle.value = title.textContent;
        inputBody.value = body.textContent;
        submitBtn.type = "submit";
        submitBtn.textContent = "SUBMIT";
        currentPost.prepend(editModule);
        editModule.prepend(editTitle, inputTitle, editBody, inputBody, submitBtn);

        submitBtn.addEventListener("click", (e) => {
            title.textContent = inputTitle.value;
            body.textContent = inputBody.value;
            editModule.hidden = true;

        });
        const res = await customFetch(`posts/${id}`, {
            method: "PATCH",
            body: JSON.stringify({"title": title.textContent, "body": body.textContent})
        })
    }
}
