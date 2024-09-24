var messageText = "Hello Bob!"; // you should type on this line
var messageCreatedAt = new Date(); // this one too
function stringifyMessage(text, createdAt) {
    return "".concat(text, ", the ").concat(createdAt.toLocaleDateString());
}
console.log(stringifyMessage(messageText, messageCreatedAt));
