import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        alt="CT logo"
        className=" w-auto md:block cursor-pointer"
        height={100}
        width={100}
        src={"/assets/images/logo.png"}
      />
    </div>
  );
};

export default Logo;
