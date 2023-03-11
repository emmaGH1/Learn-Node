const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

const connectionString = 'mongodb+srv://emma:<password>@nodeexpressprojects.a9gham0.mongodb.net/?retryWrites=true&w=majority'
module.exports = connectDB
