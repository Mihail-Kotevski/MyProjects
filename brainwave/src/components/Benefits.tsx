import { benefits } from "../constants";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import Heading from "./Heading";
import React from "react";
import { GradientLight } from "./design/Benefits";

const Benefits = () => {
  return (
    <Section
      id="features"
      className=""
      crosses={undefined}
      crossesOffset=""
      customPaddings={undefined}
    >
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((el) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[21rem]"
              style={{
                backgroundImage: `url(${el.backgroundUrl})`,
              }}
              key={el.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{el.title}</h5>
                <p className="body-2 mb-6 text-n-3">{el.text}</p>
                <div className="flex items-center mt-auto">
                  <img src={el.iconUrl} alt={el.title} width={48} height={48} />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              {el.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{
                  clipPath: "url(#benefits)",
                }}
              >
                <div className="absolute inset-0  opacity-0 transition-opacity hover:opacity-10">
                  {el.imageUrl && (
                    <img
                      src={el.imageUrl}
                      alt={el.title}
                      width={380}
                      height={362}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
