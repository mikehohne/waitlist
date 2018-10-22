import { IWaitlistModel } from './Waitlist';
import { IWaitlist } from '../Interfaces/IWaitlist';
import { Document, Schema, Model, model } from 'mongoose';

export interface IWaitlistModel extends IWaitlist, Document {
}

export var WaitlistSchema: Schema = new Schema({
    instanceType: String,
    instanceId: Number,
    dateCreated: Date,
    dateModified: Date,
    queue: []
})

WaitlistSchema.pre("save", (next: any) => {
    next();
})

export const Waitlist: Model<IWaitlistModel> = model<IWaitlistModel>("Waitlist", WaitlistSchema);