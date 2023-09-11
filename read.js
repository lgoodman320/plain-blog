const postJSON = window.localStorage.getItem("posts");
const posts = JSON.parse(postJSON);

const params = new URL(window.location.href);

const dateID = params.searchParams.get("timestamp");

// long version
// let matchingPosts;
// for (const post of posts) {
//     if (post.timestamp == dateID) {
//         matchingPost = post;
//     }
// }

// short version
const matchingPost = posts.find((searchPost) =>searchPost.timestamp == dateID);

document.getElementById("postContent").innerHTML = `
        <h2>${matchingPost.title}</h2>
        <h5>by ${matchingPost.author}</h5>
        <h6>${new Date(matchingPost.timestamp).toLocaleTimeString()}</h6>
        <hr />
        <p>${matchingPost.content}</p>`;

console.log(matchingPost);