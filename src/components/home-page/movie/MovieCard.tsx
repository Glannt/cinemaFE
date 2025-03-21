import type { Movie } from "@/types/movie.type";

import React from "react";
import { Card, CardBody, Button, Image } from "@heroui/react";
import { Play } from "lucide-react";
import { useNavigate } from "react-router";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}h ${remainingMinutes}m`;
  };
  const [isHovered, setIsHovered] = React.useState(false);

  const navigate = useNavigate();
  const handleClick = (id: string, name: string) => {
    navigate(`/book/${name}`, { state: { id } });
  };

  return (
    <Card
      disableRipple
      className='max-w-[25rem] overflow-hidden group relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='relative h-[37rem] w-full'>
        <Image
          alt={movie.title}
          className={`h-full w-full object-cover transition-transform duration-300 group-hover:brightness-50 ${isHovered ? `-z-2` : `z-0`}`}
          src={movie.images[0]?.src || `/placeholder.svg?height=400&width=300&random=${movie.id}`}
        />

        {/* Overlay with buttons that appear on hover */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            className='w-[12rem] bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 mx-auto'
            onPress={() => handleClick(movie.id, movie.title)}
          >
            Mua vé
          </Button>

          <Button
            className='w-[12rem] bg-transparent border border-white text-white hover:bg-white/10 font-medium py-3 flex items-center justify-center gap-2'
            variant='flat'
            onPress={() => console.log(`Watch trailer: ${movie.title}`)}
          >
            <Play className='h-4 w-4' />
            Trailer
          </Button>
        </div>
      </div>
      <CardBody className='text-small'>
        <div className='flex flex-col gap-3'>
          <h4 className='font-bold text-large'>{movie.title}</h4>
          <div className='flex items-center gap-2'>
            <span className=''>Duration:</span>
            <span>{formatDuration(movie.duration)}</span>
          </div>
          <div className='flex flex-wrap gap-1'>
            {movie.genres.map((genre, index) => (
              <span key={index} className='rounded-full bg-default-100 px-2 py-1 text-tiny'>
                {genre}
              </span>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
