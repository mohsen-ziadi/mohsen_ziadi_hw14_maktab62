const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/storedb");


const Product = mongoose.model("Product", {
    type: "string",
    title: "string",
    description: "string",
    shipping: "object",
    pricing: "object",
    details: "object",
});

const Product1 = {
    type: "Audio Album",
    title: "A Love Supreme",
    description: "by John Coltrane",
    shipping: {
        weight: 6,
        dimensions: {
            width: 10,
            height: 10,
            depth: 1,
        },
    },
    pricing: {
        list: 1200,
        retail: 1100,
        savings: 100,
        pct_savings: 8,
    },
    details: {
        title: "A Love Supreme [Original Recording Reissued]",
        artist: "John Coltrane",
        genre: ["Jazz", "General"],
        tracks: [
            "A Love Supreme Part I: Acknowledgement",
            "A Love Supreme Part II - Resolution",
            "A Love Supreme, Part III: Pursuance",
            "A Love Supreme, Part IV-Psalm",
        ],
    },
};

const OtherProducts = [{
        type: "Audio Album",
        title: "BlackStar",
        description: "BlackStar is the twenty-fifth and final studio album by English musician David Bowie. It was released worldwide through ISO, RCA, Columbia, and Sony on 8 January 2016, coinciding with Bowie's 69th birthday",
        shipping: {
            weight: 8,
            dimensions: {
                width: 15,
                height: 15,
                depth: 1,
            },
        },
        pricing: {
            list: 1450,
            retail: 2450,
            savings: 110,
            pct_savings: 5,
        },
        details: {
            title: "BlackStar [Original Recording Reissued]",
            artist: "David Bowie",
            genre: ["Experimental rock", "Art rock", "Avant-garde jazz"],
            tracks: [
                "Blackstar",
                "'Tis a Pity She Was a Whore",
                "Lazarus",
                "Sue (Or in a Season of Crime)",
                "Girl Loves Me",
                "Dollar Days",
                "I Can't Give Everything Away",
            ],
        },
    },
    {
        type: "Audio Album",
        title: "Funeral",
        description: "Funeral is the debut studio album by Canadian indie rock band Arcade Fire, released on September 14, 2004 by Merge Records.",
        shipping: {
            weight: 10,
            dimensions: {
                width: 12,
                height: 10,
                depth: 1,
            },
        },
        pricing: {
            list: 2450,
            retail: 3450,
            savings: 310,
            pct_savings: 2,
        },
        details: {
            title: "Funeral [Original Recording Reissued]",
            artist: "Arcade Fire",
            genre: [
                "Indie rock",
                "Alternative rock",
                "Art rock",
                "Baroque pop",
                "Rock",
            ],
            tracks: [
                "Neighborhood #1 (Tunnels)",
                "Neighborhood #2 (Laïka)",
                "Une année sans lumière",
                "Crown of Love",
                "Wake Up",
                "Haiti",
                "Rebellion (Lies)",
            ],
        },
    },
    {
        type: "Film",
        shipping: {
            weight: 10,
            dimensions: {
                width: 20,
                height: 30,
                depth: 1,
            },
        },
        pricing: {
            list: 2200,
            retail: 5100,
            savings: 200,
            pct_savings: 10,
        },
        details: {
            title: "The Matrix",
            director: ["Andy Wachowski", "Larry Wachowski"],
            writer: ["Andy Wachowski", "Larry Wachowski"],
            aspect_ratio: "1.66:1",
        },
    },
    {
        type: "Film",
        shipping: {
            weight: 25,
            dimensions: {
                width: 12,
                height: 21,
                depth: 2,
            },
        },
        pricing: {
            list: 5200,
            retail: 10100,
            savings: 500,
            pct_savings: 15,
        },
        details: {
            title: "InterStellar",
            director: ["Christopher Nolan"],
            writer: ["Christopher Nolan", "Jonathan Nolan"],
            aspect_ratio: "1.33:1",
        },
    },
    {
        type: "Film",
        shipping: {
            weight: 18,
            dimensions: {
                width: 16,
                height: 16,
                depth: 1,
            },
        },
        pricing: {
            list: 7100,
            retail: 8000,
            savings: 429,
            pct_savings: 9,
        },
        details: {
            title: "Inception",
            director: ["Christopher Nolan"],
            writer: ["Christopher Nolan"],
            aspect_ratio: "1.50:1",
        },
    },
];


function insertOne(product) {
    Product.create(product, (err, result) => {
        if (err) {
            return console.log("err ------->", err);
        }
        console.log("result --------->", result);
    });
}

function insertMany(products) {
    Product.insertMany(products, (err, result) => {
        if (err) {
            return console.log("err ------->", err);
        }
        console.log("result --------->", result);
    });
}



function readAll() {
    Product.find({}, (err, products) => {
        if (err) {
            return console.log("err -------> ", err);
        }
        console.log("result ------>", products);
    });
}


function readAllNotId() {
    Product.find({}, { _id: false }, (err, products) => {
        if (err) {
            return console.log("err -------> ", err);
        }
        console.log("result ------>", products);
    });
}



function readTypeAudioAlbum() {
    Product.find({ type: "Audio Album" }, (err, products) => {
        if (err) {
            return console.log("err -------> ", err);
        }
        console.log("result ------>", products);
    });
}



function readRetailLt5000() {
    Product.find({ "pricing.retail": { $lt: 5000 } }, (err, products) => {
        if (err) {
            return console.log("err -------> ", err);
        }
        console.log("result ------>", products);
    });
}



function readNeFilm() {
    Product.find({ type: { $ne: "Film" } }, (err, products) => {
        if (err) {
            return console.log("err -------> ", err);
        }
        console.log("result ------>", products);
    });
}






function updateListPricing() {
    Product.updateOne({ "details.title": "The Matrix" }, { "pricing.list": 2500 },
        (err, result) => {
            if (err) {
                console.log("err -------> ", err);
            }
            console.log("result ------->", result);
        }
    );
}