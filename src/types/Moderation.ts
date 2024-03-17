interface Categories {
    [key: string]: boolean;
}

interface CategoryScores {
    [key: string]: number;
}

interface Moderation {
    categories: Categories;
    category_scores: CategoryScores;
    flagged: boolean;
}

export {
    Moderation,
    CategoryScores,
    Categories
}