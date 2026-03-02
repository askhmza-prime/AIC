export default function GalleryGrid({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
      {images.map((src, index) => (
        <div key={index} className="relative group cursor-pointer">
          <img
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-40 object-cover rounded-lg shadow-sm group-hover:opacity-90 transition"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition rounded-lg flex items-center justify-center text-white text-sm">
            View
          </div>
        </div>
      ))}
    </div>
  );
}
