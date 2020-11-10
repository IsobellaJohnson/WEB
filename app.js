const changePicture = document.querySelector('.yellowpanel');

changePicture.addEventListener("click", function(){
    document.images["pic"].src = "https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    document.images["pic"].alt = "email"
    mysrc = "email.jpeg"
})