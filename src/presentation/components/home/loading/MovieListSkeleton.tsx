interface MovieListSkeletonProps {
  isMobile: boolean;
}

export const MovieListSkeleton: React.FC<MovieListSkeletonProps> = ({
  isMobile,
}) => {
  const skeletonCount = 12;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background z-50 py-4 flex flex-col px-0 lg:px-4">
      <div className="h-6 w-48 bg-gray-700 rounded mb-4 mx-4" />
      <div className="flex overflow-x-auto px-4 gap-4">
        {Array.from({ length: skeletonCount }).map((_, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 rounded-md bg-gray-700 ${
              isMobile ? "w-[160px] aspect-[2/3]" : "w-[320px] aspect-video"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
