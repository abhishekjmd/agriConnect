const  CompletionScoreCheck = (requirements) => {
    const keys = Object.keys(requirements).length;
    let num = 0;
    for (let key in requirements) {
        if (requirements[key] === '') {
            num++;
        }
    }
    return (keys - num) / keys;
};

export default CompletionScoreCheck