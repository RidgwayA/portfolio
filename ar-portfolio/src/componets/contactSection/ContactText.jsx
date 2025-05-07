import { motion } from "framer-motion";

function ContactText() {
  return (
    <div>
      <h2 className="text-orange text-3xl mb-4 relative inline-block">
        Let’s{" "}
        <motion.span
          initial={{ width: 0 }}
          animate={{
            width: [
              "0%", // Start
              "100%", // Expand fully
              "100%", // Hold at full expansion
              "0%", // Retract
              "0%", // Hold at full retraction
            ],
          }}
          transition={{
            duration: 6, // Full cycle time
            repeat: Infinity, // Loop forever
            repeatType: "loop",
            ease: "easeInOut",
            times: [
              0, // Start
              0.3, // Full expansion
              0.5, // Pause at full expansion
              0.8, // Full retraction
              1, // Pause at full retraction
            ],
          }}
          className="absolute bottom-0 left-0 h-[3px] bg-cyan"
        />
        Work Together
      </h2>
      <p className="text-white text-lg">
        I’m excited to bring my skills and experience to your team. Reach out,{" "}
        <br />
        and let’s discuss how I can help achieve your goals.
      </p>
    </div>
  );
}

export default ContactText;
