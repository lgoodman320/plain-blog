const login = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    if (email === "mr@motivation.com" && password === "motivation") {
        window.localStorage.setItem("isLoggedIn", true);
        window.location = "index.html"
    } else {
        alert("Login credentials are incorrect.");
    }

    console.log(email, password);
}