import { Movie } from "@/domain/models/Movie";
import { motion, AnimatePresence } from "framer-motion";

interface FullscreenMovieOverlayProps {
  movie?: Movie | null;
  onClose?: () => void;
  isMobile?: boolean;
}

const FullscreenMovieOverlay: React.FC<FullscreenMovieOverlayProps> = ({
  movie,
  onClose,
  isMobile,
}) => {
  return (
    <AnimatePresence>
      {movie && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 bg-black bg-opacity-40 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
        >
          <div className="relative w-full overflow-hidden">
            <motion.img
              src={movie.backdrop_path}
              alt={movie.title}
              className={`w-full object-cover ${
                isMobile ? "h-[60vh]" : "h-screen"
              }`}
              initial={{ opacity: 0, scale: isMobile ? 1.05 : 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: isMobile ? 1.02 : 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullscreenMovieOverlay;
