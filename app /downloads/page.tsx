import PageHeading from "@/components/PageHeading";

export default function Downloads() {
  return (
    <>
      <PageHeading title="Downloads" subtitle="Syllabus, forms & circulars" />

      <section className="section-padding">
        <div className="container-custom space-y-4 text-gray-700">
          <ul className="space-y-3">
            <li>• Syllabus (PDF)</li>
            <li>• Admission Form (PDF)</li>
            <li>• Calendar 2026–27</li>
            <li>• Holiday List (PDF)</li>
          </ul>
        </div>
      </section>
    </>
  );
}
