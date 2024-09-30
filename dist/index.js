// src/env.ts
var getEnvOrDefault = (env, key, defaultValue) => {
  return env[key] || defaultValue;
};
var getConfig = (env) => ({
  openaiApiKey: env.OPENAI_API_KEY,
  openaiBaseUrl: getEnvOrDefault(env, "OPENAI_BASE_URL", "https://api.openai.com/v1"),
  openaiModels: env.OPENAI_MODELS.split(",").map((model) => model.trim()),
  telegramBotToken: env.TELEGRAM_BOT_TOKEN,
  whitelistedUsers: env.WHITELISTED_USERS.split(",").map((id) => id.trim()),
  systemInitMessage: getEnvOrDefault(env, "SYSTEM_INIT_MESSAGE", "You are a helpful assistant."),
  systemInitMessageRole: getEnvOrDefault(env, "SYSTEM_INIT_MESSAGE_ROLE", "system"),
  defaultModel: env.DEFAULT_MODEL,
  upstashRedisRestUrl: env.UPSTASH_REDIS_REST_URL,
  upstashRedisRestToken: env.UPSTASH_REDIS_REST_TOKEN,
  // TTL 配置（以秒为单位）
  languageTTL: 60 * 60 * 24 * 365,
  // 1 year
  contextTTL: 60 * 60 * 24 * 30
  // 30 days
});

// src/api/openai_api.ts
var OpenAIAPI = class {
  apiKey;
  baseUrl;
  models;
  defaultModel;
  constructor(env) {
    const config = getConfig(env);
    this.apiKey = config.openaiApiKey;
    this.baseUrl = config.openaiBaseUrl;
    this.models = config.openaiModels;
    this.defaultModel = config.defaultModel || this.models[0];
  }
  async generateResponse(messages, model) {
    const url = `${this.baseUrl}/chat/completions`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        model: model || this.defaultModel,
        messages
      })
    });
    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.choices[0].message.content.trim();
  }
  isValidModel(model) {
    return this.models.includes(model);
  }
  getDefaultModel() {
    return this.defaultModel;
  }
  getAvailableModels() {
    return this.models;
  }
};
var openai_api_default = OpenAIAPI;

// src/utils/helpers.ts
function formatCodeBlock(code, language) {
  return `\`\`\`${language}
${code}
\`\`\``;
}
function splitMessage(text, maxLength = 4096) {
  const messages = [];
  let currentMessage = "";
  const lines = text.split("\n");
  for (const line of lines) {
    if (currentMessage.length + line.length + 1 > maxLength) {
      messages.push(currentMessage.trim());
      currentMessage = "";
    }
    currentMessage += line + "\n";
  }
  if (currentMessage.trim()) {
    messages.push(currentMessage.trim());
  }
  return messages;
}
async function sendChatAction(chatId, action, env) {
  const token = env.TELEGRAM_BOT_TOKEN;
  const url = `https://api.telegram.org/bot${token}/sendChatAction`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      action
    })
  });
}

// src/utils/i18n.ts
var translations = {
  en: {
    welcome: "Welcome to the GPT Telegram Bot!",
    unauthorized: "Sorry, you're not authorized to use this bot.",
    error: "An error occurred. Please try again.",
    current_language: "Your current language is: English",
    language_instruction: "To change the language, use /language followed by en, zh, or es.",
    language_changed: "Language has been changed to: ",
    invalid_language: "Invalid language. Please use en, zh, or es.",
    new_conversation: "Starting a new conversation. Previous context has been cleared.",
    no_history: "No conversation history found.",
    history_summary: "Here's a summary of your conversation history:"
  },
  zh: {
    welcome: "\u6B22\u8FCE\u4F7F\u7528 GPT Telegram \u673A\u5668\u4EBA\uFF01",
    unauthorized: "\u62B1\u6B49\uFF0C\u60A8\u65E0\u6743\u4F7F\u7528\u6B64\u673A\u5668\u4EBA\u3002",
    error: "\u53D1\u751F\u9519\u8BEF\uFF0C\u8BF7\u91CD\u8BD5\u3002",
    current_language: "\u60A8\u5F53\u524D\u7684\u8BED\u8A00\u662F\uFF1A \u7B80\u4F53\u4E2D\u6587",
    language_instruction: "\u8981\u66F4\u6539\u8BED\u8A00\uFF0C\u8BF7\u4F7F\u7528 /language \u540E\u8DDF en\u3001zh \u6216 es\u3002",
    language_changed: "\u8BED\u8A00\u5DF2\u66F4\u6539\u4E3A\uFF1A",
    invalid_language: "\u65E0\u6548\u7684\u8BED\u8A00\uFF0C\u8BF7\u4F7F\u7528 en\u3001zh \u6216 es\u3002",
    new_conversation: "\u5F00\u59CB\u65B0\u7684\u5BF9\u8BDD\u3002\u4E4B\u524D\u7684\u4E0A\u4E0B\u6587\u5DF2\u88AB\u6E05\u9664\u3002",
    no_history: "\u672A\u627E\u5230\u5BF9\u8BDD\u5386\u53F2\u3002",
    history_summary: "\u4EE5\u4E0B\u662F\u60A8\u7684\u5BF9\u8BDD\u5386\u53F2\u6458\u8981\uFF1A"
  },
  es: {
    welcome: "\xA1Bienvenido al bot de GPT en Telegram!",
    unauthorized: "Lo siento, no est\xE1s autorizado para usar este bot.",
    error: "Ocurri\xF3 un error. Por favor, int\xE9ntalo de nuevo.",
    current_language: "Tu idioma actual es: Espa\xF1ol",
    language_instruction: "Para cambiar el idioma, usa /language seguido de en, zh o es.",
    language_changed: "El idioma ha sido cambiado a: ",
    invalid_language: "Idioma no v\xE1lido. Usa en, zh o es.",
    new_conversation: "Iniciando una nueva conversaci\xF3n. El contexto anterior ha sido borrado.",
    no_history: "No se encontr\xF3 historial de conversaci\xF3n.",
    history_summary: "Aqu\xED tienes un resumen de tu historial de conversaci\xF3n:"
  }
};
function translate(key, language = "en") {
  return translations[language][key] || translations["en"][key];
}

