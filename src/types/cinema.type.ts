import { Hall } from "./hall.type";

type Cinema = {
  id: number;
  cinemaName: string;
  addressId: string;
  status: string;
  halls: Hall[];
};
export type { Cinema };
