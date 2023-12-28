export default function NavbarTranslate({slug, route}) {
  return (
    <nav className="min-w-full bg-uil-post">
      <div
        className="container mx-auto px-5 lg:pl-7 pt-2 pb-2 lg:flex md:flex-row space-y-2 lg:space-y-0 lg:whitespace-nowrap lg:align-middle items-center">
        <ul
          className="flex-initial flex-col lg:flex-row lg:align-middle lg:content-center flex space-y-2 lg:space-y-0 lg:space-x-4 justify-end mx-auto text-sm text-uil-key">
          <li><a href="/translates/marko-cheremshyna-the-village-is-trembling">Cheremshyna</a></li>
          <li><a href="/translates/ahatanhel-krymskyi-andrii-lahovskyi">Krymskyi</a></li>
          <li><a href="/translates/mykola-kulish-myna-mazailo">Kulish</a></li>
          <li><a href="/translates/anastasiya-levkova-there-is-land-behind-the-trench">Levkova</a></li>
          <li><a href="/translates/mariana-savka-through-the-eyes-of-children">Lushchevska</a></li>
          <li><a href="/translates/sofia-yablonska-marseille">Yablonska</a></li>
          <li><a href="/translates/translators/">Translators</a></li>
        </ul>
      </div>
    </nav>
  );
}
