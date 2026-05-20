"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera • Google",
    year: "2024",
    image:
      "https://media.licdn.com/dms/image/v2/D4D2DAQGcrM2jlIYUTg/profile-treasury-document-images_800/B4DZqM22Y7IgAc-/1/1763299783279?e=1779926400&v=beta&t=gXF7F_HV6eVfcSeMgvQp1G6ztSdIB1vQJoPWkGILGOE",
    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/6YMTYRMU57S4",
  },

  {
    title: "Process Data from Dirty to Clean",
    issuer: "Google",
    year: "2024",
    image:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~MU2WUK3M65DF/CERTIFICATE_LANDING_PAGE~MU2WUK3M65DF.jpeg",
    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/6YMTYRMU57S4",
  },

  {
    title: "Analyze Data to Answer Questions",
    issuer: "Google",
    year: "2024",
    image:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~45K9ZN0XP6NL/CERTIFICATE_LANDING_PAGE~45K9ZN0XP6NL.jpeg",
    verifyLink:
      "hhttps://www.coursera.org/account/accomplishments/verify/6YMTYRMU57S4",
  },

  {
    title: "Data Analysis with R Programming",
    issuer: "Google",
    year: "2024",
    image:
      "https://media.licdn.com/dms/image/v2/D4D2DAQEh-ttPI11qqQ/profile-treasury-image-shrink_480_480/B4DZ5BBV3lKAAY-/0/1779207331604?e=1779814800&v=beta&t=aGGAgp_5oXwizVXmewLbhUmr-r-8-8th6QclFYMmuV8",
    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/6YMTYRMU57S4",
  },

  {
    title: "Industrial Training – Production Department",
    issuer: "Eicher TMTL",
    year: "2024",
    image:
      "https://media.licdn.com/dms/image/v2/D4D2DAQGYG0UnT81VPA/profile-treasury-image-shrink_1280_1280/B4DZ12OXWrHMAQ-/0/1775804971120?e=1779814800&v=beta&t=MbpfRBQgV7kDEyT5cKoR35KhPYNFL5pcf-B2kMXa8kw",
    verifyLink:
      "https://www.linkedin.com/in/pritam-nagar/overlay/Certifications/1983479267/treasury/?profileId=ACoAAD-kIz4BkfyBCFF5LG1WPzHZBZ7Mdz2zDbs",
  },

  {
    title: "Volunteer – BAJA SAEINDIA 2022",
    issuer: "SAEINDIA",
    year: "2022",
    image:
      "https://media.licdn.com/dms/image/v2/D4D2DAQFKa3EGoFYMvg/profile-treasury-image-shrink_1280_1280/B4DZ12N.IPKUAQ-/0/1775804868047?e=1779814800&v=beta&t=Qw991TSQO9I-uUxQzSBXAQFjHIqDnarH6gzqjq-rDPo",
    verifyLink:
      "Yhttps://www.linkedin.com/in/pritam-nagar/overlay/Certifications/1983376317/treasury/?profileId=ACoAAD-kIz4BkfyBCFF5LG1WPzHZBZ7Mdz2zDbs",
  },
];

export default function Certifications() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
            Achievements
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold">
            Certifications &
            <span className="text-cyan-400"> Learning</span>
          </h2>

          <p className="mt-6 text-zinc-400 max-w-3xl mx-auto">
            Continuous learning across analytics, business intelligence,
            machine learning, and modern technologies.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl hover:-translate-y-3 transition duration-500"
            >

              {/* Image */}
              <div className="relative overflow-hidden h-52">

                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              </div>

              {/* Content */}
              <div className="p-8">

                <div className="flex items-center justify-between gap-4 mb-4">

                  <div>
                    <h3 className="text-xl font-bold leading-snug">
                      {cert.title}
                    </h3>

                    <p className="text-cyan-400 text-sm mt-2">
                      {cert.issuer}
                    </p>
                  </div>

                  <span className="px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-sm">
                    {cert.year}
                  </span>

                </div>

                {/* Button */}
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
                >
                  <ExternalLink size={18} />
                  Verify
                </a>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}