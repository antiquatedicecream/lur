import PostPreview from './post-preview';

export default function MoreTranslations({posts, route}) {

  return (<section>
        <div
            className="space-y-6">
          {posts.map(({node}) => (<PostPreview
                  key={node.slug}
                  title={node.title}
                  coverImage={false}
                  date={node.date}
                  author={node.author?.node}
                  slug={node.slug}
                  excerpt={node.excerpt}
                  categories={node.categories}
                  route={route}
                  titleFontSize={'2xl'}
                  postCount={posts.length}
              />))}
        </div>
      </section>);
}
