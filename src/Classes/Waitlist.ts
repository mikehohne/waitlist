import { Request, Response } from 'express';
import { InstanceType } from './../Interfaces/IWaitlist';
import db from '../Models';

class Waitlist {

    InstanceId!: number;
    public CustomerId!: number;
    public InstanceType!: InstanceType;
    public DateCreated!: Date;
    public DateModified!: Date;

    constructor() {
        
    }

    async get(req: Request, res: Response) {
        const q  = req.query || null;
        res.json({
            data: await db.Waitlist.find(q)
        })
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;
        res.json({
            data: await db.Waitlist.findById(id)
        })
    }

    async create(req: Request, res: Response) {
        const { instanceId, customerId, instanceType, queue } = req.body;
        const newWaitlist =  new db.Waitlist({
            instanceId, customerId, instanceType, queue
        })

        res.json({
            data: await newWaitlist.save()
        })
    }

    async removeByCustomerId(req: Request, res: Response) {
        const customerId = req.params.id;
        res.json({
            data: customerId
        })
    }

    async update(req: Request, res: Response) {
        const { id }= req.params;
        const data = req.body;
        res.json({
            data: await db.Waitlist.findByIdAndUpdate(id, data, { new: true })
        })
    }

}

export default new Waitlist()