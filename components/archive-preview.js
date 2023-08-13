import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'
import Categories from '../components/categories'
import {
    categoriesContain,
    PAGES_MARKER,
    REPRINT_MARKER,
    UKRAINIAN_MARKER,
    CURRENT_ISSUE_MARKER, COMMEMORATION_MARKER
} from "../lib/categories";

export default function ArchivePreview({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
    categories,
    postCount
}) {
    const isPage = categoriesContain(categories, PAGES_MARKER);
    const isReprint = categoriesContain(categories, REPRINT_MARKER);
    const isUkrainianVersion = categoriesContain(categories, UKRAINIAN_MARKER);
    const isCurrentIssue = categoriesContain(categories, CURRENT_ISSUE_MARKER);
    const isCommemorativePost = categoriesContain(categories, COMMEMORATION_MARKER);

    return (
        <>
            {!isPage && !isReprint && !isUkrainianVersion && !isCurrentIssue ? (
                <div className={isCommemorativePost ? "bg-commemorative-post" : "bg-uil-post"}>
                    <div className="mb-2 xl:mg-5">
                        {coverImage && (
                            <CoverImage title={title} coverImage={coverImage} slug={slug} />
                        )}
                    </div>
                    <div className="mb-3 mx-3">
                        <h3 className="text-4xl font-adriane-text-bold mb-0 leading-snug text-uil-key">
                            <Link href={`/posts/${slug}`}>
                                <a
                                    className="hover:underline"
                                    dangerouslySetInnerHTML={{ __html: title }}
                                ></a>
                            </Link>
                        </h3>
                        <div className="xl:text-lg mb-4 font-adriane-text-italic">
                            <Date dateString={date} />
                            <Categories categories={categories} />
                        </div>
                        <div
                            className="text-lg leading-relaxed mb-4"
                            dangerouslySetInnerHTML={{ __html: excerpt }}
                        />
                        <Avatar author={author} />
                    </div>
                </div>
            ) : ('')}
        </>
    )
}
