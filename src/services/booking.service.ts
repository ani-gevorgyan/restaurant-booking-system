import { NotFoundError } from './../errors/NotFoundError';
import Booking from '../entities/Booking';
import tableService from './table.service';
import Table from '../entities/Table';
import { ReservationData, BookingData } from '../interfaces';
import { MAX_CAPACITY } from '../constants';



class BookingService {

    async addReservation(data: ReservationData): Promise<Booking> {
        const { capacity } = data;
        const table = await this.assignTable(capacity);
        const bookingData = { ...data, tableId: table.id }

        let booking = this.generateBooking(bookingData);
        booking = await booking.save();
        await tableService.updateTable(table);
        return booking;
    }

    async assignTable(capacity: number): Promise<Table> {
        const table = await tableService.getAvailableTableByCapacity(capacity);
        return table;
    }

    generateBooking(bookingData: BookingData): Booking {
        const booking = new Booking();
        booking.dateTime = new Date(bookingData.dateTime);
        booking.phoneNumber = bookingData.phoneNumber;
        booking.email = bookingData.email;
        booking.name = bookingData.name;
        booking.table = bookingData.tableId;
        booking.user = bookingData.userId;
        return booking;
    }
}

const bookingService = new BookingService();
export default bookingService;