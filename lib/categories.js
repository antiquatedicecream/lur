export const CURRENT_ISSUE_MARKER = 'Issue Three';
export const PAGES_MARKER = 'pages';
export const REPRINT_MARKER = 'reprint';
export const UKRAINIAN_MARKER = 'Ukrainian Version';
export const COMMEMORATION_MARKER = 'Commemoration';

export function categoriesContain(categoriesMap, stringToMatch) {
    const matchesMap = categoriesMap.edges.filter((category) => (
        category.node.name.toLowerCase() === stringToMatch.toLowerCase()
    ));
    return matchesMap.length > 0;
}