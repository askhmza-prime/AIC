export default function TeacherCard({
  name,
  subject,
  image,
}: {
  name: string;
  subject: string;
  image?: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition">
      <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden mb-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            [Teacher Image]
          </div>
        )}
      </div>

      <h3 className="text-lg font-bold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500">{subject}</p>
    </div>
  );
}
