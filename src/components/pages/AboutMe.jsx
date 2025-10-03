import { motion } from "framer-motion";
import Cover from "../../assets/cover.png";

export default function AboutMe() {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 via-indigo-900 to-sky-800 py-24 px-6 overflow-hidden min-h-screen flex items-center">
      {/* Decorative glow background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute w-72 h-72 bg-pink-500/40 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-sky-500/40 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left - Portrait Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-start relative"
        >
          <div className="relative w-full max-w-sm">
            {/* Gradient glow */}
            <div
              className="absolute -inset-0 rounded-2xl blur-3xl opacity-50"
              style={{ background: "linear-gradient(135deg,#ff7a7a, #7c5cff)" }}
            />
            {/* Glass card */}
            <div className="relative z-10 p-6 rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-xl flex flex-col items-center">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={Cover}
                  alt="Borath portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-6 text-2xl font-bold bg-gradient-to-r from-amber-300 to-pink-400 bg-clip-text text-transparent tracking-wide">
                Srun Borath
              </h3>
              <p className="text-sm text-white/70 mt-2">
                Web Developer & Mobile Developer
              </p>

              {/* Floating badges */}
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {["Responsible", "Honest", "Orderly"].map((trait, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-white ring-1 ring-white/20"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right - About Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white relative inline-block">
            About Me
            <motion.span
              className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-rose-400 to-amber-300 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </h2>

          <p className="text-lg text-white/90 leading-relaxed">
            Hello! I'm{" "}
            <span className="font-semibold text-amber-300">Borath</span>. I'm 22
            years old and currently a Year 4 student at the{" "}
            <span className="font-semibold text-sky-300">
              University of Puthisastra
            </span>, Faculty of ICT (Information Communication and Technology).
          </p>

          <p className="text-lg text-white/90 leading-relaxed">
            I’m passionate about{" "}
            <span className="font-semibold text-amber-300">programming</span>,
            especially{" "}
            <span className="font-semibold text-sky-300">web development</span>.
            I consider myself{" "}
            <span className="font-semibold text-emerald-300">
              responsible, orderly, and honest
            </span>{" "}
            — always striving to learn and build meaningful projects.
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block px-7 py-3 rounded-2xl bg-gradient-to-r from-amber-300 to-pink-400 text-slate-900 font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
