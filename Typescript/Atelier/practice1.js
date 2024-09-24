var messageText = "Hello Bob!"; // you should type on this line
var messageCreatedAt = new Date(); // this one too
function stringifyMessage(text, createdAt) {
    return "".concat(text, ", the ").concat(createdAt.toLocaleDateString());
}
console.log(stringifyMessage(messageText, messageCreatedAt));
var message1 = { from: "Bob", message: "Hello Alice!", isRead: true };
var message2 = { from: "Alice", message: "Hi Bob!" };
var messages = [message1, message2]; // type this line
function readMessages(messages) {
    // put some logic to set isRead to true on all messages
    return 0;
}
console.log(readMessages(messages));
var notification1 = { at: 1694011133, state: "unread" };
var notification2 = { at: 1694011532, state: "read" };
function readNotificationOrMessage(notificationOrMessage) {
    if ("isRead" in notificationOrMessage) {
        notificationOrMessage.isRead = true;
    }
    else if ("state" in notificationOrMessage) {
        notificationOrMessage.state = "read";
    }
}
readNotificationOrMessage(message2);
readNotificationOrMessage(notification2);
console.log("le message lu:", message2);
console.log("info sur la notif:", notification2);
