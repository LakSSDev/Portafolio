export const NavHeader = () => {
  return (
    <nav className="hidden sm:inline-block">
      <ul className="flex gap-3 md:gap-5 lg:gap-10">
        <li className="uppercase font-bold text-xs text-white">
          <p className="text-blue-500">Sobre Mí</p>
        </li>
        <li className="uppercase font-bold text-xs text-white hover:text-blue-500">
          <a href="#about">Tecnologias</a>
        </li>
        <li className="uppercase font-bold text-xs text-white hover:text-blue-500">
          <a href="https://github.com/LakSSDev" target="_blank">Proyectos</a>
        </li>
      </ul>
    </nav>
  );
};
