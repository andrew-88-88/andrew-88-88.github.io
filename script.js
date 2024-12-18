const greatbooks = [
    "Things Fall Apart by Chinua Achebe (1958, Nigeria, English)",
    "Fairy Tales by Hans Christian Andersen (1835–37, Denmark, Danish)",
    "The Divine Comedy by Dante Alighieri (1308–21, Italy, Italian)",
    "Epic of Gilgamesh by Unknown (18th–17th century BCE, Sumer/Akkadian Empire, Akkadian)",
    "Book of Job by Unknown (7th–4th century BCE, Achaemenid Empire, Biblical Hebrew)",
    "One Thousand and One Nights by Various (700–1500, Iraq/Iran/India/Syria/Egypt/Tajikistan, Arabic)",
    "Njál's Saga by Unknown, possibly Sæmundr fróði (13th century, Iceland, Old Norse)",
    "Pride and Prejudice by Jane Austen (1813, United Kingdom, English)",
    "Le Père Goriot by Honoré de Balzac (1835, France, French)",
    "Trilogy: Molloy, Malone Dies, The Unnamable by Samuel Beckett (1951–53, Republic of Ireland, French/English)",
    "The Decameron by Giovanni Boccaccio (1349–53, Italy, Italian)",
    "Ficciones by Jorge Luis Borges (1944–86, Argentina, Spanish)",
    "Wuthering Heights by Emily Brontë (1847, United Kingdom, English)",
    "The Stranger by Albert Camus (1942, Algeria, French Empire, French)",
    "Poems by Paul Celan (1952, Romania/USSR/France, German)",
    "Journey to the End of the Night by Louis-Ferdinand Céline (1932, France, French)",
    "Don Quixote by Miguel de Cervantes (1605–1615, Spain, Spanish)",
    "The Canterbury Tales by Geoffrey Chaucer (1380s–1400, England, English)",
    "Stories by Anton Chekhov (1886, Russia, Russian)",
    "Nostromo by Joseph Conrad (1904, United Kingdom, English)",
    "Great Expectations by Charles Dickens (1861, United Kingdom, English)",
    "Jacques the Fatalist by Denis Diderot (1796, France, French)",
    "Berlin Alexanderplatz by Alfred Döblin (1929, Germany, German)",
    "Crime and Punishment by Fyodor Dostoevsky (1866, Russia, Russian)",
    "The Idiot by Fyodor Dostoevsky (1869, Russia, Russian)",
    "Demons by Fyodor Dostoevsky (1872, Russia, Russian)",
    "The Brothers Karamazov by Fyodor Dostoevsky (1880, Russia, Russian)",
    "Middlemarch by George Eliot (1871, United Kingdom, English)",
    "Invisible Man by Ralph Ellison (1952, United States, English)",
    "Medea by Euripides (431 BCE, Greece, Ancient Greek)",
    "Absalom, Absalom! by William Faulkner (1936, United States, English)",
    "The Sound and the Fury by William Faulkner (1929, United States, English)",
    "Madame Bovary by Gustave Flaubert (1857, France, French)",
    "Sentimental Education by Gustave Flaubert (1869, France, French)",
    "Gypsy Ballads by Federico García Lorca (1928, Spain, Spanish)",
    "One Hundred Years of Solitude by Gabriel García Márquez (1967, Colombia, Spanish)",
    "Love in the Time of Cholera by Gabriel García Márquez (1985, Colombia, Spanish)",
    "Faust by Johann Wolfgang von Goethe (1832, Saxe-Weimar, German)",
    "Dead Souls by Nikolai Gogol (1842, Russia, Russian)",
    "The Tin Drum by Günter Grass (1959, Germany, German)",
    "The Devil to Pay in the Backlands by João Guimarães Rosa (1956, Brazil, Portuguese)",
    "Hunger by Knut Hamsun (1890, Norway, Norwegian)",
    "The Old Man and the Sea by Ernest Hemingway (1952, United States, English)",
    "Iliad by Homer (760–710 BCE, Greece, Ancient Greek)",
    "Odyssey by Homer (8th century BCE, Greece, Ancient Greek)",
    "A Doll's House by Henrik Ibsen (1879, Norway, Norwegian)",
    "Ulysses by James Joyce (1922, Irish Free State, English)",
    "Stories by Franz Kafka (1924, Czechoslovakia, German)",
    "The Trial by Franz Kafka (1925, Czechoslovakia, German)",
    "The Castle by Franz Kafka (1926, Czechoslovakia, German)",
    "Shakuntala by Kālidāsa (1st century BCE–4th century CE, India, Sanskrit)",
    "The Sound of the Mountain by Yasunari Kawabata (1954, Japan, Japanese)",
    "Zorba the Greek by Nikos Kazantzakis (1946, Greece, Greek)",
    "Sons and Lovers by D. H. Lawrence (1913, United Kingdom, English)",
    "Independent People by Halldór Laxness (1934–35, Iceland, Icelandic)",
    "Complete Poems by Giacomo Leopardi (1818–1835, Italy, Italian)",
    "The Golden Notebook by Doris Lessing (1962, United Kingdom, English)",
    "Pippi Longstocking by Astrid Lindgren (1945, Sweden, Swedish)",
    "Diary of a Madman and Other Stories by Lu Xun (1918, China, Chinese)",
    "Children of Gebelawi by Naguib Mahfouz (1959, Egypt, Arabic)",
    "Buddenbrooks by Thomas Mann (1901, Germany, German)",
    "The Magic Mountain by Thomas Mann (1924, Germany, German)",
    "Moby-Dick by Herman Melville (1851, United States, English)",
    "Essays by Michel de Montaigne (1595, France, French)",
    "History by Elsa Morante (1974, Italy, Italian)",
    "Beloved by Toni Morrison (1987, United States, English)",
    "The Tale of Genji by Murasaki Shikibu (1000–12, Japan, Japanese)",
    "The Man Without Qualities by Robert Musil (1930–32, Austria, German)",
    "Lolita by Vladimir Nabokov (1955, Russia/United States, English)",
    "Nineteen Eighty-Four by George Orwell (1949, United Kingdom, English)",
    "Metamorphoses by Ovid (1st century CE, Roman Empire, Classical Latin)",
    "The Book of Disquiet by Fernando Pessoa (1928, Portugal, Portuguese)",
    "Tales by Edgar Allan Poe (1832–49, United States, English)",
    "In Search of Lost Time by Marcel Proust (1913–27, France, French)",
    "Gargantua and Pantagruel by François Rabelais (1532–34, France, French)",
    "Pedro Páramo by Juan Rulfo (1955, Mexico, Spanish)",
    "Masnavi by Rumi (1258–73, Sultanate of Rum/Persia, Persian)",
    "Midnight's Children by Salman Rushdie (1981, United Kingdom/India, English)",
    "Bostan by Saadi (1257, Persia, Persian)",
    "Season of Migration to the North by Tayeb Salih (1966, Sudan, Arabic)",
    "Blindness by José Saramago (1995, Portugal, Portuguese)",
    "Hamlet by William Shakespeare (1603, England, English)",
    "King Lear by William Shakespeare (1608, England, English)",
    "Othello by William Shakespeare (1609, England, English)",
    "Oedipus the King by Sophocles (430 BCE, Greece, Ancient Greek)",
    "The Red and the Black by Stendhal (1830, France, French)",
    "Tristram Shandy by Laurence Sterne (1760, Ireland, English)",
    "Confessions of Zeno by Italo Svevo (1923, Italy, Italian)",
    "Gulliver's Travels by Jonathan Swift (1726, Ireland, English)",
    "War and Peace by Leo Tolstoy (1865–69, Russia, Russian)",
    "Anna Karenina by Leo Tolstoy (1877, Russia, Russian)",
    "The Death of Ivan Ilyich and Other Stories by Leo Tolstoy (1886, Russia, Russian)",
    "Adventures of Huckleberry Finn by Mark Twain (1884, United States, English)",
    "Ramayana by Valmiki (5th–4th century BCE, India, Sanskrit)",
    "Aeneid by Virgil (29–19 BCE, Roman Empire, Classical Latin)",
    "Mahabharata by Vyasa (9th–5th century BCE, India, Sanskrit)",
    "Leaves of Grass by Walt Whitman (1855, United States, English)",
    "Mrs Dalloway by Virginia Woolf (1925, United Kingdom, English)",
    "To the Lighthouse by Virginia Woolf (1927, United Kingdom, English)",
    "Memoirs of Hadrian by Marguerite Yourcenar (1951, France/Belgium, French)"
];


