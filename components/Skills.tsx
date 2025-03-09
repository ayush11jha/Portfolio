import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Skills = () => {
  return (
    <div id="skills" className="pt-10 pb-20 w-full">
      <h1 className="heading text-5xl flex items-center justify-center">
        Tech{" "} <span className="text-purple pl-3">Stack</span>
      </h1>

      <div className="w-fit mt-[4rem] grid lg:grid-cols-10 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Skills;