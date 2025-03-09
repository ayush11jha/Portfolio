"use client";

// import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-Card"

const RecentProjects = () => {
  return (
    <section id="projects" className="pb-10 pt-10">
      <h1 className="heading text-5xl flex items-center justify-center">
        A small selection of{" "}
        <span className="text-purple pl-3">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-[7rem] mt-[2rem]">
        {projects.map((item) => (
          <div
            className="h-auto flex items-center justify-center sm:w-96 w-[60vw]"
            key={item.id}
          >
            <CardContainer className="inter-var">
                <CardBody className=" relative group/card border-white/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                    {item.title}
                    </CardItem>
                    <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                    {item.des}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={item.img}
                        height="300"
                        width="400"
                        className="h-fit w-fit object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                    </CardItem>
                    <div className="flex justify-between items-center mt-6">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={item.href}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        Try now →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl"
                    >
                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                            {item.iconLists.map((icon, index) => (
                                <div
                                key={index}
                                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                style={{
                                    transform: `translateX(-${5 * index + 2}px)`,
                                }}
                                >
                                <img src={icon} alt="icon5" className="p-2" />
                                </div>
                            ))}
                            </div>
                        </div>
                    </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;