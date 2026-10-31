function greet(name) {
  const hour = new Date().getHours();
  let timeOfDay = "evening";

  if (hour < 12) timeOfDay = "morning";
  else if (hour < 18) timeOfDay = "afternoon";

  return `Good ${timeOfDay}, ${name}!`;
}

console.log(greet("Apadana"));