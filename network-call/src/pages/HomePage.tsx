function HomePage() {
  return (
    <div className="flex justify-center items-center h-96">
      <h1
        className="relative w-[max-content] font-mono font-bold before:absolute before:inset-0 before:animate-typewriter 
        before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-slate-700 text-5xl text-slate-700"
      >
        Welcome
      </h1>
    </div>
  );
}

export default HomePage;
