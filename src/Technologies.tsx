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

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data));
  }, []);

  return (
    <section className="bg-red-100">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#07152f]">
            Explore the{" "}
            <span className="bg-amber-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Cards + Stack */}
        <div className="flex items-start gap-5">

          {/* Cards */}
          <div className="grid flex-1 grid-cols-3 gap-5">
            {technologies.map((technology) => (
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

                  <span className="rounded-full bg-pink-50 px-3 py-1 text-xs text-pink-500">
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

                {/* Information */}
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

                {/* Button */}
                <button className="mt-4 w-full rounded-md bg-[#07152f] py-2 text-sm font-medium text-white">
                  Add to Stack
                </button>

              </div>
            ))}
          </div>

          {/* Your Stack */}
          <div className="w-64 shrink-0 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            <h3 className="text-lg font-semibold text-gray-900">
              Your Stack
            </h3>

            <p className="mt-1 text-xs text-gray-400">
              0 Technology Selected
            </p>

            <button className="mt-8 w-full rounded-md border border-pink-200 py-2 text-sm text-pink-500">
              Remove All
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Technologies;