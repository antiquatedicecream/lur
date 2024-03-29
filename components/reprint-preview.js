import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from './cover-image';
import Link from 'next/link';
import {categoriesContainMatch} from '../lib/filter-utils';
import {COMMEMORATION_MARKER, UKRAINIAN_MARKER} from '../lib/constants';

export default function ReprintPreview(
  {
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
    categories,
  }) {
  const isUkrainianPost = categoriesContainMatch(categories, UKRAINIAN_MARKER);
  const isCommemorativePost = categoriesContainMatch(categories,
    COMMEMORATION_MARKER);

  return (<>
    {!isUkrainianPost ?
      (<div className={isCommemorativePost ?
        'bg-commemorative-post' :
        'bg-uil-post'}>
        <div className="mb-2 xl:mg-5">
          {coverImage && (<CoverImage title={title} coverImage={coverImage}
                                      slug={slug}/>)}
        </div>
        <div className="mb-3 mx-3">
          <h3
            className="text-4xl font-adriane-text-bold mb-0 leading-snug text-uil-key">
            <Link href={`/posts/${slug}`}>
              <a
                className="hover:underline"
                dangerouslySetInnerHTML={{__html: title}}
              ></a>
            </Link>
          </h3>
          <div className="xl:text-lg mb-4 font-adriane-text-italic">
            <Date dateString={date}/>
          </div>
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{__html: excerpt}}
          />
          <Avatar author={author} categories={categories}/>
        </div>
      </div>) :
      ('')}
  </>);
}
