import { useEffect, useState } from "react";


interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);

  // Get data from public/data.json
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data));
  }, []);

  // Add technology to stack
  const addToStack = (technology: Technology) => {
   
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (!alreadyAdded) {
      setStack([...stack, technology]);
    }
  };

  // Remove one technology
  const removeFromStack = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  // Remove all technologies
  const removeAll = () => {
    setStack([]);
  };

  return (
    <section className="bg-red-100">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#07152f]">
            Explore the{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Cards + Your Stack */}
        <div className="flex items-start gap-5">

          {/* Technology Cards */}
          <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {technologies.map((technology) => {

              const isAdded = stack.some(
                (item) => item.id === technology.id
              );

              return (
                <div
                  key={technology.id}
                  className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                >

                  {/* Icon + Badge */}
                  <div className="mb-4 flex items-start justify-between">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-8 w-8 object-contain"
                    />

                    <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
                      {technology.badge}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {technology.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 min-h-[65px] text-sm leading-5 text-gray-500">
                    {technology.description}
                  </p>

                  {/* Category + Difficulty + Rating */}
                  <div className="mt-4 flex items-center justify-between text-xs">

                    <span className="rounded bg-gray-100 px-2 py-1 text-gray-600">
                      {technology.category}
                    </span>

                    <span className="text-gray-500">
                      {technology.difficulty}
                    </span>

                    <span className="text-yellow-500">
                      ★ {technology.rating}
                    </span>

                  </div>

                  {/* Add Button */}
                  <button
                    onClick={() => addToStack(technology)}
                    disabled={isAdded}
                    className={`mt-4 w-full rounded-md py-2 text-sm font-medium text-white ${
                      isAdded
                        ? "cursor-not-allowed bg-gray-400"
                        : "bg-[#07152f] hover:bg-gray-800"
                    }`}
                  >
                    {isAdded ? "Added to Stack" : "Add to Stack"}
                  </button>

                </div>
              );
            })}

          </div>

          {/* Your Stack */}
          <div className="w-64 shrink-0 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            <h3 className="text-lg font-semibold text-gray-900">
              Your Stack
            </h3>

            <p className="mt-1 text-xs text-gray-400">
              {stack.length} Technology
              {stack.length !== 1 ? "ies" : "y"} Selected
            </p>

            {/* Stack Items */}
            <div className="mt-5 space-y-3">

              {stack.length === 0 ? (
                <p className="py-5 text-center text-sm text-gray-400">
                  No technology selected
                </p>
              ) : (
                stack.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center justify-between rounded-md border border-gray-200 px-3 py-3"
                  >

                    <div className="flex items-center gap-2">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-6 w-6 object-contain"
                      />

                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          {technology.name}
                        </p>

                        <p className="text-[10px] text-gray-400">
                          {technology.category}
                        </p>
                      </div>
                    </div>

                    {/* Remove One */}
                    <button
                      onClick={() => removeFromStack(technology.id)}
                      className="text-lg text-gray-400 hover:text-red-500"
                    >
                      ×
                    </button>

                  </div>
                ))
              )}

            </div>

            {/* Remove All */}
            <button
              onClick={removeAll}
              disabled={stack.length === 0}
              className="mt-8 w-full rounded-md border border-pink-200 py-2 text-sm font-medium text-pink-500 hover:bg-pink-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Remove All
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Technologies;