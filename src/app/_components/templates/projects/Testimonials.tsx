import {
  AnimatedTestimonials,
  type Testimonial,
} from "~/components/ui/animated-testimonials";

export function ProjectTestimonials() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Australian Defense Force Project",
      designation: "Full-stack Engineer at R/GA",
      // src: "https://drive.google.com/file/d/158omb6EONdjniR4jBuys2resc0HT0Bik",
      src: "/adf/silly-but-relevant-ui-overlays.mov",
      type: "video",
    },
    {
      quote:
        "Drove Meiji’s e-commerce stack: Led a 4-dev squad to ship a Hydrogen-based VIP Shopify store a month early and spin up the R-1 probiotic subscription shop, both fully wired into SSO and enterprise analytics for seamless recurring revenue.",
      name: "Meiji Coupons!",
      designation: "Senior Full-stack Engineer",
      src: "/meiji/Coupon.mp4",
      type: "video",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "image",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "image",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "image",
    },
  ];
  return <AnimatedTestimonials autoplay testimonials={testimonials} />;
}
