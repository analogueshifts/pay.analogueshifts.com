import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { link: "About", path: "#" },
        { link: "Careers", path: "#" },
        { link: "Newsroom", path: "#" },
      ],
    },
    {
      title: "Features",
      links: [
        { link: "Fast", path: "#" },
        { link: "Secure", path: "#" },
        { link: "Reliable", path: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { link: "Twitter", path: "#" },
        { link: "Instagram", path: "#" },
        { link: "Threads", path: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { link: "Terms", path: "#" },
        { link: "Privacy", path: "#" },
      ],
    },
  ];
  return (
    <footer className="w-full bg-white flex justify-between items-center h-64 pl-10 pr-[75px] max-[1000px]:px-5 max-[800px]:flex-col max-[800px]:h-auto max-[800px]:py-10 max-[800px]:gap-7">
      <div>
        <p className="text-sm text-black font-bold">PAY AT ANALOGUESHIFTS</p>
        <p className="text-[15px] text-black pt-9 font-medium max-[800px]:pt-4">
          Simplifying Transactions
        </p>
      </div>
      <div className="flex gap-24 max-[700px]:gap-10 max-[500px]:flex-col">
        {footerLinks.map((data) => {
          return (
            <div key={Math.random + data.title} className="flex flex-col gap-3">
              <p className="text-base text-black font-bold">{data.title}</p>
              {data.links.map((link) => {
                return (
                  <Link key={link.link} href={link.path}>
                    <p className="text-sm text-black tracking-wide font-medium">
                      {link.link}
                    </p>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </footer>
  );
}
