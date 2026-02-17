const fst=document.getElementsByTagName("nav")[0].firstElementChild.style.color="red";
const lst=document.getElementsByTagName("nav")[0].lastElementChild.style.color="red";

const jokes = [
  "Why don’t programmers like nature? It has too many bugs.",
  "Why do Java developers wear glasses? Because they don’t C#.",
  "I told my computer I needed a break, and it said: No problem — I’ll go to sleep.",
  "Why was the JavaScript developer sad? Because he didn’t know how to null his feelings.",
  "Debugging: Being the detective in a crime movie where you are also the murderer.",
  "Why did the computer go to the doctor? Because it caught a virus.",
  "Why was the function feeling cold? Because it didn’t get called.",
  "I would tell you a UDP joke, but you might not get it.",
  "Why did the programmer quit his job? Because he didn’t get arrays.",
  "There are 10 types of people in the world: those who understand binary and those who don’t.",

  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "I changed my password to 'incorrect' so whenever I forget, it reminds me.",
  "Why was the computer tired when it got home? Because it had too many tabs open.",
  "A SQL query walks into a bar and asks: 'Can I join you?'",
  "Why did the developer go broke? Because he used up all his cache.",
  "Why was the JavaScript file so confident? Because it had no type issues.",
  "Why did the keyboard break up with the computer? It felt like it was being pressed too much.",
  "Why did the loop break up with the function? Too many cycles.",
  "Why do Python programmers wear glasses? Because they can’t C.",
  "Programmer’s wife says: 'Go to the store and buy milk.' He never comes back.",

  "Why do programmers hate stairs? Because they prefer elevators (arrays).",
  "Why was the website feeling down? It lost its domain.",
  "Why did the programmer bring a ladder? To reach the high-level language.",
  "Why was the smartphone cold? It left its Windows open.",
  "Why did the code fail? Because it didn’t pass the test.",
  "Why did the computer cross the road? To fetch data from the other side.",
  "Why do programmers love coffee? Because without it, the code doesn’t compile.",
  "Why did the array go to therapy? Too many elements.",
  "Why was the Boolean so confused? It couldn’t decide true or false.",
  "Why did the variable break up with the function? Too many arguments.",

  "Why don’t programmers like to swim? Too many floats.",
  "Why did the developer get locked out? He forgot his credentials.",
  "Why was the server always calm? It handled requests well.",
  "Why did the programmer go to art school? To learn how to draw pixels.",
  "Why did the browser blush? It saw the user’s cookies.",
  "Why did the API go to the gym? To get more REST.",
  "Why do programmers hate meetings? Because they’re all talk, no action.",
  "Why was the computer late? It had a hard drive.",
  "Why did the JavaScript developer wear a helmet? Because of callback hell.",
  "Why did the program crash? It couldn’t handle the exception.",

  "Why did the programmer bring a map? He kept getting lost in the codebase.",
  "Why do programmers prefer iOS? Because it has fewer open issues.",
  "Why was the Git repository sad? Too many conflicts.",
  "Why did the developer go to jail? He broke the law of abstraction.",
  "Why did the mouse get promoted? It clicked with management.",
  "Why did the computer sneeze? It caught a bug.",
  "Why did the function return early? It was tired.",
  "Why do programmers love recursion? Because they love recursion.",
  "Why did the developer stay up all night? To fix a bug that only happens in production.",
  "Why was the code so clean? It used good practices.",

  "Why did the developer bring snacks? For byte-sized breaks.",
  "Why did the computer go on a diet? Too many bytes.",
  "Why was the software feeling lonely? No users.",
  "Why did the developer get glasses? Too many screens.",
  "Why did the programmer hate weekends? Too many merge conflicts on Monday.",
  "Why did the CSS break up with HTML? It needed more space.",
  "Why was the console so honest? It always logged the truth.",
  "Why did the server break up with the client? Too many requests.",
  "Why do programmers like jokes? Because they love good loops.",
  "Why did the code feel insecure? Too many warnings.",

  "Why was the laptop stressed? Too many processes.",
  "Why did the computer take a nap? It needed to reboot.",
  "Why did the programmer get rich? He knew how to capitalize.",
  "Why was the algorithm jealous? It wasn’t optimized.",
  "Why did the developer bring a pencil? To draw a flowchart.",
  "Why was the database unhappy? Too many bad queries.",
  "Why did the programmer use two monitors? One wasn’t enough.",
  "Why did the code go to school? To get more structured.",
  "Why did the program feel confident? No syntax errors.",
  "Why did the developer smile? The code finally worked."
];

// Example usage:
console.log(jokes.length); // 100
const num=[Math.floor(Math.random() * jokes.length)];
console.log(num)
console.log(jokes[num]);
