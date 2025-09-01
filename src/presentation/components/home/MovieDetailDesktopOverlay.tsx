/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Movie } from "@/domain/models/Movie";
// import { useAppStore } from "@/presentation/store/useAppStore";
import { useTranslation } from "react-i18next";

interface MovieDetailDesktopOverlayProps {
  selectedMovie?: Movie | null;
  selectedIndex?: number;
  onPlay?: () => void;
  onMoreInfo?: () => void;
}

const MovieDetailDesktopOverlay: React.FC<MovieDetailDesktopOverlayProps> = ({
  selectedMovie,
  selectedIndex,
  onPlay,
  onMoreInfo,
}) => {
  if (!selectedMovie) return null;
  const { t, i18n } = useTranslation("common");
  return (
    <div className="fixed top-0 left-0 px-8 right-0 h-screen xl:h-[80%] bg-background z-50 py-4 flex flex-col items-start justify-center">
      <div className="w-2/3 xl:w-1/4">
        <div className="flex flex-row gap-4 items-center justify-start">
          <img
            src={"/netflix-series.png"}
            alt={"netflix-series"}
            width={200}
            height={36}
          />
        </div>
        <h2 className="text-white text-3xl mt-4 text-left line-clamp-2 h-18">
          {selectedMovie.title}
        </h2>

        <div className="flex flex-row gap-2 items-center justify-start my-4">
          {selectedIndex !== undefined &&
            selectedIndex >= 0 &&
            selectedIndex < 10 && (
              <div className="flex flex-row gap-2 items-center justify-start my-4">
                <img
                  src={"/top10-banner.png"}
                  alt={"top10-banner"}
                  width={24}
                  height={24}
                />
                <span className="text-white text-xl text-left">
                  #{selectedIndex + 1}  {t("topic_today")}
                </span>
              </div>
            )}
        </div>
        <p className="text-white mt-2 text-left line-clamp-2">
          {selectedMovie.overview}
        </p>
      </div>

      <div className="w-2/3 lg:w-full">
        <div className="flex flex-row gap-4 mt-6">
          <button
            onClick={onPlay}
            className="bg-white text-black text-xl font-semibold px-10 py-4 cursor-pointer rounded hover:bg-gray-300 transition flex flex-row gap-2 items-center"
          >
            <img src={"/play.png"} alt={"play"} width={24} height={12} />
            {t("play")}
          </button>
          <button
            onClick={onMoreInfo}
            className="bg-gray-600 text-xl bg-opacity-60 text-white cursor-pointer font-semibold px-6 py-4 rounded hover:bg-opacity-80 transition flex flex-row gap-2 items-center"
          >
            <img src={"/info.png"} alt={"info"} width={32} height={18} />
            {t("more_info")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailDesktopOverlay;
