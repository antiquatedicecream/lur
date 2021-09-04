import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="bg-gray-100">
      <div className="mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div className="mb-3 ml-3">
        <h3 className="text-4xl font-adriane-text-bold mb-0 leading-snug">
          <Link href={`/posts/${slug}`}>
            <a
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></a>
          </Link>
        </h3>
        <div className="text-lg mb-4">
          <Date dateString={date} />
        </div>
        <div
          className="text-xl leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <Avatar author={author} />
      </div>
    </div>
  )
}
