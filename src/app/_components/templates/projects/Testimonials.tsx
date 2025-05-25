import {
  AnimatedTestimonials,
  type Testimonial,
} from "~/components/ui/animated-testimonials";

export function ProjectTestimonials() {
  const testimonials: Testimonial[] = [
    {
      title: "3D Navigation Interface",
      subtitle:
        "Confidential WebGL tool with UI that moves as you explore terrain.",
      quote:
        "Led front-end dev on an internal prototype for real-time navigation over 3D topographical data. Owned the component library and UI logic—built floating panels, markers, and tooltips that stayed intuitive even as the user rotated and zoomed across the map.",
      name: "Australian Defence Force",
      designation: "Full-stack Engineer at R/GA",
      // src: "https://drive.google.com/file/d/158omb6EONdjniR4jBuys2resc0HT0Bik",
      src: "/adf/silly-but-relevant-ui-overlays.mov",
      type: "video",
      tags: ["WebGL", "TypeScript", "Next.js", "React"],
    },
    {
      title: "",
      subtitle: "",
      quote:
        "Drove Meiji’s e-commerce stack: Led a 4-dev squad to ship a Hydrogen-based VIP Shopify store a month early and spin up the R-1 probiotic subscription shop, both fully wired into SSO and enterprise analytics for seamless recurring revenue.",
      name: "Meiji Points",
      designation: "Buy Chocolate -> Points -> Free Chocolate!",
      src: "/meiji/Coupon.mp4",
      type: "video",
    },
    {
      title: "",
      subtitle: "",
      quote:
        "Drove Meiji’s e-commerce stack: Led a 4-dev squad to ship a Hydrogen-based VIP Shopify store a month early and spin up the R-1 probiotic subscription shop, both fully wired into SSO and enterprise analytics for seamless recurring revenue.",
      name: "Thrive By Five",
      designation: "Parental Education for 3rd world countries.",
      src: "/edtech/ThriveByFive - Square.mp4",
      type: "video",
    },
  ];
  return <AnimatedTestimonials autoplay={false} testimonials={testimonials} />;
}
