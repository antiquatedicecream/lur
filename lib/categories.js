export const CURRENT_ISSUE_MARKER = 'Issue Three';
export const PAGES_MARKER = 'pages';
export const REPRINT_MARKER = 'reprint';
export const UKRAINIAN_MARKER = 'Ukrainian Version';
export const COMMEMORATION_MARKER = 'Commemoration';

export function categoriesContain(categories, stringToMatch) {
    const matchesMap = categories.edges.filter((category) => (
        category.node.name === stringToMatch
    ));
    return matchesMap.length > 0;
}