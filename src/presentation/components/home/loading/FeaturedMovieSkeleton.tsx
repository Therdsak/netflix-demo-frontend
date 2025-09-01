interface FeaturedMovieSkeletonProps {
  isMobile: boolean;
}

export const FeaturedMovieSkeleton: React.FC<FeaturedMovieSkeletonProps> = ({
  isMobile,
}) => {
  if (isMobile) {
    return (
      <div className="animate-pulse flex flex-col items-center justify-end px-4 w-full">
        <div className="w-[200px] h-[36px] bg-gray-700 rounded" />
        <div className="mt-4 h-12 w-3/4 bg-gray-700 rounded" />
        <div className="mt-2 h-8 w-full bg-gray-700 rounded" />
        <div className="flex flex-row items-center justify-center gap-12 my-6 w-full">
          <div className="flex-1 flex flex-col items-center gap-2">
            <div className="w-[36px] h-[36px] bg-gray-700 rounded-full" />
            <div className="h-8 w-full bg-gray-700 rounded" />
          </div>
          <div className="flex-1">
            <div className="h-[50px] w-[120px] bg-gray-600 rounded-md" />
          </div>
          <div className="flex-1 flex flex-col items-center gap-2">
            <div className="w-[36px] h-[36px] bg-gray-700 rounded-full" />
            <div className="h-8 w-full bg-gray-700 rounded" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-2/3 xl:w-1/4 space-y-4">
      <div className="h-[36px] w-[200px] bg-gray-800 rounded" />
      <div className="h-8 w-3/4 bg-gray-700 rounded" />
      <div className="h-6 w-1/2 bg-gray-700 rounded" />
      <div className="h-6 w-full mt-8 bg-gray-700 rounded" />
      <div className="h-6 w-full bg-gray-700 rounded" />
    </div>
  );
};
