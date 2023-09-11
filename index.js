const postJSON = window.localStorage.getItem("posts");
const posts = JSON.parse(postJSON);
const postDiv = document.getElementById("posts");
let generatedHTML = "";


for (const post of posts) {
    generatedHTML += `<div class="col-4">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${post.title}
            <div class="card-text">
                <div class="author">by ${post.author}</div>
                <div class="timestamp">${new Date(post.timestamp).toLocaleTimeString()}</div>
                <p>
                <!-- show first 100 characters of post -->
                    ${post.content.slice(0, 100)}${post.content.length > 100 ? "..." : ""}
                </p>
            </div>
            <a href="read.html?timestamp=${post.timestamp}" class="btn btn-primary">Read more</a>
        </div> 
      </div> <!-- end of card -->
    </div> <!-- end of col-4 -->`;
}
postDiv.innerHTML = generatedHTML;