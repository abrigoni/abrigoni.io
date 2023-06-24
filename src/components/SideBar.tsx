import Link from "next/link";

const navItems = {
  '/': {
    name: 'home',
  },
  'about': {
    name: 'about',
  },
};

const SideBar = () => {
  return (
    <aside className="md:w-[150px] md:flex-shrink-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="flex flex-col md:flex-row items-start mb-2 md:mb-8 space-y-10">
          <span>&lt;a /&gt;ri</span>
        </div>
        <nav className="flex flex-row md:flex-col items-start md:overflow-auto">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="flex align-middle"
              >
                <span className="py-2 px-[5px]">
                  {name}
                </span>
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
};

export default SideBar;
