
import { useState, useRef, useEffect } from "react";
import { IoCopyOutline, IoSend } from "react-icons/io5";


// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";
import { FaUser } from "react-icons/fa";

import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import { BackgroundGradientAnimation } from "./GradientBg";
import { social } from "@/data";
// import Link from "next/link";
import { FlipWords } from "./FlipWords";

// import GridGlobe from "./GridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Javascript",,"HTML","NodeJS"];
  const rightLists = ["AI","ML","NextJS"];
  const middleLists = ["Vercel","MYSQL","MongoDB"];
  const words = ["BackEnd Developer", "ML Engineer", "FrontEnd Developer", "Tech Enthusiast"];

  const [copied, setCopied] = useState(false);
  const [input, setInput] = useState("");
  // const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  // const [loading, setLoading] = useState(false);

  // const messageContainerRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(input);
    // if (input.trim()) {
    //   // Simulate a response from the chatbot
    //   const userMessage = { user: input, bot: "" };
    //   setMessages((prev) => [...prev, userMessage]);
    //   setInput(""); // Clear input
    //   setLoading(true);
    // console.log(input)
    //   try {
    //     // Make API call to your chatbot backend
    //     const response = await fetch('https://rizzup-bot.onrender.com/chat', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ question: input }), // Adjust payload as needed
    //     });

    //     // Check if response is OK
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }

    //     const data = await response.json();
    //     console.log(data)
        
    //     // Assuming the response contains a "reply" field
    //     const botMessage = { user: userMessage.user, bot: data.answer }; // Adjust based on your API response structure
    //     // setMessages((prev) => [...prev, botMessage]);
    //     setMessages((prev) => {
    //       const newMessages = prev.slice(); // Copy existing messages
    //       newMessages[newMessages.length - 1] = botMessage; // Replace the last message (loading message)
    //       return newMessages;
    //     });

    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //     const botMessage = { user: "", bot: "Sorry, there was an error." };
    //     setMessages((prev) => [...prev, botMessage]);
    //     setInput("");
    //   } finally {
    //     setLoading(false);
    //   }
    // }
  };

  // useEffect(() => {
  //   if (messageContainerRef.current) {
  //     messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
  //   }
  // }, [messages]);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const handleClick = (link: any) => {
    window.open(link, "_blank");
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
            titleClassName
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 1 && (
            <div className="w-fit items-center md:gap-3 gap-3 grid lg:grid-cols-3">
              <FlipWords words={words} className="text-5xl font-semibold" /> <br />
            </div>
          )}
          {/* for the github 3d globe */}
          {/* {id === 2 && <GridGlobe />} */}

          {id === 2 && (
            <div className="w-fit items-center md:gap-3 gap-3 grid lg:grid-cols-3">
              {social.map((info) => (
                <MagicButton
                key={info.id}
                title={info.name}
                icon={info.img}
                position="risky"
                handleClick={() => handleClick(info.link)}
                otherClasses="!bg-[#161A31]"
              />
              ))}
            </div>
          )}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {middleLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
            </div>
          )}

          {id === 5 && (
            <div className="flex flex-col h-full">
                <div className="flex-1 overflow-y-auto rounded-md h-[310px] mt-2 mb-3 " style={{ maxHeight: '310px' }}>
                {/* {messages.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-gray-500">
                        <span className="text-center">You can ask anything about me</span>
                    </div>
                ) : (
                messages.map((msg, index) => (
                    <div key={index} className="mb-2">
                        <div className="text-white font-semibold flex items-center">
                        <span className="mr-2"><FaUser/></span>
                        <span>{ msg.user}</span> 
                        </div>
                        <div className="text-gray-300 pl-[24px]">
                        {msg.bot || (loading && index === messages.length - 1 ? "Loading..." : null)}
                        </div>
                    </div>
                    ))
                )} */}
                <div className="flex items-center justify-center h-full text-gray-500">
                        <span className="text-center">You can ask anything about me</span>
                </div>
                </div>
                <form onSubmit={handleSubmit} className="flex">
                    <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask something..."
                    className="flex-1 p-2 rounded-l-md bg-transparent "
                    />
                    <button
                    type="submit"
                    className=" text-white px-4 rounded-r-md"
                    >
                    <IoSend />
                    </button>
                </form>
                </div>
            )}

          {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};