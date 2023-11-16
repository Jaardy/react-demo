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

const totalAmount = userData
  .map((user) => {
    user.salary = (user.salary * 110) / 100;
    return user;
  })
  .filter((user) => user.salary > 100_000)
  .reduce((total, { salary }) => (total += ((salary - 100_000) * 20) / 100), 0);

console.log(userData);
console.log(totalAmount);
