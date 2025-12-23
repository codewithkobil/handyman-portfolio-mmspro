const sendToTelegram = async (data) => {
  const token = import.meta.env.VITE_TG_BOT_TOKEN;
  const chatId = import.meta.env.VITE_TG_CHAT_ID;

  const text =
    `🛠️ New Quote Request\n\n` +
    `Name: ${data.fullName}\n` +
    `Email: ${data.email}\n` +
    `Phone: ${data.phone}\n\n` +
    `Message:\n${data.description}`;

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err);
  }
};
export default sendToTelegram;
