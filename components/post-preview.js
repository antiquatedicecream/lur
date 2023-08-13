import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from './cover-image';
import Link from 'next/link';
import Categories from '../components/categories';
import {categoriesContainMatch} from '../lib/filter-utils';
import {COMMEMORATION_MARKER, UKRAINIAN_MARKER} from '../lib/constants';
import {te} from 'date-fns/locale';

export default function PostPreview(
  {
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
    categories,
    postCount,
  }) {
  const isUkrainianPost = categoriesContainMatch(categories, UKRAINIAN_MARKER);
  const backgroundColour =
    categoriesContainMatch(categories, COMMEMORATION_MARKER)
      ? 'bg-blue-50'
      : 'bg-uil-post';
  const textColour =
    categoriesContainMatch(categories, COMMEMORATION_MARKER)
      ? 'text-blue-900'
      : 'text-uil-key';

  return (<>
    {!isUkrainianPost ?
      (<div className={backgroundColour}>
        <div className="mb-2 xl:mg-5">
          {coverImage && (<CoverImage title={title} coverImage={coverImage}
                                      slug={slug}/>)}
        </div>
        <div className="mb-3 mx-3">
          <h3
            className={`text-4xl font-adriane-text-bold mb-0 leading-snug ${textColour}`}>
            <Link href={`/posts/${slug}`}>
              <a
                className="hover:underline"
                dangerouslySetInnerHTML={{__html: title}}
              ></a>
            </Link>
          </h3>
          <div className="xl:text-lg mb-4 font-adriane-text-italic">
            <Date dateString={date}/>
            <Categories categories={categories}/>
          </div>
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{__html: excerpt}}
          />
          <Avatar author={author}/>
        </div>
      </div>) :
      ('')}
  </>);
}
