
// Add your requirements
var restify = require('restify'); 
var builder = require('botbuilder'); 

var appId = process.env.MY_APP_ID || "Messing Your App ID"
var appSecret = process.env.MY_APP_SECRET || "Messing Your App Secret"
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.PORT || 3000, function() 
{
   console.log('%s listening to %s', server.name, server.url); 
});
server.get('/', restify.serveStatic({
 directory: __dirname,
 default: '/index.html'
}));
// Create chat bot
var connector = new builder.ChatConnector
({ appId: process.env.MY_APP_ID, appSecret:  process.env.MY_APP_SECRET }); 
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

// Create bot dialogs
bot.dialog('/',new builder.SimpleDialog( function (session) {
    session.send("Hello World");
}));