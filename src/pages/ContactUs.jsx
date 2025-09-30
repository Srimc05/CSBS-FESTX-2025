import React from "react";
import ContactCard from "../components/ui/contact-card";

const ContactUs = () => {
  return (
    <div className="min-h-screen  py-12 px-6 justify-center">
      <section className="mb-10">
        <h2 className="text-4xl font-semibold text-gray-200 mt-8 mb-8  text-center font-pirata">
          Association Members
        </h2>
        <div className="grid gap-6 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 m-2 p-2">
          <ContactCard
            name="Arun S"
            role="ChairPerson"
            phone="+91 90031 28358"
          />
          <ContactCard
            name="Abinav P L"
            role="Vice Chairperson"
            phone="+91 96771 55148"
          />
          <ContactCard
            name="Harshavardhan M V"
            role="Secretary"
            phone="+91 63800 69629"
          />
          <ContactCard
            name="Rithika R"
            role="Treasurer"
            phone="+91 99400 43890"
          />

          <ContactCard
            name="Sanjay S P"
            role="Joint Secretary"
            phone="+91 94444 77574"
          />
          <ContactCard
            name="Vijay V"
            role="Joint Treasurer"
            phone="+91 86818 54861"
          />
        </div>
      </section>

      <div className="mb-12 px-2">
        <div className="mx-auto max-w-5xl w-full lg:w-[40vw]">
          <div className="relative rounded-2xl bg-black/40 backdrop-blur-sm overflow-hidden border border-yellow-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.181698741784!2d80.05483217631706!3d12.960222315125051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f596c7fb72c9%3A0x8e7a30529f9ef227!2sSri%20Sairam%20Engineering%20College!5e0!3m2!1sen!2sin!4v1758513431484!5m2!1sen!2sin"
              className="w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map to Sri Sairam Engineering College"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
