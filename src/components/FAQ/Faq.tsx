"use client";

import FaqImage from "$assets/faq.jpg";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "shadcn/components/ui/accordion";

const questions = [
  {
    question: "What type of travel packages does Kismattravel offer?",
    answer:
      "Kismattravel offers a wide range of travel packages to destinations around the world, including customized tours, group tours, luxury travel, adventure travel, and more. Our travel specialists work with you to create an itinerary that meets your specific needs and preferences.",
  },
  {
    question: "How do I book a trip with Kismattravel?",
    answer:
      "Kismattravel offers a wide range of travel packages to destinations around the world, including customized tours, group tours, luxury travel, adventure travel, and more. Our travel specialists work with you to create an itinerary that meets your specific needs and preferences.",
  },
  {
    question: "What is the payment process for Kismattravel?",
    answer:
      "Kismattravel offers a wide range of travel packages to destinations around the world, including customized tours, group tours, luxury travel, adventure travel, and more. Our travel specialists work with you to create an itinerary that meets your specific needs and preferences.",
  },
  {
    question: "How to cancel my booking in Kismattravel?",
    answer:
      "Kismattravel offers a wide range of travel packages to destinations around the world, including customized tours, group tours, luxury travel, adventure travel, and more. Our travel specialists work with you to create an itinerary that meets your specific needs and preferences.",
  },
];

export function Faq() {
  return (
    <section className="fade-edge relative isolate overflow-hidden">
      <Image
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        src={FaqImage}
        alt="FAQ Image"
      />
      <div className="container flex flex-col gap-8 py-16 md:flex-row">
        <div className="flex-1 sm:space-y-2 md:order-1">
          <h2 className="text-2xl font-bold sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <div className="text-slate-600">What our clients usually asked about our services and tours.</div>
        </div>
        <div className="flex-[3]">
          <Accordion type="single" collapsible className="space-y-4 ">
            {questions.map((value) => (
              <AccordionItem value={value.question} className="rounded-md bg-white px-4" key={value.question}>
                <AccordionTrigger className="text-left text-base sm:text-lg">{value.question}</AccordionTrigger>
                <AccordionContent className="sm:text-base">{value.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
