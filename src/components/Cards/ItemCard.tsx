"use client";

import venue from "$assets/display/venue.jpg";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import Tilt from "react-parallax-tilt";

interface ItemCardProps {
  link: string;
  rating: number;
  location: string;
}

export function ItemCard({ link = "#", location = "Mirpur", rating }: Partial<ItemCardProps>) {
  return (
    <Tilt
      className="block w-full overflow-hidden rounded-md bg-white shadow-sm [transform-style:preserve-3d]"
      perspective={500}
      glareEnable={true}
      tiltMaxAngleX={3}
      tiltMaxAngleY={3}
      glarePosition="all"
      glareMaxOpacity={0.45}
    >
      <Link href={link}>
        <Image className="max-h-64 w-full rounded-md object-cover" src={venue} alt="avatar" />
        <div className="flex flex-col gap-2 p-4 [transform:translateZ(60px)]">
          <p className="text-2xl font-bold text-gray-800 " role="link">
            {location}
          </p>
          <div className="flex items-center gap-1 text-xl">
            <CiLocationOn className="text-xl" />
            <span className="text-sm text-gray-700">20 Packages</span>
          </div>
        </div>
      </Link>
    </Tilt>
  );
}
