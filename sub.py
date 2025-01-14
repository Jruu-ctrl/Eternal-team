from flask import Flask, request, jsonify
import discord
import asyncio

app = Flask(__name__)

# Discord bot setup
intents = discord.Intents.default()
sub = discord.Client(intents=intents)

TOKEN = "MTMyODM3NTk1NzAxNDMxOTEwNA.G2MNen.bHvj9VZEr0yhtw4gyxyqTdvughV1ECUzwRa3Dw"
CHANNEL_ID = 1259332074788229131  # Replace with the ID of your Discord channel

@app.route("/send-to-discord", methods=["POST"])
def send_to_discord():
    data = request.json
    name = data.get("name")
    mdp = data.get("mdp")

    if name and mdp:
        # Use asyncio to send a message via the bot
        asyncio.run(send_message_to_discord(name, mdp))
        return jsonify({"status": "success", "message": "Data sent to Discord."})
    else:
        return jsonify({"status": "error", "message": "Name and MDP are required."}), 400

async def send_message_to_discord(name, mdp):
    channel = sub.get_channel(CHANNEL_ID)
    if channel:
        await channel.send(f"Name: {name}\nMDP: {mdp}")

if __name__ == "__main__":
    sub.loop.create_task(sub.start(TOKEN))  # Start the bot in the background
    app.run(port=5000)  # Start the Flask app
