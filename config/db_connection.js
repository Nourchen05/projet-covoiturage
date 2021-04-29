const mongoose = require('mongoose')

const connect_db = async()=> {
    try {
        await mongoose.connect(process.env.URI_DB, { useNewUrlParser: true,useUnifiedTopology: true , useCreateIndex:true})
        console.log('database is connected')
    } catch (error) {
        console.log('there is an error connecting to the database'+error)
    }
}

module.exports = connect_db