import Image from "next/image";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Image src="/404_image.png" alt="Page Not Found" width={300} height={300} className="mb-6" />
      <h1 className="text-3xl font-semibold text-gray-800 uppercase mx-6">The page you are looking for doesn&apos;t exist.</h1>
    </div>
  );
}