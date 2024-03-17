import {
    Headlines
} from "../types"

function rankingLength(content: string): number {
    return content.length;
}

function rankContent(headlines: Headlines): Headlines {
    return headlines.sort((a, b) => {
        const scoreA = rankingLength(a.content);
        const scoreB = rankingLength(b.content);
        return scoreB - scoreA;
    });
}

function rankScore(headlines: Headlines): Headlines {
    return headlines.sort((a, b) => {
        const scoreA = calculateScore(a);
        const scoreB = calculateScore(b);
        return scoreB - scoreA;
    });
}
 
function calculateScore(content: any): number {
    if (typeof content !== 'object' || !content.hasOwnProperty('moderation')) return 0;

    const moderation = content.moderation;

    if (typeof moderation !== 'object' || !moderation.hasOwnProperty('categories') || !moderation.hasOwnProperty('category_scores')) return 0;

    const categoryScores: { [key: string]: number } = moderation.category_scores;

    const totalScore = Object.values(categoryScores).reduce((acc, curr) => acc + curr, 0);

    return totalScore;
}


export {
    rankingLength,
    rankContent,
    rankScore,
    calculateScore
}  