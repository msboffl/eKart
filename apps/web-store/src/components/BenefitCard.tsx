export function BenefitCard({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex flex-col items-center rounded-xl bg-white/40 p-6 text-center backdrop-blur-sm">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-sm">
        {icon}
      </div>
      <p className="text-sm font-medium">{title}</p>
    </div>
  );
}
