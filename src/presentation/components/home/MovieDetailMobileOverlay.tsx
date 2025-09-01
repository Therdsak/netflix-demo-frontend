/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Movie } from "@/domain/models/Movie";
import { useTranslation } from "react-i18next";

interface MovieDetailOverlayProps {
  selectedMovie?: Movie | null;
}

const MovieDetailMobileOverlay: React.FC<MovieDetailOverlayProps> = ({
  selectedMovie,
}) => {
  const { t } = useTranslation("common");
  // console.log('t("play") : ', t("play"));
  if (!selectedMovie) return null;
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-4 items-center justify-center">
        <img
          src={"/netflix-series.png"}
          alt={"netflix-series"}
          width={200}
          height={36}
        />
      </div>
      <h2 className="text-white text-3xl mt-4 text-center line-clamp-2">
        {selectedMovie && selectedMovie.title}
      </h2>

      <p className="text-white mt-2 text-center line-clamp-1 px-4">
        {selectedMovie && selectedMovie.overview}
      </p>
      <div className="flex flex-row gap-4 my-6 justify-center items-center">
        <button className="bg-transparent text-lg gap-2  flex flex-col justify-center items-center text-white w-1/3">
          <img src={"/plus.png"} alt={"info"} width={18} height={14} />
          {t("my_list")}
        </button>
        <button className="bg-white text-lg gap-2  flex flex-row px-4 h-[40px] justify-center items-center text-black w-1/3 rounded-md">
          <img src={"/play.png"} alt={"info"} width={18} height={8} />
          {t("play")}
        </button>

        <button className="bg-transparent text-lg gap-2  flex flex-col justify-center items-center text-white w-1/3">
          <img src={"/info.png"} alt={"info"} width={20} height={14} />
          {t("more_info")}
        </button>
      </div>
    </div>
  );
};

export default MovieDetailMobileOverlay;
