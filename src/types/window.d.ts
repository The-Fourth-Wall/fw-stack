export {};

declare global {
  interface Window {
    swup: import("swup").default;
    lenis: import("lenis").default;
  }
}
