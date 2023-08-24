import { Flight } from "./mongo/models/flights.model";
import { Person } from "./mongo/models/persons.model";

export class Database {
    public static _instance: any;

    public static getInstance() {
        // subclass must implement this method
    }

    public async getFlights() {
        // subclass must implement this method
    }

    public async updateFlightStatus(code: string) {
        // subclass must implement this method
    }

    public async addFlight(flight: {
        code: string;
        origin: string;
        destination: string;
        status: string;
    }) {
        // subclass must implement this method
    }
		

		public async getPassengers(flightId: string): Promise<Person[]> {
			return [];
		}
		
		public async addPassengerToFlight(flightId: string, passengerId: string): Promise<Flight> {
			return {} as Flight;
		}
}
