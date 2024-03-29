import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export default function CoverImage({ title, coverImage, slug, route }) {
  const routeString = route ? route : 'posts';
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={coverImage ? `Cover Image for ${title}` : ' '}
      src={coverImage?.sourceUrl}
      className={cn('shadow-small object-cover flex-auto ', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0 flex">
      {slug ? (
        <Link href={`/${routeString}/${slug}`}>
          <a aria-label={title} className={"flex"}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
