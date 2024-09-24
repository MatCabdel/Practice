const messageText: string = "Hello Bob!"; // you should type on this line
const messageCreatedAt: Date = new Date(); // this one too

function stringifyMessage(text: string, createdAt: Date): string { // this one too
	return `${text}, the ${createdAt.toLocaleDateString()}`;
}

console.log(stringifyMessage(messageText, messageCreatedAt));

type Message = {
  from: string;
  message: string;
  isRead?: boolean;
}

const message1: Message = { from: "Bob", message: "Hello Alice!", isRead: true };
const message2: Message = { from: "Alice", message: "Hi Bob!" };

const messages: Message [] = [message1, message2]; // type this line
function readMessages(messages: Message []) { // this one too
	// put some logic to set isRead to true on all messages
	return 0;
}
console.log(readMessages(messages));

type Notif = {
  at: number;
  state: string;
}

const notification1: Notif = { at: 1694011133, state: "unread" };
const notification2: Notif = { at: 1694011532, state: "read" };

function readNotificationOrMessage(notificationOrMessage: Message | Notif): void { // type this line
	if ("isRead" in notificationOrMessage) {
		notificationOrMessage.isRead = true; 
	} else if ("state" in notificationOrMessage) { 
		notificationOrMessage.state = "read"; 
	}
}

readNotificationOrMessage(message2); 
readNotificationOrMessage(notification2); 

console.log("le message lu:", message2); 
console.log("info sur la notif:", notification2); 

