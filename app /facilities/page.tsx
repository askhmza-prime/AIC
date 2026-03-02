import PageHeading from "@/components/PageHeading";
import FacilityCard from "@/components/FacilityCard";

const facilities = [
  { title: "Smart Classes", desc: "Audio-visual learning rooms." },
  { title: "Playground", desc: "Spacious ground for sports & activities." },
  { title: "Library", desc: "Books, references & quiet study spaces." },
  { title: "Computer Lab", desc: "Modern computer systems for students." },
  { title: "Science Labs", desc: "Separate Physics, Chemistry, Biology labs." },
  { title: "RO Water Supply", desc: "Clean and safe drinking water." },
];

export default function Facilities() {
  return (
    <>
      <PageHeading title="Facilities" />

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-3 gap-6">
          {facilities.map((f) => (
            <FacilityCard key={f.title} title={f.title} description={f.desc} />
          ))}
        </div>
      </section>
    </>
  );
}