// src/config/commands.ts
var commands = [
  {
    name: "start",
    description: "Start the bot",
    action: async (chatId, bot) => {
      const userId = chatId.toString();
      const language = await bot.getUserLanguage(userId);
      await bot.sendMessage(chatId, translate("welcome", language));
    }
  },
  {
    name: "language",
    description: "Set your preferred language",
    action: async (chatId, bot, args) => {
      const userId = chatId.toString();
      const currentLanguage = await bot.getUserLanguage(userId);
      if (args.length === 0) {
        await bot.sendMessage(chatId, translate("current_language", currentLanguage) + currentLanguage);
        await bot.sendMessage(chatId, translate("language_instruction", currentLanguage));
        return;
      }
      const newLanguage = args[0].toLowerCase();
      if (["en", "zh", "es"].includes(newLanguage)) {
        await bot.setUserLanguage(userId, newLanguage);
        await bot.sendMessage(chatId, translate("language_changed", newLanguage));
      } else {
        await bot.sendMessage(chatId, translate("invalid_language", currentLanguage));
      }
    }
  },
  {
    name: "new",
    description: "Start a new conversation",
    action: async (chatId, bot) => {
      const userId = chatId.toString();
      await bot.clearContext(userId);
    }
  },
  {
    name: "history",
    description: "Summarize conversation history",
    action: async (chatId, bot) => {
      const userId = chatId.toString();
      const language = await bot.getUserLanguage(userId);
      const summary = await bot.summarizeHistory(userId);
      await bot.sendMessage(chatId, summary || translate("no_history", language));
    }
  }
  // 可以添加更多命令
];

