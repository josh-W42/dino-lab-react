import './App.css';
import Post from './Post';

function App() {

  const posts = [
    {
      id: 1,
      title: "Dinosaurs are awesome",
      author: "Stealthy Stegosaurus",
      body: "Check out this body property!",
      comments: [
        {
          id: 1,
          poster: "Hidden Trex",
          content: "Salty"
        },
        {
          id: 2,
          poster: "Rampaging Pterodactyl",
          content: "Nice job there",
        },
        {
          id: 3,
          poster: "Unknown Dino",
          content: "oh snap"
        }
      ]
    }
  ];

  return (
    <div className="App">
      {posts.map(post => (<Post key={`post${post.id}`} post={post} />))}
    </div>
  );
}

export default App;
