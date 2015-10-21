function Commands() {}

Commands.prototype.newSut = function(state) {
   throw Error("override me");
};

Commands.prototype.destroySut = function(sut) {
   throw Error("override me");
};

Commands.prototype.genInitialState = function() {
   throw Error("override me");
};

Commands.prototype.genCommand = function(state) {
   throw Error("override me");
};

module.exports = Commands;
