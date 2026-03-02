import PageHeading from "@/components/PageHeading";

export default function About() {
  return (
    <>
      <PageHeading
        title="About Us"
        subtitle="Established in 1937 — A heritage institution shaping disciplined, educated, and responsible young men."
      />

      <section className="section-padding">
        <div className="container-custom space-y-8 text-gray-700">

          <p className="leading-relaxed">
            Ansar Inter College, Moradabad, is one of the oldest and most respected
            boys’ institutions under the Uttar Pradesh Board. With a legacy of more
            than eight decades, the institution continues its mission of providing
            high-quality education rooted in discipline, character, and academic
            excellence.
          </p>

          <p className="leading-relaxed">
            From its establishment in 1937, the college has consistently adapted to
            the academic and cultural needs of generations. Our priority is to build
            capable, confident students ready to excel in competitive examinations,
            higher education, and future careers.
          </p>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-3">Our Core Pillars</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Discipline in behavior and academics</li>
              <li>• Strong academic foundation for all classes</li>
              <li>• Moral and ethical character development</li>
              <li>• Experienced and qualified faculty team</li>
              <li>• Continuous improvement in facilities and teaching methods</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
