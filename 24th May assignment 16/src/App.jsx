import './App.css';
import Friend from './FriendsList';

function App() {
  const friends = [
    {
      name: "Ichigo Kurosaki",
      age: 17,
      hobby: "Fighting Hollows",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaRRBgcfTCcQlJ7QIzKuJbkXfxo1topSL3bg&s",
      contact: "ichigo@bleach.com",
      quote: "Getsuga Tenshō!"
    },
    {
      name: "Urahara Kisuke",
      age: 400,
      hobby: "Inventing gadgets",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNHO-UjbQWTNIJhpxMYdlCt6YBl3Pnkhjsg&s",
      contact: "urahara@bleach.com",
      quote: "There’s no such thing as truth or lies. Everything depends on the standpoint."
    },
    {
      name: "Sōsuke Aizen",
      age: 500,
      hobby: "Manipulating fate",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnH1t7I765WhUJXbiJiS8Ud8ZHU9IC-7XQ-Q&s",
      contact: "aizen@bleach.com",
      quote: "Admiration is the emotion furthest from understanding."
    },
    {
      name: "Yamamoto Genryūsai",
      age: 2100,
      hobby: "Discipline",
      image: "https://i.pinimg.com/736x/3d/90/99/3d9099a40202f72fd42ccb89015b6097.jpg",
      contact: "yamamoto@bleach.com",
      quote: "Those who do not fear the sword they wield have no right to wield a sword at all."
    },
    {
      name: "Byakuya Kuchiki",
      age: 250,
      hobby: "Reading poetry, maintaining family honor",
      image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/06/senbonzakura-header.jpg",
      contact: "byakuya@bleach.com",
      quote: "I will defend the honor of my family, no matter the cost.",
    },
    {
      name: "Shunsui Kyoraku",
      age: 800,
      hobby: "Drinking sake, playing games, relaxing",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlWyCl0ApEuIunjf48_OWrOg7Bvuqe3ZX00Q&s",
      contact: "shunsui@bleach.com",
      quote: "A carefree heart is the best defense.",
    },
    {
      name: "Jushiro Ukitake",
      age: 800,
      hobby: "Caring for others, reading, fishing",
      image: "https://staticg.sportskeeda.com/editor/2024/05/d5282-17159709483322-1920.jpg",
      contact: "jukai@bleach.com",
      quote: "Compassion is a strength, not a weakness.",
    },
    {
      name: "Kaname Tosen",
      age: 200,
      hobby: "Seeking justice, meditation",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpasiBom6d4tcaPZTwB7tvgPkgy-9cwvd6w&s",
      contact: "tosen@bleach.com",
      quote: "Justice may be blind, but my path is clear.",
    },
  ];

  return (
    <div className="app-background">
      <div className="main-container">
        <h1>Bleach Characters</h1>
        <div className="cards-grid">
          <Friend {...friends[0]} />
          <Friend {...friends[1]} />
          <Friend {...friends[2]} />
          <Friend {...friends[3]} />
          <Friend {...friends[4]} />
          <Friend {...friends[5]} />
          <Friend {...friends[6]} />
          <Friend {...friends[7]} />
        </div>
      </div>
    </div>
  );
}

export default App;
