app.factory('MessagesService', function(){
  messagesService = {};

  messagesService.messages = [];
 
  messagesService.add = function(message) {
    messagesService.messages.push(message);
  }
  
  messagesService.clear = function() {
    messagesService.messages = [];
  }

  return messagesService;
});