import type { Cinema } from "@/types/cinema.type";

import { Select, SelectItem } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";

import { getCinemaWithActiveStatusAndMovieId } from "@/api/cinema.api";
import { getShowtimeByCinemaIdAndMovieIdAndShowDate } from "@/api/showtime.api";
import { Showtime } from "@/types/showtime.type";
import { getGenresByMovieId } from "@/api/movie.api";

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

// Mock API functions
const fetchTimes = async ({
  queryKey,
}: {
  queryKey: [string, string, string | undefined, string | undefined];
}) => {
  const [, cinemaId, movieId, showDate] = queryKey;

  if (!cinemaId || !movieId) throw new Error("Cinema ID and Movie ID are required");
  if (!cinemaId || !movieId || !showDate) {
    throw new Error("Cinema ID, Movie ID, and Show Date are required");
  }
  const response = await getShowtimeByCinemaIdAndMovieIdAndShowDate(cinemaId, movieId, showDate);

  return response.data.data;
};

const fetchTypes = async ({ queryKey }: { queryKey: readonly [string, string | undefined] }) => {
  const [, movieId] = queryKey;

  if (!movieId) throw new Error("Movie ID is required");
  const response = await getGenresByMovieId(movieId);

  return response.data.data;
};

const fetchAddresses = async ({ queryKey }: { queryKey: [string, string | undefined] }) => {
  // In a real app, this would be an API call
  const [, movieId] = queryKey;
  const response = await getCinemaWithActiveStatusAndMovieId(movieId);

  // return response;
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

  const { data: types = [] } = useQuery<String[]>({
    queryKey: ["types"],
    queryFn: () => fetchTypes({ queryKey: ["types", movieId] }),
  });

  const { data: addresses = [] } = useQuery<Cinema[]>({
    queryKey: ["addresses", movieId],
    queryFn: () => fetchAddresses({ queryKey: ["times", movieId] }),
  });

  function extractTime(isoString: string) {
    if (!isoString) return "";
    const date = new Date(isoString);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  return (
    <div className='grid grid-cols-3 gap-4 mb-8'>
      <div>
        <Select
          classNames={{
            label: "text-gray-400 text-sm block mb-2",
          }}
          label='Address'
          placeholder='Choose Address'
          selectedKeys={selectedAddress ? [selectedAddress] : []}
          onSelectionChange={(keys) => {
            const selected = Array.from(keys)[0];

            setSelectedAddress(String(selected));
          }}
        >
          {addresses.map((address) => (
            <SelectItem key={address.id}>{address.name}</SelectItem>
          ))}
        </Select>
      </div>
      <div>
        <Select
          classNames={{
            label: "text-gray-400 text-sm block mb-2",
          }}
          label='Time'
          placeholder='Choose Time'
          value={selectedTime}
          onSelectionChange={(keys) => {
            const selected = Array.from(keys)[0];

            setSelectedTime(String(selected));
          }}
        >
          {times.map((time) => (
            <SelectItem key={time.id}>{extractTime(time.startTime)}</SelectItem>
          ))}
        </Select>
      </div>
      <div>
        <Select
          // className='w-full bg-[#2D2E33] text-[#BAB4B4] rounded-lg p-2 transition-all duration-300 ease-in-out hover:bg-[#3D3E43] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500'
          classNames={{
            label: "text-gray-400 text-sm block mb-2",
          }}
          label='Type'
          value={selectedType}
          onSelectionChange={(keys) => {
            const selected = Array.from(keys)[0];

            setSelectedType(String(selected));
          }}
        >
          {types.map((type, index) => (
            <SelectItem key={index}>{type}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
}
