import {removeStringFromCategories} from "../lib/filter-utils";
import {COMMEMORATION_MARKER} from "../lib/constants";

export default function Categories({ categories, route }) {

  const filteredCategories = removeStringFromCategories(categories, COMMEMORATION_MARKER);
  const categoriesShouldbeHidden = route === 'translates' || route === 'Translation'

  return (

    <span className="ml-1">

      {filteredCategories.edges.length > 0 ? (
          filteredCategories.edges.map((category, index) => (
          <span key={index} className={`ml-1 ${categoriesShouldbeHidden ? 'hidden' : ''}`}>
            • {category.node.name}
          </span>
        ))
      ) : (
        <span className="ml-1">{filteredCategories.edges.node.name}</span>
      )}
    </span>
  )
}
