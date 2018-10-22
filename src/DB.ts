import mongoose from 'mongoose';

class DB {
    public mongoose: any;

    constructor() {
        this.mongoose = mongoose.connect('mongodb://localhost/waitlist', 
        { useNewUrlParser: true }, 
        (err: any) => {
            if(err) {
                return console.log(err);
            }

            console.log('Connected to DB')
        })
        mongoose.set('useCreateIndex', true)
    }
}

export default new DB().mongoose