import PostPreview from './post-preview';

export default function MoreStories({posts, route, heading}) {

  return (<section>
    {heading && <div
      className={'font-adriane-text-bold text-commemorative-text text-2xl p-4 bg-commemorative-hero-bg text-center'}>{heading}</div>}
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-12 lg:gap-x-12 gap-y-12">
    {posts.map(({node}) => (<PostPreview
                  key={node.slug}
                  title={node.title}
                  coverImage={node.featuredImage?.node}
                  date={node.date}
                  author={node.author?.node}
                  slug={node.slug}
                  excerpt={node.excerpt}
                  categories={node.categories}
                  route={route}
                  postCount={posts.length}
              />))}
        </div>
      </section>);
}
