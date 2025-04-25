"use client";

import React from "react";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedSecton = () => {
  const featuredCourses: Course[] = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8 md:mx-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center items-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <Image
                  src={course.image}
                  alt={course.title}
                  height={300}
                  width={300}
                  className="object-contain"
                />
                <h3 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </h3>
                <p className="text-end text-sm my-2">~ {course?.instructor}</p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
                  {course?.description}
                </p>
                    <div className="w-full mt-4 flex justify-center">
                <Link href={`/courses/${course.slug}`} className="bg-teal-100 text-black py-1 px-4 rounded-full font-semibold hover:shadow-blue-200 hover:shadow-2xl duration-300 transition-all">Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
        >
          <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
      >
        View All courses
      </HoverBorderGradient>
    </div>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedSecton;
