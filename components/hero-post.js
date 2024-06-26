import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from '../components/cover-image';
import Link from 'next/link';
import Categories from '../components/categories';
import {categoriesContainMatch} from '../lib/filter-utils';
import {COMMEMORATION_MARKER} from '../lib/constants';

export default function HeroPost(
  {
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
    categories,
    route,
    heading
  }) {

  const backgroundColour =
    categoriesContainMatch(categories, COMMEMORATION_MARKER)
      ? 'bg-commemorative-hero-bg'
      : 'bg-uil-post';
  const textColour =
    categoriesContainMatch(categories, COMMEMORATION_MARKER)
      ? 'text-commemorative-text'
      : 'text-uil-key';
  const routeString = route ? route : 'posts';

  return (
    <section>
      {heading && <div
        className={'font-adriane-text-bold text-commemorative-text text-2xl p-4 bg-uil-post text-center'}>{heading}</div>}
      <div
        className={`lg:grid lg:grid-cols-3 lg:gap-x-2 lg:col-gap-8 sm:space-x-4 ${backgroundColour}`}>
        <div className="col-span-2 flex">
          {coverImage && (
            <CoverImage title={title} coverImage={coverImage} slug={slug} route={route}/>
          )}
        </div>
        <div className="col-span-1 p-3">
          <div>
            <h3
              className={`mb-4 text-4xl font-adriane-text-bold lg:text-6xl leading-tight ${textColour}`}>
              <Link href={`/${routeString}/${slug}`}>
                <a
                  className="hover:underline"
                  dangerouslySetInnerHTML={{__html: title}}
                />
              </Link>
            </h3>
            <div
              className="mb-4 md:mb-0 text-lg lg:text-sm xl:text-lg font-adriane-text-italic">
              <Date dateString={date}/>
              <Categories categories={categories}/>
            </div>
          </div>
          <div>
            <div
              className="text-lg lg:text-sm xl:text-lg leading-relaxed mb-4 overflow-ellipsis"
              dangerouslySetInnerHTML={{__html: excerpt}}
            />
            <Avatar author={author} categories={categories}/>
          </div>
        </div>
      </div>
    </section>
  );
}
