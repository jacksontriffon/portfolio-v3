import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { ProjectTestimonials } from "./Testimonials";
import type { ComponentProps } from "react";

export function ProjectDialog({
  buttonProps,
}: {
  buttonProps?: ComponentProps<"button">;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          {...buttonProps}
          variant="outline"
          className="text-antique-900 w-fit cursor-pointer"
        >
          View Projects
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-antique-900">
            Snippet of Projects
          </DialogTitle>
          <DialogDescription className="text-antique-500">
            Explore projects I&apos;ve done previously. Feel free to ask me any
            questions!
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <ProjectTestimonials />
        </div>
      </DialogContent>
    </Dialog>
  );
}
