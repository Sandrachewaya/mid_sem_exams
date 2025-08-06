const products = [
    {
        id : "p001",
        name : "wireless headphones",
        category : "electromics",
        price : 59.99,
        instock : true,
        tags : ["audio","wireless","music"],
        rating :{
            average : 4.5,
            reviewscount : 120,
            releasedate : "2025-08-10"
        }
    },

    {
        id:"p002",
        name: "electrical kettel",
        category : "home appliance",
        price: 29.99,
        instock : false,
        tags:["kitchen","electrical","boil"],
        rating:{
            average :4.0,
            reviewscount: 85,
            releasedate: "2025-02-07"
        }
    },

    {
        id: "p003",
        name: "yoga mat",
        category: "sport",
        price:19.99,
        instock: true,
        tags:["fitness","yoga","exercise"],
        ratting :{
            average: 4.7,
            reviewscount: 200,
            releasedate: "2022-06-56"
        }
        
    }
];

products.forEach(products => {
    console.log(products.name,products.date);
});

const arr = products.filter(products => products.instock);
console.log(arr);

const blend = products.find(products => products.name === "blender");
console.log(blend);