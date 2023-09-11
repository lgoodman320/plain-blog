const createPost = (event) => {
    event.preventDefault();
    console.log('button clicked!');
    const post = {
        title: event.target.title.value,
        content: event.target.content.value,
        author: event.target.author.value,
        timestamp: Date.now()
    };

    // Get the existing posts from local storage
    const postString = window.localStorage.getItem("posts");
    // Convert the local storage string into an array
    let postsArray = postString ? JSON.parse(postString) : [];
    // Add our new post object to the end of the array
    postsArray.push(post);
    // Convert the array back into a string
    const newPostsArray = JSON.stringify(postsArray);

    // Put the stringified array back into local storage
    window.localStorage.setItem("posts", newPostsArray);
    window.location = "/";  
}