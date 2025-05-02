import React from "react";
import { Element } from "react-scroll";

const Downloads = () => {
  return (
    <section>
      <Element
        name="downloads"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
              <div className="mb-10">
                <img src="/images/xora.svg" alt="xoralogo" width={160} height={55} />
              </div>
              <p className="body-1 mb-10 max-w-md">Check it out for FREE on your favorite operating system</p>
              <ul className="flex flex-wrap items-center gap-6">
                {}
              </ul>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Downloads;
