// TODO: Track drag event handler

import { batch, Signal, useSignal, useSignalEffect } from "@preact/signals";
import { useSignalRef } from "@preact/signals/utils";

import { createContext, type ComponentChildren } from "preact";
import { useEffect, useMemo } from "preact/hooks";

type State = "click" | "system";

type Context = {
  scrollSnap: () => void;
  ref: Signal<HTMLDivElement | null> & { current: HTMLDivElement | null };
  intervalId: Signal<number | null>;
  current: Signal<number>;
  count: number;
  state: Signal<State>;
  // slideDelay: number;
};

// @ts-expect-error expected one argument but got zero ? WHO DECIDED THAT 🌞
const Context = createContext<Context>();

export function CarouselProvider({
  count,
  slideDelay,
  children,
}: {
  count: number;
  slideDelay?: number;
  children: ComponentChildren;
}) {
  const ref = useSignalRef<HTMLDivElement | null>(null);
  const intervalId = useSignal<number | null>(null);
  const current = useSignal(0);
  const state = useSignal<State>("system");
  const direction = useSignal(1);
  const scrollSnap = () => {
    const container = ref.current;
    if (state.value === "system" || container === null) return;
    current.value = Math.floor(container.scrollLeft / container.clientWidth);
    state.value = "system";
  };

  useSignalEffect(() => {
    const container = ref.current;
    if (container === null) return;
    container.scrollTo({
      left: current.value * container.clientWidth,
      behavior: "smooth",
    });
    state.value = "system";
  });

  useEffect(() => {
    intervalId.value = window.setInterval(() => {
      const container = ref.current;
      if (container === null) return;
      batch(() => {
        const next = current.value + direction.value;
        if (next < 0 || next >= count) direction.value *= -1;
        current.value += direction.value;
        state.value = "system";
      });
    }, slideDelay ?? 3000);

    return () => {
      if (intervalId.value) clearInterval(intervalId.value);
    };
  }, [state.value]);

  const value = useMemo(
    () => ({
      count,
      intervalId,
      current,
      ref,
      scrollSnap,
      state,
    }),
    []
  );
  return (
    <Context.Provider value={value}>
      {children}
      {Context.Consumer({ children: JSON.stringify })}
    </Context.Provider>
  );
}
export function CarouselContent({ children }: { children: ComponentChildren }) {
  return (
    <Context.Consumer>
      {({ ref, scrollSnap }) => (
        <div
          ref={ref}
          // @ts-expect-error this event handler does not exist ? WHO DECIDED THAT 🌞
          onScrollSnapChange={scrollSnap}
          class="flex flex-nowrap overscroll-contain hide-scroll overflow-x-scroll snap-x snap-mandatory"
        >
          {children}
        </div>
      )}
    </Context.Consumer>
  );
}

export function CarouselItem({ children }: { children: ChildNode }) {
  return (
    <div class="snap-center w-full flex-shrink-0 flex justify-center">
      {children}
    </div>
  );
}

export function CarouselTriggers() {
  return (
    <div class="flex items-center gap-1  absolute bottom-2.5 left-1/2 -translate-1/2 z-1">
      <Context.Consumer>
        {({ count, intervalId, current, state }) =>
          Array(count)
            .fill(0)
            .map((_, i) => (
              <button
                onClick={() => {
                  if (intervalId.value) {
                    clearInterval(intervalId.value);
                    batch(() => {
                      current.value = i;
                      intervalId.value = null;
                      state.value = "click";
                    });
                  }
                }}
                class={`${current.value === i
                  ? "bg-accent-600 w-10"
                  : "bg-neutral-600 w-4"
                  } h-2 rounded-sm transition-width duration-300`}
                disabled={current.value === i}
                aria-label={`Afficher l'image ${i + 1}`}
              />
            ))
        }
      </Context.Consumer>
    </div>
  );
}

export function Carousel({
  children,
  count,
  class: className,
  ...other
}: {
  class?: string;
  count: number;
  children: ComponentChildren;
}) {
  return count > 1 ? (
    <div class={"relative h-fit my-auto " + className} {...other}>
      <CarouselProvider count={count}>
        <CarouselContent>{children}</CarouselContent>
        <CarouselTriggers />
      </CarouselProvider>
    </div>
  ) : (
    <div class={className} {...other}>
      {children}
    </div>
  )
}
