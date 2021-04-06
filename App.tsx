import React from "react";
import { StatusBar } from "expo-status-bar";

import { MyApp } from "./src/MyApp";

export default function App() {
  return (
    <>
      <MyApp />
      <StatusBar style="auto" />
    </>
  );
}
