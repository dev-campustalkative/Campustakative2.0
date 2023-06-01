import Image from "next/image";

interface Props {
  width?: number;
}

const ImageSlug: React.FC<Props> = ({ width }) => {
  return (
    <div className="cursor-pointer group">
      <div className=" border-[#D08E29] border-2 rounded-full p-2 w-max border-b-[#fff7ec] animate-spin duration-1000 transition">
        <div className=" animate-spin-reverse">
          <Image
            src="/assets/images/--ct-slug-ex-1.png"
            className="group-hover:scale-125 transition"
            alt="image1"
            height={width || 150}
            width={width || 150}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlug;
