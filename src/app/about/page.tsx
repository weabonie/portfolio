export default function About() {
  return (
    <div className="p-10">
      <div className="space-y-12">
        <h1 className="text-7xl h-20 relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-[typewriter_1s_steps(5)_forwards] before:bg-background after:absolute after:inset-0 after:w-[0.125em] after:animate-[typewriter_1s_steps(5)_forwards,_blink_1s_steps(5)_infinite_1s] after:bg-white">
          about
        </h1>

        <div className="text-2xl">
          Hello, my name is Duc Nguyen, but you can just call me Henry.
        </div>
      </div>
    </div>
  );
}
