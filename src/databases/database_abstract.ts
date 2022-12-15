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
}
