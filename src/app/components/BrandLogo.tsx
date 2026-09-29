import Image from "next/image";

export default function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo/sulochana-farms-logo.png"
      alt="Sulochana Farms"
      width={1036}
      height={829}
      priority
      className={`brandLogoImage ${className}`.trim()}
    />
  );
}
