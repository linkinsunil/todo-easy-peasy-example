import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

const base = {
  minHeight: "100vh",
  margin: 0,
  padding: 10,
  position: "flex"
};

const themes = {
  dark: { color: "#FFF", backgroundColor: "#000" },
  light: { color: "#000", backgroundColor: "#FFF" }
};

export default function Theme({ children }) {
  const toggle = useStoreActions(actions => actions.preferences.toggle);
  const name = useStoreState(state => state.preferences.theme);
  const theme = themes[name];
  return (
    <div style={{ fontFamily: "Arial", ...base, ...theme }}>
      {children}
      <button
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          toggle();
        }}
        style={{ position: "absolute", top: 10, right: 10 }}
      >
        Toggle Theme
      </button>
    </div>
  );
}
