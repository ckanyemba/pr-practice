function greet(name) {
  const hour = new Date().getHours();
  let timeOfDay = "evening";

  if (hour < 12) timeOfDay = "morning";
  else if (hour < 18) timeOfDay = "afternoon";

  return `Good ${timeOfDay}, ${name}!`;
}

function reply(message) {
  if (message.toLowerCase().includes("hello")) {
    return "Hello! How can I assist you today?";
    } else if (message.toLowerCase().includes("goodbye")) {
    return "Goodbye! Have a great day!";
    } else {
    return "I'm here to help! What can I do for you?";
  }
}

console.log(greet("Apadana"));
console.log(reply("Hello, how are you?"));