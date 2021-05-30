import mongoose from 'mongoose';

console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then((mong) => {
    console.log('MongoDB Connected')
}).catch(() => {
    console.error('Connection failed');
});
