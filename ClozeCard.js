function ClozeCard(text, cloze) {

    this.text = text;
    this.cloze = cloze;

    //trying to create a function that shows that the full text will be replace with a cloze text
    this.partial = function () {
        var newText = text.replace("Who", "...");
        return newText;
    }

    this.fullText = function () {
        var added = (text + " " + cloze);
        return added;
    }

};

module.exports = ClozeCard;
