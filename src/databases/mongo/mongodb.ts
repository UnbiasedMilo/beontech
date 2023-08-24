import { Database } from '../database_abstract';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

import { Flight, FlightsModel } from './models/flights.model';

export class MongoStrategy extends Database {
    constructor() {
        super();
        this.getInstance();
    }

    private async getInstance() {
        const mongo = await MongoMemoryServer.create();
        const uri = mongo.getUri();

        const mongooseOpts = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        };

        const flights = [
            {
                code: 'ABC-123',
                origin: 'EZE',
                destination: 'LDN',
                status: 'ACTIVE',
            },
            {
                code: 'XYZ-678',
                origin: 'CRC',
                destination: 'MIA',
                status: 'ACTIVE',
            },
        ];

        (async () => {
            await mongoose.connect(uri, mongooseOpts);
            await FlightsModel.create(flights);
        })();
    }

    public async getFlightById(flightId: string) {
        return FlightsModel.findById(flightId);
    }

    public async getFlights() {
        return FlightsModel.find({});
    }

		public async getPassengers(flightId: string) {
			return FlightsModel.findById(flightId).passengerList;
		}

		public async addPassengerToFlight(flightId: string, passengerId: string): Promise<Flight> {
			const flight = await this.getFlightById(flightId);

			if(!flight) {
				throw new Error('Flight not found.')
			}

			flight.passengerList.push(passengerId)
			await flight.save();

			return flight;
		}
}
