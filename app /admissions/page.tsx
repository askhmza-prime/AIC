import PageHeading from "@/components/PageHeading";

export default function Admissions() {
  return (
    <>
      <PageHeading
        title="Admissions"
        subtitle="Admission process for 2026–27 is now open."
      />

      <section className="section-padding">
        <div className="container-custom text-gray-700 space-y-10">
          <p>
            Parents and students are welcome to apply for classes 1 to 12. The
            admission process is transparent and based on merit and availability.
          </p>

          <div className="space-y-6">
            <h3 className="font-bold text-primary text-xl">Required Documents</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Birth Certificate</li>
              <li>• Previous School Marksheet</li>
              <li>• Transfer Certificate</li>
              <li>• Passport-size photographs</li>
            </ul>
          </div>

          <a
            href="/contact"
            className="btn-primary inline-block w-fit"
          >
            Contact for Admissions
          </a>
        </div>
      </section>
    </>
  );
}
