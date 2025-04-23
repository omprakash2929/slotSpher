import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";

const CtaSection = () => {
  return (
    <div className="container px-4 md:px-6 mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
            Ready to simplify your scheduling?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-[540px]">
            Join millions of users who have transformed how they schedule
            meetings.
          </p>

          <div className="space-y-4 ">
            <div className="space-x-4">
              <Button
                size="lg"
                className="w-full cursor-pointer sm:w-auto h-12 px-8 bg-slate-900 hover:bg-slate-800 text-white"
              >
                Get started for free
              </Button>
              <Button
                size="lg"
                className="w-full cursor-pointer sm:w-auto h-12 px-8 bg-slate-900 hover:bg-slate-800 text-white"
              >
                Sing up with Google
              </Button>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-slate-700" />
                <span className="text-slate-700">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-slate-700" />
                <span className="text-slate-700">Free plan available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-slate-700" />
                <span className="text-slate-700">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:ml-auto">
          <Image
            src="/Schedule.png"
            alt="Calendar interface"
            width={500}
            height={400}
            className="rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
