import type { Cinema } from "@/types/cinema.type";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Select, SelectItem } from "@heroui/react";

import { getCinemaWithActiveStatusAndMovieId } from "@/api/cinema.api";
import { getShowtimeByCinemaIdAndMovieIdAndShowDate } from "@/api/showtime.api";
import { Showtime } from "@/types/showtime.type";

type ShowtimeSelectorProps = {
  movieId: string | undefined;
  selectedAddress: string;
  setSelectedAddress: React.Dispatch<React.SetStateAction<string>>;
  selectedTime: string;
  setSelectedTime: React.Dispatch<React.SetStateAction<string>>;
  selectedType: string;
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
  selectedDate: string;
};

const fetchTimes = async ({
  queryKey,
}: {
  queryKey: [string, string, string | undefined, string | undefined];
}) => {
  const [, cinemaId, movieId, showDate] = queryKey;

  if (!cinemaId || !movieId || !showDate) {
    throw new Error("Cinema ID, Movie ID, and Show Date are required");
  }

  const response = await getShowtimeByCinemaIdAndMovieIdAndShowDate(cinemaId, movieId, showDate);

  return response.data.data;
};

// const fetchTypes = async ({ queryKey }: { queryKey: readonly [string, string | undefined] }) => {
//   const [, showtimeId] = queryKey;

//   if (!showtimeId) throw new Error("Showtime ID is required");

//   const response = await getProjectionTypeByShowTimeId(showtimeId);

//   return response.data.data;
// };

const fetchAddresses = async ({ queryKey }: { queryKey: [string, string | undefined] }) => {
  const [, movieId] = queryKey;

  const response = await getCinemaWithActiveStatusAndMovieId(movieId);

  return response.data.data;
};

export default function ShowtimeSelector({
  movieId,
  selectedAddress,
  setSelectedAddress,
  selectedTime,
  setSelectedTime,
  selectedType,
  setSelectedType,
  selectedDate,
}: ShowtimeSelectorProps) {
  const { data: times = [] } = useQuery<Showtime[]>({
    queryKey: ["times", selectedAddress, movieId],
    queryFn: () => fetchTimes({ queryKey: ["times", selectedAddress, movieId, selectedDate] }),
    enabled: !!selectedAddress && !!movieId,
  });

  // const { data: types } = useQuery<string>({
  //   queryKey: ["types"],
  //   queryFn: () => fetchTypes({ queryKey: ["types", selectedTime] }),
  // });

  const { data: addresses = [] } = useQuery<Cinema[]>({
    queryKey: ["addresses", movieId],
    queryFn: () => fetchAddresses({ queryKey: ["addresses", movieId] }),
  });

  const extractTime = (isoString: string) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  React.useEffect(() => {
    setSelectedAddress("");
    setSelectedTime("");
    setSelectedType("");
  }, [selectedDate]);

  return (
    <div className='grid grid-cols-3 gap-4 mb-8'>
      <div>
        <Select
          classNames={{ label: "text-gray-400 text-sm block mb-2" }}
          label='Address'
          placeholder='Choose Address'
          selectedKeys={selectedAddress ? [selectedAddress] : []}
          onSelectionChange={(keys) => setSelectedAddress(String(Array.from(keys)[0]))}
        >
          {addresses.map((address) => (
            <SelectItem key={address.id}>{address.name}</SelectItem>
          ))}
        </Select>
      </div>
      <div>
        <Select
          classNames={{ label: "text-gray-400 text-sm block mb-2" }}
          isDisabled={!selectedAddress}
          label='Time'
          placeholder='Choose Time'
          selectedKeys={selectedTime ? [selectedTime] : []}
          value={selectedTime}
          onSelectionChange={(keys) => {
            const selectedKey = String(Array.from(keys)[0]);

            setSelectedTime(selectedKey);
            const selectedTimeObj = times.find((time) => String(time.id) === selectedKey);

            if (selectedTimeObj) {
              setSelectedType(selectedTimeObj.projectionType); // Replace 'projectionType' with the correct property name
            }
          }}
        >
          {times.map((time) => (
            <SelectItem key={time.id}>{extractTime(time.startTime)}</SelectItem>
          ))}
        </Select>
      </div>
      <div>
        <Select
          classNames={{ label: "text-gray-400 text-sm block mb-2" }}
          isDisabled={!selectedTime}
          label='Type'
          placeholder='Choose Type'
          selectedKeys={selectedType ? [selectedType] : []}
          onSelectionChange={(keys) => setSelectedType(String(Array.from(keys)[0]))}
        >
          {selectedType ? (
            <SelectItem key={selectedType}>{selectedType}</SelectItem>
          ) : (
            <SelectItem />
          )}
        </Select>
      </div>
    </div>
  );
}
