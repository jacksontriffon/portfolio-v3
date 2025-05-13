"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

import { cn } from "~/lib/utils";

const MOVEMENT_DAMPING = 1400;
const LOCATION_MELBOURNE: [number, number] = [-37.8136, 144.9631];

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {
    return;
  },
  scale: 1,
  devicePixelRatio: 2,
  phi: 0,
  theta: -0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 0.9686274509803922, 0.9215686274509803],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 0.9686274509803922, 0.9215686274509803],
  markers: [{ location: LOCATION_MELBOURNE, size: 0.1 }],
};

// Helper from Cobe docs to convert lat/lon → [phi, theta]
function locationToAngles(lat: number, lon: number): [number, number] {
  return [
    // φ:
    Math.PI - ((lon * Math.PI) / 180 - Math.PI / 2),
    // θ:
    (lat * Math.PI) / 180,
  ];
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  // Zoom-in on Mount
  const s = useMotionValue(config.scale ?? 1);
  const ss = useSpring(s, { mass: 1, damping: 30, stiffness: 100 });
  useEffect(() => {
    // start zoom-in to 2× after mount
    s.set(0.5);
  }, [s]);

  // Rotate to Melbourne
  const [initPhi, initTheta] = locationToAngles(
    LOCATION_MELBOURNE[0],
    LOCATION_MELBOURNE[1],
  );
  const melbRotation = useMotionValue(initPhi);
  const melbRotationSpring = useSpring(melbRotation, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) {
          const diff = initPhi - phi;
          phi += diff * 0.02; // move 2% of the gap per frame
        }
        state.phi = phi + rs.get();
        state.scale = ss.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
