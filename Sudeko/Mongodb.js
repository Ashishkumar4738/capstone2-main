db.products.insertOne({
    _id:3,
    name:"Rubber",
    price:1.2,
    stock:34,
    review:[
        {
            authName:"Ashish",
            rating:5,
            review:"Best Pencil Ever"
        },
        {
            authName:"Anoop",
            rating:5,
            review:"Awesome"
        }
    ]
})