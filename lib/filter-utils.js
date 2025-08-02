function categoriesContainMatch(categoriesMap, stringToMatch) {
    if (categoriesMap === undefined || categoriesMap.edges === undefined) {
        return false;
    }
    const matchesMap = categoriesMap.edges.filter((category) => (
        category.node.name.toLowerCase() === stringToMatch.toLowerCase()
    ));
    return matchesMap.length > 0;
}

function categoriesContainAnyStartsWith(categoriesMap, stringToMatch) {
    // if (categoriesMap === undefined || categoriesMap.edges === undefined) {
    //     return false;
    // }
    const matchesMap = categoriesMap.edges.filter((category) => (
        category.node.name.toLowerCase().includes(stringToMatch.toLowerCase())
    )).map((category) => (category.node.name));
    return matchesMap;
}

function categoryMatchesAtLeastOneString(category, stringsToMatchArray) {
    const categoryMatchesArray = stringsToMatchArray.filter((stringToMatch) => (
        category.node.name.toLowerCase() === stringToMatch.toLowerCase()
    ));
    return categoryMatchesArray.length > 0;
}

function categoriesContainAnyMatch(categoriesMap, stringsToMatchArray) {
    const categoriesMatchesMap = categoriesMap.edges.filter((category) => {
        return categoryMatchesAtLeastOneString(category, stringsToMatchArray);
    });
    return categoriesMatchesMap.length > 0;
}

function postsByCategories(postsArray, stringToMatchArray) {
    return postsArray.filter((post) => (
        categoriesContainAnyMatch(post.node.categories, stringToMatchArray)
    ));
}

function removeStringsFromCategories(categoriesMap, stringToMatchArray) {
    if (categoriesMap === undefined || categoriesMap.edges === undefined) {
        return categoriesMap;
    }
    categoriesMap.edges = categoriesMap.edges.filter((category) => (
      !categoryMatchesAtLeastOneString(category, stringToMatchArray)
    ));
    return categoriesMap;
}

export {categoriesContainMatch, categoriesContainAnyMatch, categoriesContainAnyStartsWith, postsByCategories, removeStringsFromCategories}