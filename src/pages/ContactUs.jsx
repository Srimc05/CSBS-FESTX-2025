import React from "react";
import ContactCard from "../components/ui/contact-card";

const ContactUs = () => {
  return (
    <div
      className="pt-24 min-h-screen px-6 pb-0"
      style={{
        backgroundImage: "url(/bg2.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Association Members */}
      <h2 className="text-4xl font-semibold text-gray-200 mt-6 mb-8 text-center font-fell-english">
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

      {/* Magic Members */}
      <h2 className="text-4xl font-semibold text-gray-200 mt-20 mb-8 text-center font-fell-english">
        Magic Members
      </h2>
      <div className="max-w-7xl mx-auto pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          <ContactCard
            name="Sripragadhishwaran S"
            role="Mastermind"
            phone="+91 93447 06051"
          />
          <ContactCard
            name="Karthik R"
            role="Advocate"
            phone="+91 99524 00229"
          />
          <ContactCard name="Akshaya S" role="Guide" phone="+91 87787 27215" />
          <ContactCard
            name="Harshithaa T"
            role="Influencer"
            phone="+91 93848 48479"
          />
          <ContactCard
            name="Pratibha V"
            role="Communicator"
            phone="+91 78710 00274"
          />
        </div>
      </div>

      {/* Magic Members */}
      <h2 className="text-4xl font-semibold text-gray-200 mt-20 mb-8 text-center font-fell-english">
        Staff Members
      </h2>
      <div className="max-w-7xl mx-auto pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          <ContactCard
            name="Dr. Naresh Kumar A"
            role="Head Of The Department"
            phone=""
          />
          <ContactCard
            name="Mrs. Saraswathy S"
            role="Assistant Professor"
            phone=""
          />
          <ContactCard
            name="Mrs. ArunaDevi R"
            role="Assistant Professor"
            phone=""
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
