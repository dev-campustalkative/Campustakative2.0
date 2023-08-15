'use client';

import Image from 'next/image';
import EventsCard from '@/components/events-card';
import Button from '@/components/button';

const UpcomingEvents = () => {
  return (
    <div className="relative">
      <div className="absolute w-full mx-auto h-full shadow-2xl z-50 bg-background/80 backdrop-blur-sm p-20 flex items-center justify-center">
        Coming Soon
      </div>

      <div className="py-12 md:py-8">
        <h2 className="text-ct-grey-1000 text-3xl font-bold font-sora my-2">
          Upcoming events
        </h2>
        <p className="text-ct-grey-600 text-lg my-4 max-w-[788px]">
          At Campustalkative, we understand the importance of building and
          maintaining a strong community. That&lsquo;s why we are dedicated to
          providing the best resources and op
        </p>
        d
      </div>
      <div>
        <div className="flex items-end gap-5 mxl:ml-[-8%] mxl:px-12 mxl:mb-[-65%] mmd:mt-[15%] xl:hidden ">
          <Image
            src="/assets/icons/--ct-events-curve.svg"
            alt="events"
            className=""
            height={900}
            width={900}
          />
          <div className=" mmd:mb-[-1%]">
            <Button>See more events</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-6 mxl:mb-[15%]">
          <EventsCard />
          <EventsCard />
          <EventsCard />
          <EventsCard />
        </div>
        <div className="my-12 mxl:hidden w-max mmd:w-full mmd:flex mmd:items-end mmd:justify-end">
          <div>
            <Button>See more events</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
