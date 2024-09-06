import { render, screen } from "@testing-library/react";
import App from "./App";
import MainApp from "./App";

import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";

test("renders without crashing", () => {
  const container = document.createElement("div");
  const root = createRoot(container);
  act(() => {
    root.render(<MainApp tab="home" />);
    root.unmount();
  });
});
