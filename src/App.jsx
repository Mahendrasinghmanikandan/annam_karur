import Home from "./assets/home.jpg";

const App = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#dbdbdd]">
      <img src={Home} className="!w-full !h-full !object-contain" />
    </div>
  );
}

export default App
