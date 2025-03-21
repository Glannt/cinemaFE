import { Hall } from "./hall.type";

type Cinema = {
  id: number;
  name: string;
  address: string;
  status: string;
  halls: Hall[];
};
export type { Cinema };
