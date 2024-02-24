export default function NavbarArchive({slug, route}) {
  return (
    <nav className="min-w-full bg-uil-post">
      <div
        className="container mx-auto px-5 lg:pl-7 pt-2 pb-2 lg:flex md:flex-row space-y-2 lg:space-y-0 lg:whitespace-nowrap lg:align-middle items-center">
        <ul
          className="grid grid-cols-2 gap-2 text-center md:flex-row md:align-middle md:content-center md:flex md:space-y-0 md:space-x-4 mx-auto md:mx-0 text-sm text-uil-key">
          <li><a href="/archive">Special Issue 3 (2023)</a></li>
          <li><a href="/archive">Special Issue 2 (2022)</a></li>
          <li><a href="/archive">Special Issue 1 (2021)</a></li>
        </ul>
      </div>
    </nav>
  );
}