const movie_list = [
    "The Shawshank Redemption - 1994",
    "The Godfather - 1972",
    "The Dark Knight - 2008",
    "The Godfather Part II - 1974",
    "12 Angry Men - 1957",
    "The Lord of the Rings: The Return of the King - 2003",
    "Schindler's List - 1993",
    "Pulp Fiction - 1994",
    "The Lord of the Rings: The Fellowship of the Ring - 2001",
    "The Good, the Bad and the Ugly - 1966",
    "Forrest Gump - 1994",
    "The Lord of the Rings: The Two Towers - 2002",
    "Fight Club - 1999",
    "Inception - 2010",
    "Star Wars: Episode V - The Empire Strikes Back - 1980",
    "The Matrix - 1999",
    "Goodfellas - 1990",
    "One Flew Over the Cuckoo's Nest - 1975",
    "Interstellar - 2014",
    "Se7en - 1995",
    "It's a Wonderful Life - 1946",
    "Seven Samurai - 1954",
    "The Silence of the Lambs - 1991",
    "Saving Private Ryan - 1998",
    "City of God - 2002",
    "Life Is Beautiful - 1997",
    "The Green Mile - 1999",
    "Terminator 2: Judgment Day - 1991",
    "Star Wars: Episode IV - A New Hope - 1977",
    "Back to the Future - 1985",
    "Spirited Away - 2001",
    "The Pianist - 2002",
    "Parasite - 2019",
    "Psycho - 1960",
    "Gladiator - 2000",
    "The Lion King - 1994",
    "The Departed - 2006",
    "Spider-Man: Across the Spider-Verse - 2023",
    "Whiplash - 2014",
    "Grave of the Fireflies - 1988",
    "American History X - 1998",
    "Léon: The Professional - 1994",
    "The Prestige - 2006",
    "Harakiri - 1962",
    "Casablanca - 1942",
    "The Usual Suspects - 1995",
    "The Intouchables - 2011",
    "Dune: Part Two - 2024",
    "Cinema Paradiso - 1988",
    "Modern Times - 1936",
    "Alien - 1979",
    "Rear Window - 1954",
    "Once Upon a Time in the West - 1968",
    "Django Unchained - 2012",
    "City Lights - 1931",
    "Apocalypse Now - 1979",
    "Memento - 2000",
    "WALL·E - 2008",
    "Raiders of the Lost Ark - 1981",
    "12th Fail - 2023",
    "The Lives of Others - 2006",
    "Sunset Boulevard - 1950",
    "Avengers: Infinity War - 2018",
    "Paths of Glory - 1957",
    "Spider-Man: Into the Spider-Verse - 2018",
    "Witness for the Prosecution - 1957",
    "The Shining - 1980",
    "The Great Dictator - 1940",
    "Aliens - 1986",
    "Inglourious Basterds - 2009",
    "The Dark Knight Rises - 2012",
    "Coco - 2017",
    "Amadeus - 1984",
    "Toy Story - 1995",
    "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb - 1964",
    "Oldboy - 2003",
    "American Beauty - 1999",
    "Avengers: Endgame - 2019",
    "Das Boot - 1981",
    "Braveheart - 1995",
    "Good Will Hunting - 1997",
    "Princess Mononoke - 1997",
    "Your Name. - 2016",
    "Joker - 2019",
    "High and Low - 1963",
    "3 Idiots - 2009",
    "Once Upon a Time in America - 1984",
    "Singin' in the Rain - 1952",
    "Capernaum - 2018",
    "Come and See - 1985",
    "Requiem for a Dream - 2000",
    "Toy Story 3 - 2010"
];

