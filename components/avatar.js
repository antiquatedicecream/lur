import {categoriesContainAnyStartsWith, categoriesContainMatch} from '../lib/filter-utils';
import {LINK_TRANSLATOR_BIO} from '../lib/constants';

export default function Avatar({author, route, categories}) {
    const name = author
        ? author.firstName && author.lastName
            ? `${author.firstName} ${author.lastName}`
            : author.name
        : null
    console.log(`Categories: `)
    console.log(categories)
    const lastNameLowerCase = author.lastName?.toLowerCase();
    const href = '/translates/translators/' + lastNameLowerCase;
    let shouldLinkTranslatorBio;
    shouldLinkTranslatorBio = route === 'translates' || categoriesContainMatch(categories, LINK_TRANSLATOR_BIO);
    const translatorNames = categoriesContainAnyStartsWith(categories, 'Translator:');
    const hasMultipleTranslators = translatorNames.length > 1;
    console.log(`Filtered categories:`)
    console.log(categoriesContainAnyStartsWith(categories, 'Translator:'))

    if (shouldLinkTranslatorBio) {
        return (
            <div className="flex items-center">
                {translatorNames.length === 0 &&
                    <a href={href}>
                        <div className="text-lg font-adriane-text-italic font-bold underline">{name}</div>
                    </a>
                }
                {translatorNames.length > 0 && // if post has categories starting with string 'Translator:'
                    <div className={`flex flex-row items-end`}>
                        <a href={translatorNames[0].split(' ').map((string) => string.toLowerCase()).slice(-1)}
                           className="text-lg font-adriane-text-italic font-bold underline">
                                trans. by {translatorNames[0].split(' ').slice(-2).join(' ')}
                        </a>
                        {translatorNames[1] &&
                        <div className={`text-lg font-bold font-adriane-text-italic`}>&nbsp;and&nbsp;</div>
                        }
                        {translatorNames[1] &&
                            <a href={translatorNames[1].split(' ').map((string) => string.toLowerCase()).slice(-1)}
                               className="text-lg font-adriane-text-italic font-bold underline">
                                    {translatorNames[1].split(' ').slice(-2).join(' ')}
                            </a>}
                    </div>
                }
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
