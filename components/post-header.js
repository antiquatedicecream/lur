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
  return (
    <>
        <div className="mb-8 md:mb-8 mx-auto w-4/5 relative">
          <CoverImage title={title} coverImage={coverImage} />
        <div className="absolute bottom-0 left-0 md:mx-4 md:my-4 space-y-3 bg-white p-4">
            <PostTitle>{title}</PostTitle>
            <div className="hidden md:block">
              <Avatar author={author} />
            </div>
          </div>  
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  )
}