// src/utils/redis.ts
var RedisClient = class {
  url;
  token;
  config;
  constructor(env) {
    this.config = getConfig(env);
    this.url = this.config.upstashRedisRestUrl;
    this.token = this.config.upstashRedisRestToken;
  }
  async get(key) {
    const response = await fetch(`${this.url}/get/${key}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.result;
  }
  async set(key, value, ttl) {
    const url = ttl ? `${this.url}/set/${key}/${value}?EX=${ttl}` : `${this.url}/set/${key}/${value}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }
  async del(key) {
    const response = await fetch(`${this.url}/del/${key}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }
  async setLanguage(userId, language) {
    await this.set(`language:${userId}`, language, this.config.languageTTL);
  }
  async appendContext(userId, newContext) {
    const key = `context:${userId}`;
    const existingContext = await this.get(key);
    const updatedContext = existingContext ? `${existingContext}
${newContext}` : newContext;
    await this.set(key, updatedContext, this.config.contextTTL);
  }
};

// src/api/telegram.ts
var TelegramBot = class {
  token;
  apiUrl;
  whitelistedUsers;
  systemMessage;
  env;
  commands;
  redis;
  modelAPI;
  constructor(env) {
    const config = getConfig(env);
    this.token = config.telegramBotToken;
    this.apiUrl = `https://api.telegram.org/bot${this.token}`;
    this.whitelistedUsers = config.whitelistedUsers;
    this.systemMessage = config.systemInitMessage;
    this.env = env;
    this.commands = commands;
    this.redis = new RedisClient(env);
    this.modelAPI = new openai_api_default(env);
  }
  async executeCommand(commandName, chatId, args) {
    const command = this.commands.find((cmd) => cmd.name === commandName);
    if (command) {
      await command.action(chatId, this, args);
    } else {
      console.log(`Unknown command: ${commandName}`);
    }
  }
  async sendMessage(chatId, text, parseMode = "Markdown") {
    const messages = splitMessage(text);
    const results = [];
    for (const message of messages) {
      const url = `${this.apiUrl}/sendMessage`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: parseMode
        })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      results.push(result);
    }
    return results;
  }
  async handleUpdate(update) {
    if (update.message && update.message.text) {
      const chatId = update.message.chat.id;
      const userId = update.message.from?.id?.toString();
      if (!userId) {
        console.error("User ID is undefined");
        return;
      }
      const text = update.message.text;
      const language = await this.getUserLanguage(userId);
      if (this.isUserWhitelisted(userId)) {
        if (text.startsWith("/")) {
          const [commandName, ...args] = text.slice(1).split(" ");
          await this.executeCommand(commandName, chatId, args);
        } else {
          try {
            await sendChatAction(chatId, "typing", this.env);
            const context = await this.getContext(userId);
            const messages = [
              { role: "system", content: this.systemMessage },
              ...context ? [{ role: "user", content: context }] : [],
              { role: "user", content: text }
            ];
            const response = await this.modelAPI.generateResponse(messages);
            const formattedResponse = this.formatResponse(response);
            await this.sendMessage(chatId, formattedResponse);
            await this.storeContext(userId, `User: ${text}
Assistant: ${response}`);
          } catch (error) {
            console.error("Error generating response:", error);
            await this.sendMessage(chatId, translate("error", language));
          }
        }
      } else {
        await this.sendMessage(chatId, translate("unauthorized", language));
      }
    }
  }
  async getUserLanguage(userId) {
    const language = await this.redis.get(`language:${userId}`);
    return language || "en";
  }
  async setUserLanguage(userId, language) {
    await this.redis.setLanguage(userId, language);
  }
  async storeContext(userId, context) {
    await this.redis.appendContext(userId, context);
  }
  async getContext(userId) {
    return await this.redis.get(`context:${userId}`);
  }
  async clearContext(userId) {
    await this.redis.del(`context:${userId}`);
    const language = await this.getUserLanguage(userId);
    await this.sendMessage(parseInt(userId), translate("new_conversation", language));
  }
  async summarizeHistory(userId) {
    const context = await this.getContext(userId);
    const language = await this.getUserLanguage(userId);
    if (!context) {
      return translate("no_history", language);
    }
    const languageNames = {
      "en": "English",
      "zh": "Chinese",
      "es": "Spanish"
    };
    const messages = [
      { role: "system", content: `Summarize the following conversation in ${languageNames[language]}:` },
      { role: "user", content: context }
    ];
    const summary = await this.modelAPI.generateResponse(messages);
    return `${translate("history_summary", language)}

${summary}`;
  }
  formatResponse(response) {
    const codeBlockRegex = /```(\w+)?\n([\s\S]+?)```/g;
    return response.replace(codeBlockRegex, (match, language, code) => {
      return formatCodeBlock(code.trim(), language || "");
    });
  }
  isUserWhitelisted(userId) {
    return this.whitelistedUsers.includes(userId);
  }
  async handleWebhook(request) {
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }
    try {
      const update = await request.json();
      await this.handleUpdate(update);
      return new Response("OK", { status: 200 });
    } catch (error) {
      console.error("Error processing webhook:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  }
  async setWebhook(url) {
    const setWebhookUrl = `${this.apiUrl}/setWebhook`;
    const response = await fetch(setWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url })
    });
    if (!response.ok) {
      throw new Error(`Failed to set webhook: ${response.statusText}`);
    }
    const result = await response.json();
    if (!result.ok) {
      throw new Error(`Telegram API error: ${result.description}`);
    }
  }
};
var telegram_default = TelegramBot;

// src/index.ts
var src_default = {
  async fetch(request, env, ctx) {
    const bot = new telegram_default(env);
    const url = new URL(request.url);
    console.log(`Received request for path: ${url.pathname}`);
    try {
      if (url.pathname === "/webhook") {
        console.log("Processing webhook request");
        return await bot.handleWebhook(request);
      }
      if (url.pathname === "/" || url.pathname === "") {
        console.log("Serving root path");
        return new Response("Hello! This is your Telegram bot worker.", {
          status: 200,
          headers: { "Content-Type": "text/plain" }
        });
      }
      console.log("Path not found");
      return new Response("Not Found", {
        status: 404,
        headers: { "Content-Type": "text/plain" }
      });
    } catch (error) {
      console.error("Error processing request:", error);
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      return new Response(`Internal Server Error: ${errorMessage}`, {
        status: 500,
        headers: { "Content-Type": "text/plain" }
      });
    }
  }
};
export {
  src_default as default
};
//# sourceMappingURL=index.js.map
