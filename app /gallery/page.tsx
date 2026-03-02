import PageHeading from "@/components/PageHeading";
import GalleryGrid from "@/components/GalleryGrid";

export default function Gallery() {
  return (
    <>
      <PageHeading title="Gallery" subtitle="School campus & events" />
      <section className="section-padding">
        <div className="container-custom">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
