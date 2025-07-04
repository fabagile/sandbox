const characters = [
  { fname: 'Arnaud', lname: 'Mercure', age: 21, gender: "M", race: "Gestatrain", powers: ["Autoguérison", "Psychométrie",] },
  { fname: 'Kathia', lname: 'McBlood', age: 20, gender: "F", race: "Gestatrane", powers: ["Persuasion", "Guérison"] },
]

export default defineEventHandler(async (event) =>  characters )