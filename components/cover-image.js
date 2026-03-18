import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export default function CoverImage({ title, coverImage, slug, route, priority }) {
  const routeString = route ? route : 'posts';
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={coverImage ? `Cover Image for ${title}` : ' '}
      src={coverImage?.sourceUrl}
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 50vw"
      priority={priority}
      className={cn('object-cover flex-auto ', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0 flex">
      {slug ? (
        <Link href={`/${routeString}/${slug}`} aria-label={title} className={"flex"}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
