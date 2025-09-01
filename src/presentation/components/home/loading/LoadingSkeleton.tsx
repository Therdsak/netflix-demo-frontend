import { FeaturedMovieSkeleton } from "./FeaturedMovieSkeleton";
import { HeaderSkeleton } from "./HeaderSkeleton";
import { MovieListSkeleton } from "./MovieListSkeleton";

interface LoadingSkeletonProps {
  isMobile: boolean;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ isMobile }) => {
  return (
    <div className="relative h-screen bg-background w-full">
      <div className="animate-pulse space-y-6">
        {/* BG Image */}
        <div className="w-full h-screen bg-gray-800" />

        <HeaderSkeleton />

        <div className="fixed top-0 left-0 px-8 right-0 h-screen xl:h-[80%] bg-background z-50 py-4 flex flex-col items-start justify-center mt-8 lg:mt-0">
          <FeaturedMovieSkeleton isMobile={isMobile} />
        </div>

        <MovieListSkeleton isMobile={isMobile} />
      </div>
    </div>
  );
};
