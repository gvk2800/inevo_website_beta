import React from 'react';

const bullets = [
  '100% Cloud-native (AWS/Azure)',
  'Rapid deployment with configurable modules',
  'Plug-and-play APIs & digital frontends (WhatsApp, Slack, portals, email)',
  'Continuous updates without downtime',
];

const Launch = () => {
  return (
    <section aria-labelledby="launch-heading" className="bg-[#F3F9F9]">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div
          className="relative overflow-hidden rounded-3xl text-white shadow-md"
          style={{
            backgroundImage:
              'linear-gradient(90deg, #083E86 0%, #1692BB 80%)',
          }}
        >
          {/* subtle grid overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '36px 36px, 36px 36px',
              backgroundPosition: '0 0, 0 0',
            }}
          />

          <div className="relative grid grid-cols-1 gap-8 p-6 sm:p-10 md:p-12 lg:p-14 md:grid-cols-2">
            <div>
              <h2
                id="launch-heading"
                className="text-2xl font-extrabold leading-snug sm:text-3xl md:text-4xl"
              >
                Launch in Weeks,
                <br />
                Not Months
              </h2>
              <p className="mt-4 text-sm font-medium text-white/90 sm:text-base">
                Rapid deployment. Lasting advantage
              </p>
            </div>

            <ul className="space-y-5">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#0B3E86] shadow-sm">
                    {/* check mark */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm leading-6 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Launch;


