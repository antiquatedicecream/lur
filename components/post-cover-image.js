import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export default function PostCoverImage({ title, coverImage, slug, route, priority }) {
  const routeString = route ? route : 'posts';
  const image = (
    <div className="relative w-full aspect-[2/1]">
      <Image
        fill
        alt={coverImage ? `Cover Image for ${title}` : ' '}
        src={coverImage?.sourceUrl}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 50vw"
        priority={priority}
        className="object-cover"
      />
    </div>
  )
  return (
    <div className="sm:mx-0 w-full">
      {slug ? (
        <Link href={`/${routeString}/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
