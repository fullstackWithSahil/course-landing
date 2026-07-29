"use server";

const webHooks = {
    error: "https://discord.com/api/webhooks/1406893151221714954/y9pKpyyPZ9sNwgxZGEloid9WnvXyWvXx1ezZ-10WV6lCj35u5a9zRKdX6RIW5-O5BTJv",
    pro: "https://discord.com/api/webhooks/1448151983545647229/kPFDbnQYh6ADtvKydScRcsyKZKieC2J9B-Fj_jmw9o22MDZ-u2cqnH6wY6xnaXOkNfE0",
    basic: "https://discord.com/api/webhooks/1448152174826885171/77IhfRuhh7HDIjxmo3yCUQvmCS9fGDEddSRNIx9PSZttHPA0hSGyH-Kzo9hufTNHjlsF",
    payments:
        "https://discord.com/api/webhooks/1447805463319154731/k9N_VulH1Hdfx-uFnVQpzd7BR1ZgfbD7-kgr156hodhN2K6vQh8vCG7POaUWW_3KXa-3",
    notification:
        "https://discord.com/api/webhooks/1406893124847927306/nKllDw4V5IngilsSGkB7DQhFMkIa1v2_ct5wQ-Rlz1X0ZW9p7SQ6uYLIAIMXViPnMG1h",
} as const;

export default async function sendDiscordMessage(
    message: string,
    channels: keyof typeof webHooks,
) {
    const webhook = webHooks[channels] || process.env.DISCORD_WEBHOOK;
    await fetch(webhook!, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content: message,
        }),
    });
}
