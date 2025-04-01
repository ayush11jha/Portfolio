// import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Timeline } from "@/components/ui/Timeline";

export function Education() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-white-100  text-xs md:text-3xl font-normal mb-8">
            {/* Enrolled for Master&apos;s Programme in Artificial Intelligence. */}
            M.Tech in Artificial Intelligence.

          </p>
          <p className="text-white-800  text-xs md:text-2xl font-normal mb-8">
          Netaji Subhas University of Technology (NSUT), New Delhi
            </p>
            <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700  text-xs md:text-3xl">
            <IoIosArrowForward /> Secured 8.0 CGPA in M.Tech.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-white-100  text-xs md:text-3xl font-normal mb-8">
          B.Tech in Computer Science and Engineering.
          </p>
          <p className="text-white-800  text-xs md:text-2xl font-normal mb-8">
            Chandigarh University (CU),Mohali.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700  text-xs md:text-3xl">
            <IoIosArrowForward /> Secured 7.43 CGPA in B.Tech.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "School Log",
      content: (
        <div>
          <p className="text-white-100  text-xs md:text-3xl font-normal mb-4">
            Completed class-10th.
          </p>
          <p className="text-white-800  text-xs md:text-2xl font-normal mb-4">
           Ambika Bhawani Public School,Muzaffarpur.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700  text-xs md:text-3xl">
            <IoIosArrowForward /> Scored 95% in 10th
            </div>
          </div>
          <p className="text-white-100  text-xs md:text-3xl font-normal mb-4">
            Completed class-12th.
          </p>
          
          <p className="text-white-800  text-xs md:text-2xl font-normal mb-4">
            St. Joseph Senior Secondaary School,Muzaffarpur
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700  text-xs md:text-3xl">
            <IoIosArrowForward /> Scored 83% in 12th
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full" id="education">
      <Timeline data={data} />
    </div>
  );
}
