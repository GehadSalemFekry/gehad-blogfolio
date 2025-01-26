type BorderCardProps = {
  children: React.ReactNode;
};
export function BorderCard({ children }: BorderCardProps) {
  return (
    <div className="rounded-[20px] min-h-[154px] h-full border border-border-primary p-6 flex flex-col justify-between">
      {children}
    </div>
  );
}
