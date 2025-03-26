import NextImage from "next/image";

export const MdxImage = ({
  alt,
  src,
  width,
  height,
}: {
  alt: string;
  src: string;
  width: number;
  height: number;
}) => {
  return (
    <div
      role="img"
      aria-label={alt}
      className="relative"
      style={{ width: "100%", height: "auto" }}
    >
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        objectFit="cover"
        className="pb-4"
      />
    </div>
  );
};
