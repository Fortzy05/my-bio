import React from "react";

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src="images/avatar-anisha.png" className="w-16 -mt-14" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
