import { Seat } from "./seat.type";

type Hall = {
  id: number;
  name: string;
  seatCount: number;
  projectionType: string;
  status: string;
  seats: Seat[];
};
export type { Hall };
