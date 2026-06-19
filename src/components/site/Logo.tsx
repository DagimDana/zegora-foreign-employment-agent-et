import logo from "@/assets/zegora-logo.png.asset.json";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src="/logo.jpg"
      alt="ZEGORA Foreign Employment Agency"
      className={className}
      width={600}
      height={1800}
      draggable={false}
    />
  );
}
