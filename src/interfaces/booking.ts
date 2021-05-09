export interface ReservationData {
    capacity: number;
    dateTime: Date;
    phoneNumber: string;
    email: string;
    name: string;
    userId: number;
}

export interface BookingData extends ReservationData {
    tableId: number
}

