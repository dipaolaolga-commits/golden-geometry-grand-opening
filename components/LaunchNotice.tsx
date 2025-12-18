
import React from 'react';

export const LaunchNotice: React.FC = () => {
  return (
    <section className="py-16 bg-[#fcfcfc] border-b border-gray-100">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-2">Save the Date</p>
        <h3 className="serif text-2xl md:text-3xl text-black">
          Der Online-Shop geht Anfang 2026 live.
        </h3>
        <p className="mt-4 text-sm text-gray-500 font-light tracking-wide uppercase">
          Die Waitlist wird zuerst informiert.
        </p>
      </div>
    </section>
  );
};
