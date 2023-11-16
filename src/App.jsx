import React from "react";
import Card from "./components/Card";
export default function App() {
  const userData = [
    {
      username: "Fozzie Bear",
      password: "Wokka-Wokka",
      email: "fozzie@themuppets.com",
      salary: 85_000,
    },
    {
      username: "Kermit",
      password: "theRainbowConnection",
      email: "kermit@themuppets.com",
      salary: 96_000,
    },
    {
      username: "Miss Piggy",
      password: "ohKermie",
      email: "misspiggy@themuppets.com",
      salary: 100_000,
    },
    {
      username: "Animal",
      password: "Ahhhhhhhhh!",
      email: "animal@themuppets.com",
      salary: 150_000,
    },
  ];

  return (
    <>
      <Card user={{ username: "Jordan", email: "myemail@email.email" }} />
    </>
  );
}
