import Image from "next/image";

export default function Dashboard() {
  const stats = [
    {
      title: "Tasks Automated",
      value: "2.4M",
      icon: "/icons/cog-8-tooth.svg",
    },
    {
      title: "Revenue Growth",
      value: "+42%",
      icon: "/icons/arrow-trending-up.svg",
    },
    {
      title: "Accuracy",
      value: "99.8%",
      icon: "/icons/chart-pie.svg",
    },
  ];

  return (
    <section className="container py-16">

      <div className="text-center mb-12">

        <p className="uppercase tracking-[0.3em] text-sm text-[var(--secondary)]">
          Live Dashboard
        </p>

        <h2 className="heading text-4xl md:text-5xl mt-4">
          Everything.
          <br />
          One Intelligent Workspace.
        </h2>

      </div>

      <div className="rounded-[32px] bg-[var(--secondary)] p-10 shadow-xl">

        <div className="grid md:grid-cols-3 gap-6">

          {stats.map((item) => (

            <div
              key={item.title}
              className="rounded-2xl bg-white p-6"
            >

              <Image
                src={item.icon}
                alt={item.title}
                width={30}
                height={30}
              />

              <p className="mt-6 text-gray-500">
                {item.title}
              </p>

              <h3 className="heading text-5xl mt-2">
                {item.value}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}