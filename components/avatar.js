import {categoriesContainMatch} from '../lib/filter-utils';
import {LINK_TRANSLATOR_BIO} from '../lib/constants';

export default function Avatar({ author, route, categories }) {
  const name = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : null
  const lastNameLowerCase = author.lastName?.toLowerCase();
  const href = '/translates/translators/' + lastNameLowerCase;
  let shouldLinkTranslatorBio;
  shouldLinkTranslatorBio = route === 'translates' || categoriesContainMatch(categories, LINK_TRANSLATOR_BIO);;

  if(shouldLinkTranslatorBio){
    return (
      <div className="flex items-center">
        <a href={href}>
          <div className="text-lg font-adriane-text-italic font-bold underline">{name}</div>
        </a>
      </div>
    )
  } else {
    return (
      <div className="flex items-center">
          <div
            className="text-lg font-adriane-text-italic font-bold">{name}</div>
      </div>
    )
  }
}
