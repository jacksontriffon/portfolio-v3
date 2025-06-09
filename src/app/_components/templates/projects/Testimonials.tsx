import posthog from "posthog-js";
import {
  AnimatedTestimonials,
  type Testimonial,
} from "~/components/ui/animated-testimonials";

const ProjectLink = ({ href, label }: { href: string; label?: string }) => (
  <a
    onClick={() => {
      posthog.capture("project-link-clicked", {
        link: { href },
      });
    }}
    className="text-antique-500 text-base underline lg:text-xl"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {label || href}
  </a>
);

export function ProjectTestimonials() {
  const testimonials: Testimonial[] = [
    {
      title: "3D Navigation Interface",
      subtitle:
        "Confidential WebGL tool with UI that moves as you explore terrain.",
      quote:
        `Key member in creating real-time navigation over 3D topographical data - I owned the component library and UI that stayed intuitive even as the user rotated and zoomed across the map - Massive shoutout to Rauri Rochford for his WebGL wizardry: `.trim(),
      name: "Australian Defence Force",
      designation: "Unused Prototype Footage",
      src: "/adf/silly-but-relevant-ui-overlays.mov",
      type: "video",
      tags: ["WebGL", "TypeScript", "Next.js", "React"],
      buttonOrLink: <ProjectLink href="https://raurir.com/" />,
    },
    {
      title: "Japan's Chocolate Loyalty Platform by Meiji",
      subtitle:
        "Buy chocs, earn points, unlock rewards - now live across Japan.",
      quote:
        "Joined an expert team to push the project through UAT to launch — 20k users hit it on day one of soft launch. Users scan Meiji products, earn points, and redeem coupons usable at any convenience store in Japan.",
      name: "Meiji Points",
      designation: "Buy Chocolate -> Points -> Free Chocolate!",
      src: "/meiji/Coupon.mp4",
      type: "video",
      tags: ["React", "TypeScript", "MongoDB", "Express", "AWS"],
      buttonOrLink: (
        <ProjectLink
          label="View Japanese Website"
          href="https://mpcc.meiji.co.jp/"
        />
      ),
    },
    {
      title: "Offline-First EdTech App",
      subtitle:
        "Parenting lessons for low-bandwidth regions - launched globally.",
      quote:
        "Built out a highly-performant, animated front-end for a mobile-first edtech platform used across multiple countries. Used GSAP, Next.js, and Tailwind to keep things fast and expressive — with localisation support baked in from day one. Collaborated with a global team to get it shipped and in parents’ hands.",
      name: "Thrive By Five",
      designation: "Parental Education to support 3rd world countries.",
      src: "/edtech/ThriveByFive - Square.mp4",
      type: "video",
      tags: ["iOS", "Android", "i18n", "Mobile-First", "Offline Support"],
      buttonOrLink: <ProjectLink href="https://www.thrivebyfive.com/" />,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
