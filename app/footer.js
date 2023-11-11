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
    <footer className="w-full bg-white grid xl:flex justify-between items-center gap-16 py-5 pl-10 pr-[75px]">
      <div>
        <p className="text-sm text-black font-bold">PAY AT ANALOGUESHIFTS</p>
        <p className="text-[15px] text-black pt-9 font-medium max-[800px]:pt-4">
          Simplifying Transactions
        </p>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-24">
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
