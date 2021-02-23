import './App.css';
import Post from './Post';

function App() {

  const posts = [
    {
      title: "Dinosaurs are awesome",
      author: "Stealthy Stegosaurus",
      body: "Check out this body property!",
      comments: ["Salty", "Nice job there", "oh snap"]
    }
  ];

  return (
    <div className="App">
      {posts.map(post => (<Post post={post} />))}
    </div>
  );
}

export default App;
