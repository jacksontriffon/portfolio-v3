import Image from "next/image";

export const Intro = () => {
  return (
    <section className="flex justify-center gap-6 sm:justify-normal sm:px-20 sm:pt-10 lg:px-40">
      <Image
        src={"/SJ's face.png"}
        alt="SJ's face, smiling casually."
        width={80}
        height={80}
        className="border-antique-900 outline-antique-900 hover:shadow-antique-100 rounded-full border-2 shadow-xl outline-1 outline-offset-2 transition-all duration-300 hover:-translate-y-1"
      />
      <div className="text-antique-900 flex max-w-72 flex-col gap-2">
        <h2 className="text-2xl">{"Hey! I'm SJ 👋"}</h2>
        <p className="text-sm">
          “This portfolio is <b>baked with hidden goodies,</b> best of luck
          finding them all!”
        </p>
      </div>
    </section>
  );
};
