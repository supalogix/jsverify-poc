function Command() {
}

Command.prototype.run = function() {
   throw Error("override me");
}

module.exports = Command;
