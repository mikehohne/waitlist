export interface IWaitlist {
    InstanceId: number;
    CustomerId: number;
    InstanceType: InstanceType,
    DateCreated: Date,
    DateModified: Date
}

export enum InstanceType {
    "course",
    "workshop",
    "service"
}