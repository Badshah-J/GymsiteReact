import React, { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";

function Faq() {
  const [Faqstatus, setFaqstatus] = useState(false);
  const [accIndex, setAccIndex] = useState(undefined);
  const faqs = [
    "What are your membership options?",
    "What are your opening hours?",
    "Do you offer personal training services?",
    "What kind of classes do you offer?",
    "Can I try out the gym before committing to a membership?",
  ];
  const showAcc = (index) => {
    setAccIndex(index);
    setFaqstatus(!Faqstatus);
  };
  const faqItems = faqs.map((v, i) => {
    return (
      <div key={i} className="max-w-[1024px] h-full mx-auto p-1 cursor-pointer">
        <div
          onClick={() => showAcc(i)}
          key={i}
          className="h-[60px] w-full border-2 border-white text-xl text-white p-2 rounded-md flex items-center justify-between"
        >
          <p>{v}</p>
          <button>
            <CiSquarePlus className="text-2xl font-bold text-white" />
          </button>
        </div>
        <div
          className={`w-full ${
            Faqstatus && accIndex === i ? "block h-full" : "hidden h-0"
          }   border-2 border-white text-xl text-white p-2 rounded-md flex items-center transition-all transition ease-in-out delay-150`}
        >
          <h1>Ans</h1>
        </div>
      </div>
    );
  });
  return (
    <section className="w-[100svw] bg-[#0e0c22] p-4">
      <h1 className="text-6xl text-jaggyellow font-bold heading text-center">
        FaQs
      </h1>
      {faqItems}
    </section>
  );
}

export default Faq;
