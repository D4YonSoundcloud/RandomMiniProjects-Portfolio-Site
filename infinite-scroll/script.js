const postsConatiner = document.getElementById("postsContainer");
const loading = document.getElementById("loader");
const filter = document.getElementById("filter");

let limit = 5;
let page = 1;

async function getPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}_page=${page}`
  );

  const data = await res.json();

  return data;
}

//Show posts in postContainer

async function showPosts() {
  const posts = await getPosts();
  posts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
        <div class="number">${post.id}</div>
        <div class="postInfo">
        <h2 class="postTitle">${post.title}</h2>
        <p class="postBody">${post.body}</p>
        </div>
        `;

    postsContainer.appendChild(postElement);
  });
}

//show Loader + fetch more posts
function showLoading() {
    loading.classList.add('show');

    setTimeout(() => {
        loading.classList.remove('show');

        setTimeout(()=> {
            page++;
            showPosts()
        },300)
    },1000);
}

//filter post by input
function filterPosts(e) {
    const term = e.target.value.toUpperCase();
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        const title = post.querySelector('.postTitle').innerText.toUpperCase();
        const body = post.querySelector('.postBody').innerText.toUpperCase();

        if(title.indexOf(term) > -1 || body.indexOf(term) > -1) {
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    })
}

//Show init posts
showPosts();


window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight - 5) {
        showLoading();
    }
});

filter.addEventListener('input', filterPosts);