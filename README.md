# Firebase Water Reminder

1. Create `.env` file in your functions directory with your Telegram `BOTTOKEN` and desired `CHATID`.
2. Deploy code to firebase (billing needs to be enabled for external network communication).
3. Copy your functions API endpoint.
4. Use service like [cron-job.org](https://cron-job.org/) to call your endpoint repeatedly.
5. Done. :)
