import { Database } from '../databases/database_abstract';
import { DatabaseInstanceStrategy } from '../database';
import { Person } from '../databases/mongo/models/persons.model';
import { Flight } from '../databases/mongo/models/flights.model';

export class FlightsService {
    private readonly _db: Database;

    constructor() {
        this._db = DatabaseInstanceStrategy.getInstance();
    }

    public async getFlights() {
        return this._db.getFlights();
    }

    public async updateFlightStatus(code: string) {
        return this._db.updateFlightStatus(code);
    }

    public async addFlight(flight: {
        code: string;
        origin: string;
        destination: string;
        status: string;
    }) {
        return this._db.addFlight(flight);
    }

		public async getPassengers(flightId: string): Promise<Person[]> {
			return this._db.getPassengers(flightId);
		}

		public async addPassengerToFlight(flightId: string, passengerId: string): Promise<Flight> {
			return this._db.addPassengerToFlight(flightId, passengerId);
		}
}
