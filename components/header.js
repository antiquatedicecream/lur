import Link from 'next/link'
import Navbar from '/components/navbar'

export default function Header( {slug, route} ) {
  return (
    // <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    //   <Link href="/">
    //     <a className="hover:underline">Blog</a>
    //   </Link>
    //   .
    // </h2>
    <Navbar slug={slug} route={route} />
  )
}
