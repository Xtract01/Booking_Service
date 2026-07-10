import type { Prisma, Booking } from "../generated/prisma/client";
import { prisma } from "../prisma/client";

export async function createBooking(bookingInput: Prisma.BookingCreateInput) {
  const booking = await prisma.booking.create({
    data: bookingInput,
  });
  return booking;
}

export async function createIdempotencyKey(key: string, booking?: Booking) {
  const idempotencyKey = await prisma.idempotencyKey.create({
    data: {
      key,
    },
  });
  return idempotencyKey;
}
