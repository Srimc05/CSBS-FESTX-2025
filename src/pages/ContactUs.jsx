import React from "react";
import ContactCard from "../components/ui/contact-card";

const ContactUs = () => {
  return (
    <div className="my-24 py-12 px-6 ">
      <h2 className="text-4xl font-semibold text-gray-200 mb-12 text-center font-fell-english">
        Association Members
      </h2>
      <div className="max-w-7xl mx-auto pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
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
      </div>
    </div>
  );
};

export default ContactUs;
