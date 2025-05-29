import {
  removeStringsFromCategories,
} from '../lib/filter-utils';
import {COMMEMORATION_MARKER, LINK_TRANSLATOR_BIO} from '../lib/constants';

export default function Categories({ categories, route }) {

  const filteredCategories = removeStringsFromCategories(categories, [COMMEMORATION_MARKER, LINK_TRANSLATOR_BIO]);
  const categoriesShouldbeHidden = route === 'translates' || route === 'Translation'
  const categoryName =
      filteredCategories !== undefined &&
      filteredCategories.edges.node !== undefined
      ? filteredCategories.edges.node.name : ''

  return (

    <span className="ml-1">

      {filteredCategories !== undefined && filteredCategories.edges !== undefined && filteredCategories.edges.length > 0 ? (
          filteredCategories.edges.map((category, index) => (
          <span key={index} className={`ml-1 ${categoriesShouldbeHidden ? 'hidden' : ''}`}>
            • {category.node.name}
          </span>
        ))
      ) : (
        <span className="ml-1">{categoryName}</span>
      )}
    </span>
  )
}
