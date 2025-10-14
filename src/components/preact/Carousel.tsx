import {
  batch,
  Signal,
  useComputed,
  useSignal,
  useSignalEffect,
  type ReadonlySignal,
} from "@preact/signals";
import { useSignalRef } from "@preact/signals/utils";
import {
  createContext,
  type ComponentChildren,
  type FunctionComponent,
} from "preact";
import { useEffect, useMemo } from "preact/hooks";

type Provider = {
  scrollSnap: () => void;
  ref: Signal<HTMLDivElement | null> & { current: HTMLDivElement | null };
  intervalId: Signal<number | null>;
  current: Signal<number>;
  count: ReadonlySignal<number>;
  // slideDelay: number;
};
const Context = createContext<Provider | null>(null);

const ContextConsumer: FunctionComponent<{
  children: (value: Provider) => ComponentChildren;
}> = ({ children }) => (
  <Context.Consumer>
    {(value) => (value ? children(value) : null)}
  </Context.Consumer>
);
export function CarouselProvider({
  slideDelay,
  children,
}: {
  slideDelay: number;
  children: ComponentChildren;
}) {
  const ref = useSignalRef<HTMLDivElement | null>(null);
  const intervalId = useSignal<number | null>(null);
  const current = useSignal(0);
  const count = useComputed(() =>
    ref.current
      ? Math.floor(ref.current.scrollWidth / ref.current.clientWidth)
      : 0
  );
  const state = useSignal<"user" | "system">("system");
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
        if (0 > current.value || current.value >= count.value)
          direction.value *= -1;
        current.value += direction.value;
      });
    }, slideDelay ?? 3000);

    return () => {
      if (intervalId.value) clearInterval(intervalId.value);
    };
  }, [ref.current, current.value]);

  const value = useMemo(
    () => ({
      count,
      intervalId,
      current,
      ref,
      scrollSnap,
    }),
    []
  );
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function CarouselContent({
  children,
}: {
  children: ComponentChildren;
  slideDelay: number;
}) {
  return (
    <ContextConsumer>
      {({ ref, scrollSnap }) => (
        <div
          ref={ref}
          // @ts-expect-error this event handler does not exist ? WHO DECIDED THAT 🌞
          onScrollSnapChange={scrollSnap}
          class="flex flex-nowrap overscroll-contain overflow-x-scroll snap-x snap-mandatory"
        >
          {children}
        </div>
      )}
    </ContextConsumer>
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
  <div class="flex items-center gap-1  absolute bottom-2.5 left-1/2 z-1">
    <ContextConsumer>
      {({ count, intervalId, current }) =>
        Array(count.value)
          .fill(0)
          .map((_, i) => (
            <button
              onClick={() => {
                if (intervalId.value) {
                  clearInterval(intervalId.value);
                  batch(() => {
                    current.value = i;
                    intervalId.value = null;
                  });
                }
              }}
              class={`${
                current.value === i
                  ? "bg-accent-600 w-10"
                  : "bg-neutral-600 w-4"
              } h-1.5 rounded-sm transition-width duration-300`}
              disabled={current.value === i}
              aria-label={`Afficher l'image ${i + 1}`}
            />
          ))
      }
    </ContextConsumer>
  </div>;
}
