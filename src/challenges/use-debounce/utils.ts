const users = [
  "Ava Martinez",
  "Liam Chen",
  "Maya Patel",
  "Jackson O'Neill",
  "Sofia Ahmed",
  "Ezra Thompson",
  "Isabella Russo",
  "Noah Kim",
  "Layla Robinson",
  "Mateo Garcia",
  "Chloe Wang",
  "Elijah Brooks",
  "Aria Khan",
  "Oliver Lee",
  "Aaliyah Rivera",
  "Kai Nakamura",
  "Zoe Nguyen",
  "Lucas Johnson",
  "Amara Singh",
  "Leo Cohen",
  "Harper Silva",
  "Benjamin Park",
  "Mila Romero",
  "Asher Davis",
  "Nyla Zhang",
  "Julian Torres",
  "Sienna Murphy",
  "Adrian Vega",
  "Freya Bennett",
  "Micah Ali",
  "Camila Costa",
  "Theo Laurent",
  "Nia Daniels",
  "Ronan Ford",
  "Elina Novak",
  "Zion Clarke",
  "Priya Sharma",
  "Felix Andersson",
  "Yara Gómez",
  "Kian Wallace",
  "Talia Brown",
  "Idris Moore",
  "Aurora Delgado",
  "Nico Bellamy",
  "Dahlia Grant",
  "Jalen Wright",
  "Mira Sato",
  "River Allen",
  "Simone Blake",
  "Owen Fraser",
];

export function fetchFakeUsers(search: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        users.filter((user) =>
          user.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      );
    }, 1000);
  });
}
