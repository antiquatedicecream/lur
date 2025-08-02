import {categoriesContainAnyStartsWith, categoriesContainMatch} from '../lib/filter-utils';
import {LINK_TRANSLATOR_BIO} from '../lib/constants';
import Link from "next/link";

export default function Avatar({author, route, categories}) {
    const name = author
        ? author.firstName && author.lastName
            ? `${author.firstName} ${author.lastName}`
            : author.name
        : null
    const lastNameLowerCase = author.lastName?.toLowerCase();
    const href = '/translates/translators/' + lastNameLowerCase;
    let shouldLinkTranslatorBio;
    shouldLinkTranslatorBio = route === 'translates' || categoriesContainMatch(categories, LINK_TRANSLATOR_BIO);

    const translatorNames = categoriesContainAnyStartsWith(categories, 'Translator:');
    const translatorOneLastNameToLowercase = translatorNames.length > 0 ? translatorNames[0].split(' ').map((string) => string.toLowerCase()).slice(-1) : '';
    const translatorOneFullName = translatorNames.length > 0 ? translatorNames[0].split(' ').slice(-2).join(' ') : '';
    const translatorTwoLastNameToLowerCase = translatorNames.length > 1 ? translatorNames[1].split(' ').map((string) => string.toLowerCase()).slice(-1) : '';
    const translatorTwoFullName = translatorNames.length > 1 ? translatorNames[1].split(' ').slice(-2).join(' ') : '';

    if (shouldLinkTranslatorBio) {
        return (
            <div className="flex items-center">
                {translatorNames.length === 0 &&
                    <a href={href}>
                        <div className="text-lg font-adriane-text-italic font-bold underline">{name}</div>
                    </a>
                }
                {translatorOneFullName && // if post has categories starting with string 'Translator:'
                    <div className={`flex flex-row items-end`}>
                        <div className={`text-lg font-bold font-adriane-text-italic`}>trans. by&nbsp;</div>
                        <Link href={`/translates/translators/${translatorOneLastNameToLowercase}`}>
                            <a className="text-lg font-adriane-text-italic font-bold underline">
                                {translatorOneFullName}
                            </a>
                        </Link>
                        {translatorTwoFullName &&
                        <div className={`text-lg font-bold font-adriane-text-italic`}>&nbsp;and&nbsp;</div>
                        }
                        {translatorTwoFullName &&
                            <Link href={`/translates/translators/${translatorTwoLastNameToLowerCase}`}>
                                <a className="text-lg font-adriane-text-italic font-bold underline">
                                {translatorTwoFullName}
                                </a>
                            </Link>}
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
