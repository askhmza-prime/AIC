import PageHeading from "@/components/PageHeading";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <PageHeading title="Contact Us" />

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-12">
          
          <div className="space-y-4 text-gray-700">
            <p className="text-lg font-semibold">Ansar Inter College</p>
            <p>Indira Chowk, Prince Road Area, Moradabad — 244001</p>
            <p>Phone: +91 98765 43210</p>
            <p>Email: info@ansarcollege.edu.in</p>

            <p className="text-sm text-gray-500">
              Office Timings: 9:00 AM – 2:00 PM
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
