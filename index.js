function superbowlWin(arrObject) {
    let winningYear = arrObject.find(win => {
        if (win.result === 'W') {
            return win.year
        } else {
            return undefined;
        }
    })
    return !!winningYear ? winningYear.year : undefined
}