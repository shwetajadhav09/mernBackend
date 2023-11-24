require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = "mongodb+srv://ecomern-yt:shweta@cluster0.oa4zels.mongodb.net/ecomernyt?retryWrites=true&w=majority";

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})
