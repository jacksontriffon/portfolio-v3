import { CanvasRevealEffect } from "~/components/ui/canvas-reveal-effect";
// import { SwipeCarousel } from "./Carousel";
import { ImageCarousel } from "../../molecules/Carousel/Carousel";
import { SwipeCarousel } from "./Carousel";

export const ResumeCarousel = () => {
  return (
    <div>
      {/* <div className="block sm:hidden">
        <SwipeCarousel
          images={[
            "/resume/resume-page-1.svg",
            "/resume/resume-page-2.svg",
            "/resume/resume-page-3.svg",
          ]}
        />
      </div> */}
      {/* <div className="hidden sm:block"> */}
      <ImageCarousel
        images={[
          { src: "/resume/resume-page-1.svg", alt: "Resume Page 1" },
          { src: "/resume/resume-page-2.svg", alt: "Resume Page 2" },
          { src: "/resume/resume-page-3.svg", alt: "Resume Page 3" },
        ]}
      />
      {/* </div> */}
      {/* <div className="flex">
        <CanvasRevealEffect containerClassName="w-80" />
      </div> */}
    </div>
  );
};
