const mongoose = require('mongoose');

const username = "Nicbus";
const password = "N1cbu5123";
const database = "agrandaditos";
const URI = `mongodb+srv://${username}:${password}@cluster0.ztbps.mongodb.net/${database}?retryWrites=true&w=majority`

const MongoDB = async ()=>{
    await mongoose.connect(URI, 
        {useUnifiedTopology: true}, 
        {useNewUrlPaser: true},
),       console.log("MongoDB Connected")
}

module.exports = MongoDB