/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

function Team() {
  return (
    <div className="lg:w-[69%] lg:p-32 ">
      <h2 className="lg:block hidden text-primaryGrey text-sm font-medium">
        TEAM
      </h2>
      <h1 className="text-3xl lg:text-7xl font-extrabold text-white leading-[1.3] font-berlin uppercase mt-5">
        The Cosmic Crew
      </h1>

      <p className="text-sm text-white leading-6 mt-4 font-poppins">
        Meet the main people behind Froggies{" "}
        <span className="relative h-10 inline-flex items-center w-56 -mr-12 ml-1">
          <img
            src="/images/textScribble2.png"
            className="absolute -top-1 -left-6 w-56 h-12 z-10"
            alt=""
          />
          <span className="z-10 text-black">working hard everyday to</span>
        </span>{" "}
        lower gravity and increase lift off.
      </p>

      <div className="grid grid-cols-3 w-auto h-[350px] lg:h-auto overflow-auto lg:overflow-visible lg:grid-cols-5 mt-10 gap-0 cursor-pointer">
        <div className="relative h-40 group ">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/crazyx.png"
              className="absolute top-0 h-20"
              alt=""
            />
            <div className="px-3">
              <h1 className="mt-24 font-bold text-white text-left uppercase">
                CRAZYX
              </h1>
              <p className="text-left text-sm text-secondaryGrey">
                Core Community
              </p>
            </div>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Even in space there are peculiar creatures, CrazyX is one of them.
            </p>
          </div>
        </div>

        <div className="relative h-40 group ">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/chopin.png"
              className="absolute top-0 h-24"
              alt=""
            />
            <div className="px-3">
              <h1 className="mt-24 font-bold text-white text-left uppercase w-20 whitespace-nowrap overflow-hidden text-ellipsis">
                Chopin
              </h1>
              <p className="text-left text-sm text-secondaryGrey">
                Core Marketing
              </p>
            </div>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Knows the demands of the interplanetary species.
            </p>
          </div>
        </div>
        <div className="relative h-40 group ">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/master.png"
              className="absolute top-0 right-0 h-32"
              alt=""
            />
            <div className="px-3">
              <h1 className="mt-24 font-bold text-white text-left uppercase w-20 whitespace-nowrap overflow-hidden text-ellipsis">
                Master..
              </h1>
              <p className="text-left text-sm text-secondaryGrey">Founder</p>
            </div>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              The Goat of the entire combination of Stellar Systems.
            </p>
          </div>
        </div>
        <div className="relative h-40 group ">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/marco.png"
              className="absolute top-0 right-0 h-32"
              alt=""
            />
            <div className="px-3">
              <h1 className="mt-24 font-bold text-white text-left uppercase w-20 whitespace-nowrap overflow-hidden text-ellipsis">
                marco
              </h1>
              <p className="text-left text-sm text-secondaryGrey">Designer</p>
            </div>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Earth is not the only place where assets need to be persuasive.
            </p>
          </div>
        </div>
        <div className="relative h-40 group ">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/jochen.png"
              className="absolute top-0 right-0 h-32"
              alt=""
            />
            <div className="px-3">
              <h1 className="mt-24 font-bold text-white text-left uppercase w-20 whitespace-nowrap overflow-hidden text-ellipsis">
                Orbital Engineer
              </h1>
              <p className="text-left text-sm text-secondaryGrey">Developer</p>
            </div>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Providing external space-life with equations and coding.
            </p>
          </div>
        </div>
        <div className="relative h-40 group ">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/msfro.png"
              className="absolute h-24 top-0 right-0"
              alt=""
            />
            <div className="px-3">
              <h1 className="mt-24 font-bold text-white text-left uppercase w-20 whitespace-nowrap overflow-hidden text-ellipsis">
                Froggies Dev
              </h1>
              <p className="text-left text-sm text-secondaryGrey">
                Developer/collaborations
              </p>
            </div>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Throwing out lines to different planets to secure collaborations.
            </p>
          </div>
        </div>
        <div className="relative h-40 group ">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/stephen.png"
              className="absolute h-24 top-0 left-0"
              alt=""
            />
            <div className="px-3">
              <h1 className="mt-24 font-bold text-white text-left uppercase w-20 whitespace-nowrap overflow-hidden text-ellipsis">
                Miss Froggies
              </h1>
              <p className="text-left text-sm text-secondaryGrey">Co-Founder</p>
            </div>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Also in cosmos there are strong women needed.
            </p>
          </div>
        </div>
        <div className="relative h-40 group ">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-20 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/paul.png"
              className="absolute h-24 top-0 left-0"
              alt=""
            />
            <div className="px-3">
              <h1 className="mt-24 font-bold text-white text-left uppercase w-20 whitespace-nowrap overflow-hidden text-ellipsis">
                Paul
              </h1>
              <p className="text-left text-sm text-secondaryGrey">Ambassador</p>
            </div>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Every community needs its guardian.
            </p>
          </div>
        </div>
        <div className="relative h-40 group ">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-20 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/lightns.png"
              className="absolute top-0 h-24 left-0"
              alt=""
            />
            <div className="px-3">
              <h1 className="mt-24 font-bold text-white text-left uppercase w-20 whitespace-nowrap overflow-hidden text-ellipsis">
                lightns.
              </h1>
              <p className="text-left text-sm text-secondaryGrey">Ambassador</p>
            </div>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Every guardian needs support to achieve the best.
            </p>
          </div>
        </div>
        <div className="relative h-40 group ">
          <div className="absolute inset-0 h-full group-hover:h-80 group-hover:bg-[#040a42] group-hover:z-10 w-full overflow-hidden border border-white/20 transition-all">
            <img
              src="/images/whale.png"
              className="absolute top-0 h-24 left-0"
              alt=""
            />
            <div className="px-3">
              <h1 className="mt-24 font-bold text-white text-left uppercase w-20 whitespace-nowrap overflow-hidden text-ellipsis">
                whale
              </h1>
              <p className="text-left text-sm text-secondaryGrey">Insider</p>
            </div>
            <p className="hidden group-hover:block text-[11px] leading-6 p-2 font-poppins">
              Investor and collaborator spreading the message.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-baseline mt-10 whitespace-nowrap font-poppins pb-16">
        <span>Bright Future for $FRGST .</span>
        <div className="w-20 h-[1px] bg-white"></div>
        <a className="hidden lg:inline-block" href="#3">
          <div className="flex items-center relative text-black w-96 ml-5">
            <div className="flex z-10 items-center font-poppins">
              <span>Dive into the unknown</span>
              <iconify-icon
                className="z-10"
                icon="ph:arrow-down"
              ></iconify-icon>
            </div>
            <div className="absolute -top-[2px] -left-4 w-auto">
              <img
                src="/images/textScribbleVector.png"
                className="w-56 h-6 z-0"
                alt=""
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Team;
