function superbowlWin(record) {
    return record.result === "W";
}
   console.log(record.find(superbowlWin));