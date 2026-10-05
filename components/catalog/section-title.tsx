type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500">
        Меню пиццерии
      </p>

      <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}