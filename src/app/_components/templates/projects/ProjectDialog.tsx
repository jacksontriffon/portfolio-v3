import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { ProjectTestimonials } from "./Testimonials";

export function ProjectDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
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
            Explore projects I've done previously. Feel free to ask me any
            questions!
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <ProjectTestimonials />
        </div>
        <DialogFooter>
          <Button className="bg-antique-900">Ask Question</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
