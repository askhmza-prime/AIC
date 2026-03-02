import PageHeading from "@/components/PageHeading";
import TeacherCard from "@/components/TeacherCard";

const teachers = [
  { name: "Principal Sir", subject: "School Administration" },
  { name: "XYZ Sir", subject: "Mathematics" },
  { name: "ABC Sir", subject: "Science" },
];

export default function Faculty() {
  return (
    <>
      <PageHeading title="Faculty" subtitle="Our experienced teaching staff" />

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-3 gap-6">
          {teachers.map((t) => (
            <TeacherCard key={t.name} name={t.name} subject={t.subject} />
          ))}
        </div>
      </section>
    </>
  );
}
