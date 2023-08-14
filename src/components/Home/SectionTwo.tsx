import React from "react";
import ServiceCard from "../ServiceCard";

const SectionTwo = () => {
  return (
    <div className="section-two mt-9">
      <div className="section-two-heading ml-[20%]  ">
        <h1 className="text-black">WHAT WE DO FOR YOU</h1>
        <h1 className="text-purple-500 text-4xl font-semibold w-[37rem] overflow-hidden">
          Far far away, behind the word mountains far from the countries
        </h1>
      </div>

      <div className="service-card-list mt-8 gap-4 justify-center h-48 p-3 flex w-full">
        <ServiceCard
          title="Design"
          description="A small river named  flows by their place and supplies it with the necessary."
        />
        <ServiceCard
          title="Design"
          description="A small river named  flows by their place and supplies it with the necessary."
        />
        <ServiceCard
          title="Design"
          description="A small river named  flows by their place and supplies it with the necessary."
        />
        <ServiceCard
          title="Design"
          description="A small river named  flows by their place and supplies it with the necessary."
        />
        <ServiceCard
          title="Design"
          description="A small river named  flows by their place and supplies it with the necessary."
        />
      </div>
    </div>
  );
};

export default SectionTwo;
