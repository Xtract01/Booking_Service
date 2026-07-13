import { Request, Response } from "express";
import {
  createBookingService,
  finalizeBooking,
} from "../service/booking.service";

export const createBookingHandler = async (req: Request, res: Response) => {
  const booking = await createBookingService({
    userId: req.body.userId,
    hotelId: req.body.hotelId,
    totalGuests: req.body.totalGuests,
    bookingAmount: req.body.bookingAmount,
  });
  res.status(201).json({
    bookingId: booking.bookingId,
    idempotencyKey: booking.idempotencyKey,
  });
};
