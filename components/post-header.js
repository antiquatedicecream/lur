import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import Categories from '../components/categories'

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {

  let isPage = categories.edges.map((category, index) => (
    category.node.name === 'pages' ? 'true' : 'false'
  ))
  // console.log(isPage)

  return (
    <>
      <div className="mt-4 mb-4 md:mb-4 mx-auto w-full sm:relative">
        <CoverImage title={title} coverImage={coverImage} />
        <div className="sm:absolute bottom-0 left-0 md:mx-4 md:my-4 space-y-3 bg-white p-4 text-uil-key">
          <PostTitle>{title}</PostTitle>
          {isPage == 'true' ? ('') : (
            <div className="hidden md:block text-black">
              <Avatar author={author} />
            </div>
          )}
        </div>
      </div>

      { isPage == 'true' ? ('') : (
        <div className="max-w-2xl mx-auto px-2">
          <div className="block md:hidden mb-4">
            <Avatar author={author} />
          </div>
          <div className="mb-4 text-lg font-adriane-text-italic text-uil-key px-0 mx-0 w-1/4">
            <Date dateString={date} />
            {/* <Categories categories={categories} /> */}
          </div>
        </div>
      )}
    </>
  )
}
