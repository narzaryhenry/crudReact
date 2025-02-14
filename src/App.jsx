import Posts from "./components/Posts";

const App = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Posts</h1>

      <section>
        <Posts />
      </section>
    </div>
  );
};

export default App;
