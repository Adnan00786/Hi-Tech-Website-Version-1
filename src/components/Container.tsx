"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import About from '../assets/about_image.jpg';
import Canon_IR_ADV from '../assets/Canon IR ADV 4225.jpg';
import { BgBeams } from "./BgBeams";



export function Container() {
  return (
    <TracingBeam className="px-8">
      <BgBeams/>
    </TracingBeam>
    // <BgBeams>
    //   <TracingBeam className=""/>
    // </BgBeams>
  );
}
