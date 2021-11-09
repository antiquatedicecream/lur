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
  categories,
  postCount
}) {

  let isPage = categories.edges.map((category, index) => (
    category.node.name === 'pages' ? 'true' : 'false'
  ))
  .includes('true')

  let isReprint = categories.edges.map((category, index) => (
    category.node.name === 'reprint' ? 'true' : 'false'
  ))
  .includes('true')
  // console.log(isPage)
  
  return (
    <>
      {!isPage && !isReprint ? (
        <div className="bg-[#FFF5F2]">
          <div className="mb-2 xl:mg-5">
            {coverImage && (
              <CoverImage title={title} coverImage={coverImage} slug={slug} />
            )}
          </div>
          <div className="mb-3 mx-3">
            <h3 className="text-4xl font-adriane-text-bold mb-0 leading-snug text-uil-key">
              <Link href={`/posts/${slug}`}>
                <a
                  className="hover:underline"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></a>
              </Link>
            </h3>
            <div className="xl:text-lg mb-4 font-adriane-text-italic">
              <Date dateString={date} />
            </div>
            <div
              className="text-lg leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
            <Avatar author={author} />
          </div>
        </div>
      ) : ('')}
    </>
  )
}
