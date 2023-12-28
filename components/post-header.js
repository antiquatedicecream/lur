import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import Categories from '../components/categories'
import {categoriesContainMatch} from "../lib/filter-utils";
import {AUTHOR_MARKER, PAGES_MARKER, TRANSLATOR_MARKER} from '../lib/constants';

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {

  const isPage = categoriesContainMatch(categories, PAGES_MARKER)
  const isTranslatorBio = categoriesContainMatch(categories, TRANSLATOR_MARKER)
  const isAuthorBio = categoriesContainMatch(categories, AUTHOR_MARKER)
  const shouldBeHidden = isPage || isTranslatorBio || isAuthorBio

  return (
    <>
      <div className={`${!coverImage && 'p-2'} mt-4 mb-4 md:mb-4 mx-auto w-full sm:relative`}>
        {coverImage && <CoverImage title={title} coverImage={coverImage} />}
        <div className={`${coverImage && 'sm:absolute'} bottom-0 left-0 md:mx-4 md:my-4 mt-8 space-y-3 sm:bg-white p-4 text-uil-key`}>
          <PostTitle>{title}</PostTitle>
          { shouldBeHidden ? ('') : (
            <div className="hidden md:block text-black">
              <Avatar author={author} />
            </div>
          )}
        </div>
      </div>

      { shouldBeHidden ? ('') : (
        <div className="max-w-2xl mx-auto px-2">
          <div className="block md:hidden mb-4">
            <Avatar author={author} />
          </div>
          <div className="mb-4 text-lg font-adriane-text-italic text-uil-key px-0 mx-0">
            <Date dateString={date} />
            <Categories categories={categories} />
          </div>
        </div>
      )}
    </>
  )
}
