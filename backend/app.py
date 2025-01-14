from flask import Flask, request
import discord
from discord.ext import commands

# Set up Flask app
app = Flask(__name__)

# Set up Discord bot
bot_token = "MTMyODM3NTk1NzAxNDMxOTEwNA.G2MNen.bHvj9VZEr0yhtw4gyxyqTdvughV1ECUzwRa3Dw"
bot = commands.Bot(command_prefix="!")

@app.route("/submit", methods=["POST"])
def submit_form():
    # Get the data from the form
    name = request.form.get("name")
    review = request.form.get("review")

    # Send the form data to Discord channel
    channel = bot.get_channel(1259332074788229131)
    bot.loop.create_task(channel.send(f"Name: {name}\nMessage: {review}"))

    return "Form submitted successfully!"

if __name__ == "__main__":
    bot.loop.create_task(app.run(debug=True))
    bot.run(bot_token)