const bestGamesByGenre = {
  action: [
    "The Last of Us Part II (2020)",
    "Red Dead Redemption 2 (2018)",
    "God of War (2018)",
    "Elden Ring (2022)",
    "Marvel's Spider-Man (2018)"
  ],
  rpg: [
    "The Witcher 3: Wild Hunt (2015)",
    "Cyberpunk 2077 (2020)",
    "Elden Ring (2022)",
    "Persona 5 Royal (2016/2020)",
    "Divinity: Original Sin 2 (2017)"
  ],
  shooter: [
    "DOOM Eternal (2020)",
    "Overwatch (2016)",
    "Destiny 2 (2017)",
    "Call of Duty: Modern Warfare (2019)",
    "Titanfall 2 (2016)"
  ],
  strategy: [
    "XCOM 2 (2016)",
    "Civilization VI (2016)",
    "Crusader Kings III (2020)",
    "Starcraft II: Legacy of the Void (2015)",
    "Total War: Three Kingdoms (2019)"
  ],
  adventure: [
    "The Legend of Zelda: Breath of the Wild (2017)",
    "Firewatch (2016)",
    "Life is Strange (2015)",
    "Outer Wilds (2019)",
    "Disco Elysium (2019)"
  ],
  horror: [
    "Resident Evil 2 Remake (2019)",
    "The Evil Within 2 (2017)",
    "Dead Space Remake (2023)",
    "Alien: Isolation (2014)",
    "Amnesia: The Dark Descent (2010)"
  ],
  racing: [
    "Forza Horizon 5 (2021)",
    "Gran Turismo 7 (2022)",
    "Mario Kart 8 Deluxe (2017)",
    "F1 2021 (2021)",
    "Dirt Rally 2.0 (2019)"
  ],
  simulation: [
    "The Sims 4 (2014)",
    "Microsoft Flight Simulator (2020)",
    "Cities: Skylines (2015)",
    "Planet Zoo (2019)",
    "Factorio (2020)"
  ],
  multiplayer: [
    "Fortnite (2017)",
    "Apex Legends (2019)",
    "Among Us (2018/2020)",
    "Valorant (2020)",
    "Minecraft (2011)"
  ],
  platformer: [
    "Celeste (2018)",
    "Hollow Knight (2017)",
    "Ori and the Will of the Wisps (2020)",
    "Little Nightmares II (2021)",
    "Rayman Legends (2013)"
  ]
};

function generateBook() {
    const randomIndex = Math.floor(Math.random() * greatbooks.length);
    const book = greatbooks[randomIndex];
    document.getElementById('randombook').innerText = book;
}


function generateMovie() {
    const randomIndex = Math.floor(Math.random() * movie_list.length);
    const movie = movie_list[randomIndex];
    document.getElementById('randommovie').innerText = movie;
}


function generateGame() {
    const genres = Object.keys(bestGamesByGenre); // Получаем все ключи (жанры)
    const randomGenre = genres[Math.floor(Math.random() * genres.length)]; // Случайный жанр
    const games = bestGamesByGenre[randomGenre]; // Игры из выбранного жанра
    const randomGame = games[Math.floor(Math.random() * games.length)]; // Случайная игра из жанра

    document.getElementById('randomgame').innerText = randomGame;
}








