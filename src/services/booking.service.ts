import Booking from '../entities/Booking';
import tableService from './table.service';
import Table from '../entities/Table';
import { ReservationData, BookingData, ReservationUpdateData } from '../interfaces';
import NotFoundError from '../errors/NotFoundError';

class BookingService {

    async addReservation(data: ReservationData): Promise<Booking> {
        const { capacity } = data;
        const table = await this.assignTable(capacity);
        const bookingData = { ...data, tableId: table.id }

        let booking = this.generateBooking(bookingData, table);
        booking = await booking.save();
        await tableService.updateTableAvailability(table);
        return booking;
    }

    async deleteReservation(id: number): Promise<void> {
        await this.getBookingById(id);
        await Booking.delete(id);
    }

    async updateBooking(reservationUpdateData: ReservationUpdateData): Promise<Booking> {
        const booking = await this.getBookingById(reservationUpdateData.bookingId);
        const { capacity } = reservationUpdateData;
        let table;
        if (capacity) {
            table = await this.assignTable(capacity);
        }
        const bookingData = { ...reservationUpdateData, table };

        const updatedBooking = await Booking.merge(booking, bookingData).save();
        await tableService.updateTableAvailability(booking.table);
        await tableService.updateTableAvailability(updatedBooking.table);
        return updatedBooking;
    }

    async getBookingById(id: number): Promise<Booking> {
        const booking = await Booking.findOne({ id }, { relations: ['table'] });
        if (!booking) {
            throw new NotFoundError();
        }

        await tableService.updateTableAvailability(booking.table);

        return booking;
    }

    async getReservationsByUserId(userId: number): Promise<Booking[]> {
        return Booking.find({ user: userId });
    }

    async assignTable(capacity: number): Promise<Table> {
        return tableService.getAvailableTableByCapacity(capacity);
    }


    generateBooking(bookingData: BookingData, table: Table): Booking {
        const booking = new Booking();
        booking.dateTime = new Date(bookingData.dateTime);
        booking.phoneNumber = bookingData.phoneNumber;
        booking.email = bookingData.email;
        booking.name = bookingData.name;
        booking.table = table;
        booking.user = bookingData.userId;
        return booking;
    }
}

const bookingService = new BookingService();
export default bookingService;