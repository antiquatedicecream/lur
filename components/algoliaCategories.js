export default function AlgoliaCategories({ algoliaCategories, route }) {

  const categoriesShouldbeHidden = route === 'translates' || route === 'Translation'

  return (

    <span className="ml-1">

      {algoliaCategories > 0 ? (
          algoliaCategories.map((category, index) => (
          <span key={index} className={`ml-1 ${categoriesShouldbeHidden ? 'hidden' : ''}`}>
            • {category.node.name}
          </span>
        ))
      ) : (
        <span className="ml-1">• {algoliaCategories[0]}</span>
      )}
    </span>
  )
}
