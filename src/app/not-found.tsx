import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="px-2 w-full">
      <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl">Not Found</h1>

        <Image
          className="m-0 rounded-xl "
          src={"/images/not-found.png"}
          width={300}
          height={300}
          sizes="300px"
          alt="Page not found"
          priority={true}
          title="Page not found image"
        />
      </div>
    </div>
  );
}
