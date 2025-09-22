import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const About = () => {
  return (
    <section className="w-full bg-black text-white px-6 md:px-16 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto space-y-20">
        
     
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h1 className="ttext-2xl md:text-3xl font-bold text-yellow-400 text-center">
              The Spirit of FESTX
            </h1>
            <p className="text-neutral-300 leading-relaxed text-center">
              FESTX is an annual symposium hosted by the Department of{" "}
              <span className="text-yellow-400 font-semibold">Computer Science and Business Systems</span> 
              at Sri Sairam Engineering College to promote entrepreneurship and 
              explore the latest tech trends. <br /><br />
              FESTX&apos;24 featured{" "}
              <span className="text-yellow-400 font-semibold">
                8 unique inter-collegiate events
              </span>{" "}
              designed to challenge creativity, problem-solving, and innovation 
              — making it an unforgettable experience.
            </p>
          </motion.div>

          
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <motion.img
              src="https://ik.imagekit.io/sri05/cs.png?updatedAt=1726986002813"
              alt="FESTX Symposium"
              className="object-contain w-full h-64 md:h-80"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>
        </div>

      
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg order-2 md:order-1"
          >
            <motion.img
              src="https://ik.imagekit.io/sri05/image%202.png?updatedAt=1726983892249"
              alt="Sri Sairam Engineering College"
              className="object-contain w-full h-64 md:h-80"
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 order-1 md:order-2"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 text-center">
              About Our Institution
            </h2>
            <p className="text-neutral-300 leading-relaxed text-center">
              Sri Sairam Engineering College, Chennai, was established in 1995
              by{" "}
              <span className="text-yellow-400 font-semibold">
                MJF.Ln.Leo Muthu
              </span>
              , Chairman of Sapthagiri Educational Trust. Affiliated to Anna
              University and approved by AICTE, the institution is known for its
              vision-driven leadership, academic excellence, and commitment to
              nurturing talent. It stands among the premier institutions in the
              country for engineering education.
            </p>
          </motion.div>
        </div>


        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">
            Department of CSBS
          </h2>
          <p className="text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            The Department of Computer Science and Business Systems (CSBS) is a
            steadily growing discipline that blends{" "}
            <span className="text-yellow-400 font-semibold">
              software development
            </span>{" "}
            skills with{" "}
            <span className="text-yellow-400 font-semibold">
              managerial expertise
            </span>
            . This unique program nurtures{" "}
            <span className="text-yellow-400 font-semibold">
              business engineers
            </span>{" "}
            equipped for futuristic, holistic development. Graduates emerge with
            the ability to innovate, consult, and lead in diverse career paths
            across technology and business domains.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
