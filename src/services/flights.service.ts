import { Database } from '../databases/database_abstract';
import { DatabaseInstanceStrategy } from '../database';

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
}
