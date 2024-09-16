"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  // @ts-ignore
  const head = ReactDOM.createRoot(document.head);

  head.render(<link rel="preload" as="image" href="test-image.com" />);

  return null;
}
