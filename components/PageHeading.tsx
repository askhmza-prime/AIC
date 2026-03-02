export default function PageHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
