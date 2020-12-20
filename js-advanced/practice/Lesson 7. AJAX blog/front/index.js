class Loader {
    constructor(parent) {
        this.parent = parent;
        this.loader = document.createElement('div');
        this.loader.className = 'loader';
    }
    hide() {
        this.loader.remove();
    }
    show() {
        this.parent.appendChild(this.loader);
    }
}


// 1. Реализовать логику отображения формы создания
//   - Получить список полей по эндпоинту create-form/
//   - Отстроить форму по полученному списку
//   - Сделать несложную валидацию полей (Оба должны быть заполнены)
//   - Дойти до этапа отправки формы
//   - Форма должна отображаться при нажатии на кнопку "CREATE"
// 2. Реализовать логику создания постов
//   - Для создания поста необходима заполненная форма create
//   - Дополнительно следует добавлять значение date и заполнять его текущей датой в мс
//   - При создании, пост необходимо создать на сервере по эндпоинту posts/
//   - По факту создания поста на сервере, необходимо добавлять его в начало ленты постов (#posts)
// 3. Реализовать логику получения ленты постов при загрузке страницы
//   - Получить список постов по эндпоинту posts
//   - На основе полученных данных создать простой шаблон демонстрации поста (h4+img)
//   - Посты должны отображаться в обратном хронологическом порядке
// 4. Реализовать логику удаления поста
//   - Добавить в шаблон вывода поста кнопку DELETE
//   - При нажатии на кнопку подтверждать операцию через диалоговое окно (confirm)
//   - При подтверждении желания удалить пост, удалять его с сервера
//   - После успешного удаление поста с сервера, удалять его со страницы

// 5.1 Реализовать локальную фильтрацию/поиск
//   - В шапке приложения добавить input[type="text" id="search"]
//   - При заполнении поля должна происходить выборка постов по заголовку поста
//   - Фильтрация должна работать начиная с трех введенных символов (включительно)
//   - Посты по запросу должны отображаться в основной ленте (#posts)

const loader = new Loader(document.body);

const createFormShowBtn = document.querySelector('.show-create-form-btn');
const feedContainer = document.querySelector('#posts');
const searchField = document.querySelector('#search');

getFeed();
const debouncedSearch = debounce(onSearchUpdate);
console.log(debouncedSearch)

createFormShowBtn.addEventListener('click', showCreateForm);
feedContainer.addEventListener('click', onPostDeletePress);
searchField.addEventListener('keyup', debounce(onSearchUpdate));








function onSearchUpdate(e) {
    const {
        value
    } = this;
    if (value.length > 2) {
        postFilter(value);
    } else {
        postFilter('');
    }
}

function localPostFilter(query = '') {
    for (let post of feedContainer.children) {
        const title = post.querySelector('h4').textContent;
        post.hidden = !title.toLowerCase().includes(query.toLowerCase());
    }
}

async function postFilter(query = '') {
    const posts = await customFetch(`posts?title_like=${query}`);
    feedContainer.innerHTML = '';
    addPostsToFeed(posts);
}

async function showCreateForm() {
    const fields = await getCreateFormFields();
    const form = buildCreateForm(fields, onCreateFormSubmit);
    showFormOnPage(form);
}

function showFormOnPage(form) {
    form.hidden = false;
    document.body.appendChild(form);
}

function hideForm(form) {
    form.hidden = true;
}

async function getCreateFormFields() {
    const fields = await customFetch('create-form');
    return fields;
}

function buildCreateForm(fields, onSubmit) {
    const form = document.createElement('form');
    form.classList.add('create-form');
    for (let {
            type,
            name
        } of fields) {
        const field = document.createElement('input');
        field.type = type;
        field.name = name;
        form.appendChild(field);
    }
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'CREATE POST';
    form.appendChild(submitBtn);

    form.addEventListener('submit', onSubmit);
    form.addEventListener('click', function (e) {
        if (e.target === this) {
            this.hidden = true;
        }
    })

    return form;
}

async function onCreateFormSubmit(e) {
    e.preventDefault();
    const fields = this.querySelectorAll('input');
    const values = {};
    for (let {
            name,
            value
        } of fields) {
        if (!value.trim()) return new Error('Fill all fields')
        values[name] = value;
    }


    const isCreated = await createPost(values);
    if (isCreated) hideForm(this);

}

async function getFeed() {
    const posts = await customFetch('posts');
    addPostsToFeed(posts);
}

function addPostsToFeed(posts) {
    posts.reverse();
    for (let post of posts) {
        feedContainer.appendChild(createPostDOM(post));
    }
}

async function createPost(values = {}) {
    const res = await customFetch('posts/', {
        method: 'POST',
        body: JSON.stringify(values)
    });

    if (res.id) {
        feedContainer.prepend(createPostDOM(res))
        return true;
    }
    return false;
}

function onPostDeletePress(e) {
    if ('delete' in e.target.dataset) {
        const isUserSure = confirm('U want delete this post?');
        if (isUserSure) {
            const curPost = e.target.closest('.post');
            const postID = curPost.dataset.id;
            deletePost(postID);
        }
    }
}

async function deletePost(id) {
    const res = await customFetch(`posts/${id}`, {
        method: 'DELETE'
    });
    if (!res.length) {
        const postEl = document.querySelector(`[data-id="${id}"]`);
        if (postEl) postEl.remove();
    }
}




//  Common function / helpers
async function customFetch(endpoint, options = {}) {
    loader.show()

    const DOMAIN = 'http://localhost:3000/'
    const res = await fetch(`${DOMAIN}${endpoint}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        ...options
    });
    await delay(1500);
    const data = await res.json();
    loader.hide()
    return data;
}

function createPostDOM({
    id,
    title,
    imageURL
}) {
    const post = document.createElement('div');
    post.dataset.id = id;
    post.classList.add('post');
    post.innerHTML = `
        <div>
            <h4>${title}</h4>
            <button data-delete>X</button>
        </div>
        <img src="${imageURL}">
    `

    return post
}


function debounce(fn, delay = 1000) {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(fn.bind(this), delay, ...args);
    }
}

function delay(ms) {
    return new Promise(res => setTimeout(res, ms));
}