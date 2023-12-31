import mongoose, { Schema } from 'mongoose';

export interface Flight {
    code: string;
    origin: string;
    destination: string;
    status: string;
		passengerList: string[];
}

const schema = new Schema<Flight>(
    {
        code: { required: true, type: String },
        origin: { required: true, type: String },
        destination: { required: true, type: String },
        status: String,
				passengerList: [String]
    },
    { timestamps: true },
);

export const FlightsModel = mongoose.model('Flights', schema);
