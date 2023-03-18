import { useRouter } from "next/router";
import React from "react";
import { BsFilePlayFill } from "react-icons/bs";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      type="button"
      className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex items-center gap-1 hover:bg-neutral-300 transition"
    >
      <BsFilePlayFill size={20} />
      Play
    </button>
  );
};

export default PlayButton;
