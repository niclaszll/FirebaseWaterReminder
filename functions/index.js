const functions = require('firebase-functions');
const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
dotenv.config();

const token = process.env.BOTTOKEN;
const bot = new TelegramBot(token, { polling: false });

const app = require('express')()

const sendWaterReminder = (req, res) => {
  let chatId = process.env.CHATID;
  bot.sendMessage(chatId, "Drink your water!");
  return res.json("Reminder sent.")
}

app.get('/waterminder', sendWaterReminder)

exports.api = functions.region('europe-west1').https.onRequest(app)