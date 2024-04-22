  const bigScore = (score) => {
    if (score > 99999) {
        const stringScore = score.toString();
        const shortened = `${stringScore.slice(0,3)}.${stringScore.slice(3,4)}k`
        score = shortened
    } else if (score > 9999) {
        const stringScore = score.toString();
        const shortened = `${stringScore.slice(0,2)}.${stringScore.slice(2,3)}k`
        score = shortened;
    } else if (score > 999) {
        const stringScore = score.toString();
        const shortened = `${stringScore.slice(0, 1)}.${stringScore.slice(1,2)}k`
        score = shortened;
    }
    return score;
}

export default bigScore;