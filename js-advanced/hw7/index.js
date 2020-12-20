import {API, getData} from "./ajax.js"
import {Post, NewPost, EditPost} from "./Post.js"

localStorage.token = '1144f7b5-39fc-425b-8ced-daf15a8d8fdc';

const btnCreateNewPost = document.querySelector("#btn-create_post");
export const postsContainer = document.querySelector("#posts");
postsContainer.addEventListener('click', deletePost);

postsContainer.addEventListener('click', (e)=>{
    const target=e.target;
    if(target.classList.value==='edit') {
        const editModul = target.parentElement.parentElement.getElementsByClassName("editModule");
        if (editModul.item(0)) editModul.item(0).hidden=false;
        const editPost = new EditPost();
        editPost.render();
    }
});
btnCreateNewPost.addEventListener('click', () => {
    const newPost = new NewPost();
    newPost.render()
});

createListPosts();

async function createListPosts() {
    const dataPosts = await getPosts();
    for (let {title, body, userId, id} of dataPosts) {
        const dataUser = await getDataUserByID(userId);
        const {name, email} = dataUser;
        const createPost = new Post({title, body, userId, id}, {name, email});
        createPost.render();
    }
}

export async function getDataUserByID(userId) {
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

export async function getPosts() {
    const dataPosts = await customFetch('posts/', 'method: "GET"');
    return dataPosts;
}

async function deletePost(e) {
    if ('delete' in e.target.dataset) {
        const isUserSure = confirm('Are you sure?');
        if (isUserSure) {
            const currentPost = e.target.closest('.post');
            const id = currentPost.dataset.id;
            const res = await customFetch(`posts/${id}`, {method: "DELETE"})
            const postEl = document.querySelector(`[data-id="${id}"]`);
            postEl.remove();
        }
    }
}

export async function customFetch(endpoint, options = {}) {
    const res = await getData(endpoint, options);
    const data = await res.json();
    return data;
}