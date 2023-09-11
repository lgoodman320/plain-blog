const createPost = (event) => {
    event.preventDefault();
    console.log('button clicked!');
    const post = {
        title: event.target.title.value,
        content: event.target.content.value,
        author: event.target.author.value,
        timestamp: Date.now()
    };
    console.log(post);
}