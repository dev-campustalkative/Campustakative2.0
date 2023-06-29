"use client";

const EventsCard = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/--ct-products-1.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="h-[330px] rounded-[32px] overflow-hidden flex items-end"
    >
      <div className="bg-ct-secondary-1000 p-6 w-full flex justify-between items-center">
        <div className="px-4 py-2">
          <h3 className="text-lg font-sora font-bold text-ct-secondary-100 ">
            Thoughts on entering into tech
          </h3>
          <p className="text-base font-sora text-ct-secondary-100 ">
            23rd May, 2023
          </p>
        </div>
        <button className=" px-4 py-3 rounded-md bg-white text-base font-semibold ">
          Get ticket
        </button>
      </div>
    </div>
  );
};

export default EventsCard;
