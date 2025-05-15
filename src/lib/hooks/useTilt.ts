import { type RefObject, useState } from "react";
import { useInterval, useIsomorphicLayoutEffect } from "usehooks-ts";

export interface TiltHookOptions {
  horizontalDegrees?: number;
  verticalDegrees?: number;
}

const animationTime = 150;

function useTilt(
  elementRef: RefObject<HTMLElement>,
  options?: TiltHookOptions,
) {
  // Set default values
  const horizontalDegrees = options?.horizontalDegrees ?? 8;
  const verticalDegrees = options?.verticalDegrees ?? 5;

  const [pitch, setPitch] = useState(0);
  const [yaw, setYaw] = useState(0);
  const [firstHover, setFirstHover] = useState(true);

  // These two variables store the X and Y position of the
  //   cursor inside the element, in the range -1.0 to 1.0
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  // Custom timer that can move forward and backward in time based on the 'direction' variable,
  //   which is set to true on hover and false on leave. We can't use transition: 0.15s because
  //   that breaks the smooth perspective shift when we're moving the cursor around on the card
  const [priorElapsed, setPriorElapsed] = useState(0);
  const [timerStart, setTimerStart] = useState(0);
  const [direction, setDirection] = useState(false);

  const getElapsed = () => {
    const rawElapsed = Date.now() - timerStart;

    // Move forwards or backwards in time based on the value of direction
    return direction
      ? Math.min(animationTime, priorElapsed + rawElapsed)
      : Math.max(0, priorElapsed - rawElapsed);
  };

  useIsomorphicLayoutEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();

      // // Map from px to the range -1.0 to 1.0
      const cursorX =
        ((e.clientX - rect.left) / elementRef.current.offsetWidth - 0.5) * 2.0;
      const cursorY =
        ((e.clientY - rect.top) / elementRef.current.offsetHeight - 0.5) * 2.0;

      setCursor({ x: cursorX, y: cursorY });

      // Kickstart the useInterval function
      setFirstHover(true);
    };

    elementRef.current?.addEventListener("mousemove", handler);

    return () => {
      elementRef.current?.removeEventListener("mousemove", handler);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    const handler = () => {
      setPriorElapsed(getElapsed());
      setTimerStart(Date.now());
      setDirection(true);
    };

    elementRef.current?.addEventListener("mouseenter", handler);

    return () => {
      elementRef.current?.removeEventListener("mouseenter", handler);
    };
  }, [direction]);

  useIsomorphicLayoutEffect(() => {
    const handler = () => {
      setPriorElapsed(getElapsed());
      setTimerStart(Date.now());
      setDirection(false);
    };

    elementRef.current?.addEventListener("mouseleave", handler);

    return () => {
      elementRef.current?.removeEventListener("mouseleave", handler);
    };
  }, [direction]);

  // Update every frame so the card continues to animate when the mouse stops and/or leaves the element
  useInterval(
    () => {
      const elapsed = getElapsed();
      setYaw((cursor.x * -horizontalDegrees * elapsed) / animationTime);
      setPitch((cursor.y * verticalDegrees * elapsed) / animationTime);
      setFirstHover(false);
    },
    // Stop updating when it animates back to the default pitch yaw when we stop hovering
    !firstHover && pitch === 0 && yaw == 0 ? null : 16,
  );

  return { pitch, yaw };
}

export default useTilt;
