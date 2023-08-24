import {
    JsonController,
    Get,
    Param,
    Put,
    Post,
    Body,
} from 'routing-controllers';
import { FlightsService } from '../services/flights.service';
import { Person } from '../databases/mongo/models/persons.model';
import { Flight } from '../databases/mongo/models/flights.model';

@JsonController('/flights', { transformResponse: false })
export default class FlightsController {
    private _flightsService: FlightsService;

    constructor() {
        this._flightsService = new FlightsService();
    }

    @Get('')
    async getAll() {
        return {
            status: 200,
            data: await this._flightsService.getFlights(),
        };
    }

    @Put('/:code')
    async updateFlightStatus(@Param('code') code: string) {
        return {
            status: 200,
            data: await this._flightsService.updateFlightStatus(code),
        };
    }

    // add flight
    @Post('')
    async addFlight(
        @Body()
        flight: {
            code: string;
            origin: string;
            destination: string;
            status: string;
        },
    ) {
        return {
            status: 200,
            data: await this._flightsService.addFlight(flight),
        };
    }

		@Get('/:flightId')
		async getPassengers(@Param('flightId') flightId: string): Promise<Person[]> {
			return await this._flightsService.getPassengers(flightId);
		}
		
		@Post('/addPassenger')
		async addPassengerToFlight(@Body() data: {flightId: string; passengerId: string;}): Promise<Flight> {
			return await this._flightsService.addPassengerToFlight(data.flightId, data.passengerId);
		}
}
