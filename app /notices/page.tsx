import PageHeading from "@/components/PageHeading";
import NoticeCard from "@/components/NoticeCard";

const notices = [
  { title: "Annual Function 2026", desc: "Event scheduled next month.", date: "Feb 2026" },
  { title: "Holiday Notice", desc: "School closed on Holi festival.", date: "March 2026" },
];

export default function Notices() {
  return (
    <>
      <PageHeading title="Notices" />

      <section className="section-padding">
        <div className="container-custom space-y-4">
          {notices.map((n) => (
            <NoticeCard key={n.title} {...n} />
          ))}
        </div>
      </section>
    </>
  );
}
