import {categoriesContainMatch} from '../lib/filter-utils';
import {LINK_TRANSLATOR_BIO} from '../lib/constants';

export default function Avatar({ author, route, categories }) {
  const name = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : null
  const shouldLinkTranslatorBio = route === 'translates' || categoriesContainMatch(categories, LINK_TRANSLATOR_BIO);

  return (
    <div className="flex items-center">
      { shouldLinkTranslatorBio ?
        <a href={`/translates/translators/${author.lastName?.toLowerCase()}`}>
          <div className="text-lg font-adriane-text-italic font-bold underline">{name}</div>
        </a>
        :
          <div className="text-lg font-adriane-text-italic font-bold">{name}</div>}

    </div>
  )
}
