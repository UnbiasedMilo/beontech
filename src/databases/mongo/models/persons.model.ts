import mongoose, { Schema } from 'mongoose';

export interface Person {
    name: string;
    gender: string;
    email: string;
}

const schema = new Schema<Person>(
    {
				name: { required: true, type: String },
        gender: { required: true, type: String },
        email: { required: true, type: String },
    },
    { timestamps: true },
);

export const PersonsModel = mongoose.model('Persons', schema);
