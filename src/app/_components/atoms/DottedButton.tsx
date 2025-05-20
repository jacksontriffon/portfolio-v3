import type { ComponentProps } from "react";
import { cn } from "~/lib/utils";

const DottedButton = ({ className, ...props }: ComponentProps<"button">) => {
  return (
    <button
      className={cn(
        className,
        "border-antique-700 text-antique-900 cursor-pointer rounded-2xl border-2 border-dashed px-6 py-3 text-sm font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none",
      )}
      {...props}
    />
  );
};

export default DottedButton;
