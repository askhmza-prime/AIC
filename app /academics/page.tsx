import PageHeading from "@/components/PageHeading";

export default function Academics() {
  return (
    <>
      <PageHeading title="Academics" subtitle="Strong foundation for all classes from 1–12" />

      <section className="section-padding">
        <div className="container-custom text-gray-700 space-y-8">
          <p>
            The school follows the Uttar Pradesh Board curriculum while integrating
            modern learning practices, structured routines, and discipline-focused teaching.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {["Primary (1–5)", "Junior (6–8)", "High School (9–10)", "Intermediate (11–12)"].map(
              (level) => (
                <div
                  key={level}
                  className="p-6 border rounded-xl bg-gray-50 hover:shadow-md"
                >
                  <h3 className="text-primary font-semibold text-lg">{level}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Dedicated teachers, structured syllabus, and disciplined learning.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
