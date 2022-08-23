import ArchivePreview from '../components/archive-preview'

export default function ArchiveStories({ posts }) {

    return (
        <section>
            {/* <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-12 lg:gap-x-12 gap-y-12">
                {posts.map(({ node }) => (
                    <ArchivePreview
                        key={node.slug}
                        title={node.title}
                        coverImage={node.featuredImage?.node}
                        date={node.date}
                        author={node.author?.node}
                        slug={node.slug}
                        excerpt={node.excerpt}
                        categories={node.categories}
                        postCount={posts.length}
                    />
                )
                )}
            </div>
        </section>
    )
}
