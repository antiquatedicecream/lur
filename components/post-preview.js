import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from './cover-image';
import Link from 'next/link';
import Categories from '../components/categories';
import {categoriesContainMatch} from '../lib/filter-utils';
import {COMMEMORATION_MARKER, UKRAINIAN_MARKER} from '../lib/constants';

export default function PostPreview(
  {
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
    categories,
    route,
    titleFontSize,
    hideMetaData,
    postCount,
  }) {
  const isUkrainianPost = categoriesContainMatch(categories, UKRAINIAN_MARKER);
  const backgroundColour =
    categoriesContainMatch(categories, COMMEMORATION_MARKER)
      ? 'bg-commemorative-post'
      : 'bg-uil-post';
  const textColour =
    categoriesContainMatch(categories, COMMEMORATION_MARKER)
      ? 'text-commemorative-text'
      : 'text-uil-key';
  const routeString = route ? route : 'posts';

  return (<>
    {!isUkrainianPost ?
      (<div className={backgroundColour}>
        <div className="mb-2 xl:mg-5">
          {coverImage && (<CoverImage title={title} coverImage={coverImage} slug={slug} route={route}/>)}
        </div>
        <div className="mb-3 mx-3">
          <h3
            className={`text-${titleFontSize ? titleFontSize : '4xl'} font-adriane-text-bold mb-0 leading-snug ${textColour}`}>
            <Link href={`/${routeString}/${slug}`}>
              <a
                className="hover:underline"
                dangerouslySetInnerHTML={{__html: title}}
              ></a>
            </Link>
          </h3>
          {!hideMetaData &&
            <div className="xl:text-lg mb-4 font-adriane-text-italic">
              <Date dateString={date}/>
              <Categories categories={categories} route={route}/>
            </div>}
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{__html: excerpt}}
          />
          {!hideMetaData && <Avatar author={author} categories={categories} />}
        </div>
      </div>) :
      ('')}
  </>);
}
