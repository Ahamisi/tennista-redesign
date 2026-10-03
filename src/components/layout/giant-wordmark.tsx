"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * The oversized TENNISTA lettering that closes the page. The paths are the
 * supplied wordmark, and the whole mark drifts slightly as it scrolls in.
 */
export function GiantWordmark({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["14%", "0%"]);

  return (
    <div ref={ref} className={cn("w-full overflow-hidden", className)}>
      <motion.svg
        viewBox="0 0 1394 378"
        className="block h-auto w-full"
        style={reduced ? undefined : { y }}
        role="img"
        aria-label="Tennista"
      >
        <path
          d="M37.5199 372.4V81.7604H-0.000117134V3.92036H158.48V81.7604H120.96V372.4H37.5199ZM166.381 372.4V3.92036H301.901V81.7604H249.821V160.72H292.381V213.92H249.821V294.56H305.261V372.4H166.381ZM315 372.4V3.92036H421.96L453.32 234.64H454.44L447.16 3.92036H516.6V372.4H418.04L377.72 116.48H376.6L384.44 372.4H315ZM535.806 372.4V3.92036H642.766L674.126 234.64H675.246L667.966 3.92036H737.406V372.4H638.846L598.526 116.48H597.406L605.246 372.4H535.806ZM758.292 372.4V3.92036H841.732V372.4H758.292ZM946.575 376.32C874.895 376.32 858.095 336.56 858.095 243.04H930.895C930.895 301.84 933.135 311.36 943.775 311.36C952.175 311.36 954.975 305.76 954.975 272.72C954.975 250.32 952.735 242.48 947.135 236.32C941.535 230.72 930.335 224.56 918.575 217.84C907.935 212.24 891.695 202.72 880.495 189.84C868.175 176.4 858.095 150.64 858.095 110.32C858.095 33.6004 890.015 0.000378609 946.575 0.000378609C1016.01 0.000378609 1032.25 30.8004 1032.25 136.08H962.815C962.815 72.2404 961.135 64.9604 953.295 64.9604C944.895 64.9604 941.535 72.2404 941.535 101.36C941.535 127.12 943.775 137.76 949.935 143.36C954.975 148.96 967.855 156.24 981.855 163.52C996.415 171.36 1011.53 181.44 1019.93 193.2C1032.25 210.56 1037.85 232.4 1037.85 266.56C1037.85 347.2 1011.53 376.32 946.575 376.32ZM1076.34 372.4V81.7604H1038.82V3.92036H1197.3V81.7604H1159.78V372.4H1076.34ZM1293.04 372.4L1289.68 306.32H1265.04L1261.68 372.4H1178.24L1228.08 3.92036H1343.44L1393.84 372.4H1293.04ZM1267.84 249.76H1286.88L1279.04 86.2404H1275.68L1267.84 249.76Z"
          fill="#E2E559"
        />
      </motion.svg>
    </div>
  );
}
