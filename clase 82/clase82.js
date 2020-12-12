fetch('https://images.dog.ceo/breeds/dingo/n02115641_5823.jpg')
.then(response => {
    response.json();
})
.then (data => {
    console.log(data)
    for(dato in data) {
        console.log(dato)
    }
})