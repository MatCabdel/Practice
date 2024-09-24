const messageText: string = "Hello Bob!"; // you should type on this line
const messageCreatedAt: Date = new Date(); // this one too

function stringifyMessage(text: string, createdAt: Date): string { // this one too
	return `${text}, the ${createdAt.toLocaleDateString()}`;
}

console.log(stringifyMessage(messageText, messageCreatedAt));