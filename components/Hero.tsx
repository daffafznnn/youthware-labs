export default function Hero() {
  return (
    <section id="hero" className="relative py-40 bg-gradient-to-b from-black to-zinc-900 text-white">
      {/* Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[300px] bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,hsl(0,0%,30%)_0%,transparent_80%)] opacity-30"></div>
      </div>
        <div
      className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(hsl(var(--accent-foreground)/0.1)_1px,transparent_1px)] [background-size:8px_8px] [mask-image:radial-gradient(ellipse_60%_60%_at_65%_50%,hsl(0,0%,30%)_0%,transparent_80%)]">
    </div>

      {/* Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Content */}
        <div className="flex flex-col items-start text-left max-w-3xl">
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            New Release
          </span>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl leading-tight">
            Welcome to <span className="bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">YouthWare<small className="text-zinc-500 text-2xl">Labs</small></span>
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Kami menyediakan solusi terbaik untuk pengembangan website dan konsultasi IT dengan teknologi terkini.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex w-full flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-md font-medium transition hover:bg-gray-200">
              Get Started
            </button>
            <button className="w-full sm:w-auto border border-gray-400 text-white px-6 py-3 rounded-md font-medium transition hover:bg-gray-800">
              Learn More
            </button>
          </div>
        </div>

        {/* Image / Video Section */}
        {/* <div className="relative mt-12 grid grid-cols-12 gap-4 sm:gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-10">
            <div className="aspect-video overflow-clip rounded-lg border border-border bg-white shadow-md"></div>
          </div>
          <div className="absolute inset-0">
            <div className="grid h-full grid-cols-12 gap-4 sm:gap-8 md:gap-12">
              <div className="col-span-12 sm:col-span-10 sm:col-start-2 -mt-6 flex items-start justify-center md:col-span-6 md:col-end-12 lg:-mt-12 lg:items-start">
                <div className="absolute h-auto w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl rounded-lg bg-zinc-900 p-4 shadow-lg">
                  <pre className="font-mono text-xs leading-normal text-accent [mask-image:linear-gradient(to_right,#000_80%,transparent_100%)]">
                    <code>
                      curl &#x27;https://api.example.com/v1/endpoint&#x27; \
                      -X POST \
                      -u username:password \
                      -d param_1=1001 \
                      -d param_3=true \
                      -d param_2=&quot;Donec quis lorem ligula.&quot;
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
