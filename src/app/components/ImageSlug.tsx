import Image from "next/image";

interface Props {
  width?: number;
}

const ImageSlug: React.FC<Props> = ({ width }) => {
  return (
    <div
      className="cursor-pointer group relative"
      style={{ width: `${width || 150}px`, height: `${width || 150}px` }}
    >
      <div
        className="bg-clip-content w-full h-full rounded-full  block animate-spin border-ct-primary-600 border border-b-ct-primary-100"
        style={{ animationDelay: `${Math.floor(Math.random() * 10) * 100}ms` }}
      ></div>
      <div className=" absolute top-0 ">
        <Image
          src="/assets/images/--ct-slug-ex-1.png"
          className="group-hover:scale-125 transition p-1"
          alt="image1"
          height={width || 150}
          width={width || 150}
        />
      </div>
    </div>
  );
};

export default ImageSlug;
