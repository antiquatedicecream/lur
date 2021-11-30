import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>

      <div className="lg:grid lg:grid-cols-3 lg:gap-x-2 lg:col-gap-8 sm:space-x-4 bg-[#FFF5F2]">
        <div className="col-span-2">
          {coverImage && (
            <CoverImage title={title} coverImage={coverImage} slug={slug} />
          )}
        </div>
        <div className="col-span-1 p-2">
            <div>
          <h3 className="mb-4 text-4xl font-adriane-text-bold lg:text-6xl leading-tight text-uil-key">
            <Link href={`/posts/${slug}`}>
              <a
                className="hover:underline"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Link>
          </h3>
            <div className="mb-4 md:mb-0 text-lg lg:text-sm xl:text-lg font-adriane-text-italic">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <div
            className="text-lg lg:text-sm xl:text-lg leading-relaxed mb-4 overflow-ellipsis"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <Avatar author={author} />
        </div>
        </div>
      </div>
    </section>
  )
}
