import express from 'express';
import waitlist from '../Classes/Waitlist';

class Router {
    public router: express.Application;

    constructor() {
        this.router = express();
        this.waitlistServiceApi();
    }

    private waitlistServiceApi() {
        this.router.get('/admin', waitlist.get)
        this.router.get('/admin/:id', waitlist.getById)
        this.router.post('/admin', waitlist.create);
        this.router.post('/admin/:id', waitlist.update);
        this.router.post('/admin/delete/:id', waitlist.removeByCustomerId)
    }

}

export default new Router().router;