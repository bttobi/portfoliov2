import Hamburger from "./Hamburger";

const Navbar = () => {
  const subPages: string[] = [
    "ABOUT",
    "PROJECTS",
    "CONTACT",
    "RESUME",
  ] as const;

  return (
    <nav className="fixed flex h-14 w-full items-center justify-center bg-bgSecondary p-4 opacity-45 backdrop-blur-md">
      <div className="align-center absolute left-0 flex h-full items-center justify-center font-bold">
        <img
          className="logo ml-4"
          src="https://i.imgur.com/otXNjSw.png"
          alt="bartosz tobinski logo picture"
          width="40px"
        />
        <span>Bartosz Tobiński</span>
      </div>
      <ul className="hidden md:flex md:justify-center md:gap-7">
        {subPages.map((el) => (
          <li
            key={el}
            className="delay-50 cursor-pointer transition ease-in-out hover:text-accentText"
          >
            {el}
          </li>
        ))}
      </ul>
      <Hamburger subPages={subPages} />
    </nav>
  );
};

export default Navbar;
