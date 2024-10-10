export type SupportedLanguages = 'en' | 'zh' | 'es' | 'zh-TW' | 'ja' | 'de' | 'fr' | 'ru';

export interface Translations {
  welcome: string;
  unauthorized: string;
  error: string;
  current_language: string;
  language_changed: string;
  new_conversation: string;
  no_history: string;
  history_summary: string;
  current_model: string;
  available_models: string;
  model_changed: string;
  help_intro: string;
  start_description: string;
  language_description: string;
  new_description: string;
  history_description: string;
  switchmodel_description: string;
  help_description: string;
  choose_language: string;
  choose_model: string;
  language_en: string;
  language_zh: string;
  language_es: string;
  'language_zh-TW': string;  // 修改这里
  language_ja: string;
  language_de: string;
  language_fr: string;
  language_ru: string;
  image_prompt_required: string;
  image_generation_error: string;
  img_description: string;
  invalid_size: string;
  flux_description: string;
  flux_usage: string;
  invalid_aspect_ratio: string;
  original_prompt: string;
  prompt_generation_model: string;
  optimized_prompt: string;
  image_specs: string;
  command_not_found: string;
  image_analysis_error: string;
  model_not_support_multimodal: string;
}

export type TranslationKey = keyof Translations;

type TranslationsMap = Record<SupportedLanguages, Translations>;

const translations: TranslationsMap = {
  en: {
    welcome: "👋 Hey there! Welcome to your personal AI assistant bot!",
    unauthorized: "🚫 Oops! Looks like you don't have access to this bot yet.",
    error: "😅 Whoops! Something went wrong. Wanna give it another shot?",
    current_language: "🌍 You're currently chatting in English",
    language_changed: "🎉 Awesome! Your language is now set to: ",
    new_conversation: "🆕 Alright, let's start fresh! I've cleared our previous chat.",
    no_history: "🤔 Hmm... Looks like we haven't chatted before.",
    history_summary: "📜 Here's a quick recap of our previous chats:",
    current_model: "🤖 You're currently using this AI model: ",
    available_models: "🔢 Check out all these cool models we have: ",
    model_changed: "🔄 Model swap successful! We're now using: ",
    help_intro: "🧭 Here's what I can do for you:",
    start_description: "🚀 Say hi and let's start chatting",
    language_description: "🗣️ Want to switch languages? Use this",
    new_description: "🔄 Start a brand new conversation",
    history_description: "📚 Take a look at what we've chatted about",
    switchmodel_description: "🔀 Try a different AI model",
    help_description: "❓ See all available commands",
    choose_language: "🌐 Which language would you like to chat in?",
    choose_model: "🤖 Pick an AI model to chat with:",
    language_en: "🇬🇧 English",
    language_zh: "🇨🇳 Chinese",
    language_es: "🇪🇸 Spanish",
    'language_zh-TW': "🇹🇼 Chinese (Traditional)",  // 修改这里
    language_ja: "🇯🇵 Japanese",
    language_de: "🇩🇪 German",
    language_fr: "🇫🇷 French",
    language_ru: "🇷🇺 Russian",
    image_prompt_required: "🖼️ To create an image, tell me what you'd like to see!",
    image_generation_error: "😞 Uh-oh, there was a hiccup creating the image. Mind trying again?",
    img_description: "🎨 Create amazing images with DALL·E",
    invalid_size: "📏 Oops, that size doesn't work. How about trying one of these: ",
    flux_description: "🖼️ Create beautiful images using Flux",
    flux_usage: "📝 Here's how to use it: /flux <description> [aspect ratio]. You can choose from these ratios: 1:1 (default), 1:2, 3:2, 3:4, 16:9, 9:16",
    invalid_aspect_ratio: "🔢 That aspect ratio isn't quite right. You can pick from these: ",
    original_prompt: "🎨 Original Description",
    prompt_generation_model: "💬 Prompt Generation Model",
    optimized_prompt: "🌐 Enhanced Description",
    image_specs: "📐 Image Details",
    command_not_found: "❓ Hmm, I don't know that command. Type /help to see what I can do!",
    image_analysis_error: "Error analyzing image. Please try again.",
    model_not_support_multimodal: "The current model does not support image analysis. Please switch to a multimodal model.",
  },
  zh: {
    welcome: "👋 嘿，欢迎使用你的专属助手机器人！",
    unauthorized: "🚫 抱歉，您还没有权限使用这个机器人哦。",
    error: "😅 哎呀，出了点小问题。要不要再试一次？",
    current_language: "🌍 您当前的语言设置是：中文",
    language_changed: "🎉 太好了！语言已经切换为：",
    new_conversation: "🆕 好的，让我们开始一段全新的对话吧！之前的聊天记录已经清除啦。",
    no_history: "🤔 嗯...看起来我们还没有聊过天呢。",
    history_summary: "📜 来回顾一下我们之前聊了些什么：",
    current_model: "🤖 您现在使用的 AI 模型是：",
    available_models: "🔢 哇，我们有这么多模型可以选择：",
    model_changed: "🔄 换模型成功！现在我们使用的是：",
    help_intro: "🧭 来看看我都能做些什么吧：",
    start_description: "🚀 和我打个招呼，开始聊天",
    language_description: "🗣️ 想换个语言？用这个",
    new_description: "🔄 开始全新的对话",
    history_description: "📚 回顾一下我们之前聊了什么",
    switchmodel_description: "🔀 换个模型来聊天",
    help_description: "❓ 查看所有可用的命令",
    choose_language: "🌐 你想用哪种语言和我聊天呢？",
    choose_model: "🤖 来选择一个 AI 模型吧：",
    language_en: "🇬🇧 英语",
    language_zh: "🇨🇳 简体中文",
    language_es: "🇪🇸 西班牙语",
    'language_zh-TW': "🇹🇼 Chinese (Traditional)",  // 修改这里
    language_ja: "🇯🇵 Japanese",
    language_de: "🇩🇪 German",
    language_fr: "🇫🇷 French",
    language_ru: "🇷🇺 Russian",
    image_prompt_required: "🖼️ To create an image, tell me what you'd like to see!",
    image_generation_error: "😞 Uh-oh, there was a hiccup creating the image. Mind trying again?",
    img_description: "🎨 Create amazing images with DALL·E",
    invalid_size: "📏 Oops, that size doesn't work. How about trying one of these: ",
    flux_description: "🖼️ Create beautiful images using Flux",
    flux_usage: "📝 Here's how to use it: /flux <description> [aspect ratio]. You can choose from these ratios: 1:1 (default), 1:2, 3:2, 3:4, 16:9, 9:16",
    invalid_aspect_ratio: "🔢 That aspect ratio isn't quite right. You can pick from these: ",
    original_prompt: "🎨 Original Description",
    prompt_generation_model: "💬 Prompt Generation Model",
    optimized_prompt: "🌐 Enhanced Description",
    image_specs: "📐 Image Details",
    command_not_found: "❓ Hmm, I don't know that command. Type /help to see what I can do!",
    image_analysis_error: "分析图片时出错。请重试。",
    model_not_support_multimodal: "当前模型不支持图像分析。请切换到多模态模型。",
  },
  es: {
    welcome: "👋 ¡Hola! ¡Bienvenido a tu bot asistente personal con IA!",
    unauthorized: "🚫 ¡Ups! Parece que aún no tienes acceso a este bot.",
    error: "😅 ¡Vaya! Algo salió mal. ¿Quieres intentarlo de nuevo?",
    current_language: "🌍 Estás chateando en español",
    language_changed: "🎉 ¡Genial! Tu idioma ahora es: ",
    new_conversation: "🆕 ¡Perfecto, empecemos de cero! He borrado nuestra charla anterior.",
    no_history: "🤔 Mmm... Parece que aún no hemos charlado.",
    history_summary: "📜 Aquí tienes un resumen de nuestras conversaciones anteriores:",
    current_model: "🤖 Estás usando este modelo de IA: ",
    available_models: "🔢 Mira todos estos modelos geniales que tenemos: ",
    model_changed: "🔄 ¡Cambio de modelo exitoso! Ahora estamos usando: ",
    help_intro: "🧭 Esto es lo que puedo hacer por ti:",
    start_description: "🚀 Saluda y empecemos a charlar",
    language_description: "🗣️ ¿Quieres cambiar de idioma? Usa esto",
    new_description: "🔄 Iniciar una conversación totalmente nueva",
    history_description: "📚 Echa un vistazo a lo que hemos hablado",
    switchmodel_description: "🔀 Prueba un modelo de IA diferente",
    help_description: "❓ Ver todos los comandos disponibles",
    choose_language: "🌐 ¿En qué idioma te gustaría chatear?",
    choose_model: "🤖 Elige un modelo de IA para charlar:",
    language_en: "🇬🇧 Inglés",
    language_zh: "🇨🇳 Chino",
    language_es: "🇪🇸 Español",
    'language_zh-TW': "🇹🇼 Chinese (Traditional)",  // 修改这里
    language_ja: "🇯🇵 Japanese",
    language_de: "🇩🇪 German",
    language_fr: "🇫🇷 French",
    language_ru: "🇷🇺 Russian",
    image_prompt_required: "🖼️ Para crear una imagen, ¡dime qué te gustaría ver!",
    image_generation_error: "😞 Vaya, hubo un problemilla al crear la imagen. ¿Te importaría intentarlo de nuevo?",
    img_description: "🎨 Crea imágenes increíbles con DALL·E",
    invalid_size: "📏 Ups, ese tamaño no funciona. ¿Qué tal si pruebas uno de estos?: ",
    flux_description: "🖼️ Crea hermosas imágenes usando Flux",
    flux_usage: "📝 Así es como se usa: /flux <descripción> [relación de aspecto]. Puedes elegir entre estas relaciones: 1:1 (predeterminado), 1:2, 3:2, 3:4, 16:9, 9:16",
    invalid_aspect_ratio: "🔢 Esa relación de aspecto no es correcta. Puedes elegir entre estas: ",
    original_prompt: "🎨 Descripción Original",
    prompt_generation_model: "💬 Modelo de Generación de Prompts",
    optimized_prompt: "🌐 Descripción Mejorada",
    image_specs: "📐 Detalles de la Imagen",
    command_not_found: "❓ Mmm, no conozco ese comando. ¡Escribe /help para ver lo que puedo hacer!",
    image_analysis_error: "Error al analizar la imagen. Por favor, inténtelo de nuevo.",
    model_not_support_multimodal: "El modelo actual no admite análisis de imágenes. Cambie a un modelo multimodal.",
  },
  'zh-TW': {
    welcome: "👋 嘿，歡迎使用你的專屬助手機器人！",
    unauthorized: "🚫 抱歉，您還沒有權限使用這個機器人喔。",
    error: "😅 哎呀，出了點小問題。要不要再試一次？",
    current_language: "🌍 您當前的語言設置是：繁體中文",
    language_changed: "🎉 太好了！語言已經切換為：",
    new_conversation: "🆕 好的，讓我們開始一段全新的對話吧！之前的聊天記錄已經清除啦。",
    no_history: "🤔 嗯...看起來我們還沒有聊過天呢。",
    history_summary: "📜 來回顧一下我們之前聊了些什麼：",
    current_model: "🤖 您現在使用的 AI 模型是：",
    available_models: "🔢 哇，我們有這麼多模型可以選擇：",
    model_changed: "🔄 換模型成功！現在我們使用的是：",
    help_intro: "🧭 來看看我都能做些什麼吧：",
    start_description: "🚀 和我打個招呼，開始聊天",
    language_description: "🗣️ 想換個語言？用這個",
    new_description: "🔄 開始全新的對話",
    history_description: "📚 回顧一下我們之前聊了什麼",
    switchmodel_description: "🔀 換個模型來聊天",
    help_description: "❓ 查看所有可用的命令",
    choose_language: "🌐 你想用哪種語言和我聊天呢？",
    choose_model: "🤖 來選擇一個 AI 模型吧：",
    language_en: "🇬🇧 英語",
    language_zh: "🇨🇳 簡體中文",
    language_es: "🇪🇸 西班牙語",
    'language_zh-TW': "🇹🇼 繁體中文",
    language_ja: "🇯🇵 日語",
    language_de: "🇩🇪 德語",
    language_fr: "🇫🇷 法語",
    language_ru: "🇷🇺 俄語",
    image_prompt_required: "🖼️ 要創建圖像，請告訴我你想看到什麼！",
    image_generation_error: "😞 哎呀，創建圖像時出了點問題。要不要再試一次？",
    img_description: "🎨 使用 DALL·E 創建驚人的圖像",
    invalid_size: "📏 哎呀，這個尺寸不行。不如試試這些：",
    flux_description: "🖼️ 使用 Flux 創建美麗的圖像",
    flux_usage: "📝 以下是使用方法：/flux <描述> [長寬比]。你可以從這些比例中選擇：1:1（默認）、1:2、3:2、3:4、16:9、9:16",
    invalid_aspect_ratio: "🔢 這個長寬比不太對。你可以從這些中選擇：",
    original_prompt: "🎨 原始描述",
    prompt_generation_model: "💬 提示生成模型",
    optimized_prompt: "🌐 優化後的描述",
    image_specs: "📐 圖像詳情",
    command_not_found: "❓ 嗯，我不認識這個命令。輸入 /help 看看我能做什麼！",
    image_analysis_error: "分析圖片時出錯。請重試。",
    model_not_support_multimodal: "當前模型不支持圖像分析。請切換到多模態模型。",
  },
  ja: {
    welcome: "👋 こんにちは！あなた専用のAIアシスタントボットへようこそ！",
    unauthorized: "🚫 申し訳ありません。まだこのボットにアクセスする権限がないようです。",
    error: "😅 おっと！何か問題が発生しました。もう一度試してみませんか？",
    current_language: "🌍 現在の言語設定は日本語です",
    language_changed: "🎉 素晴らしい！言語が次のように設定されました：",
    new_conversation: "🆕 了解しました。新しい会話を始めましょう！以前のチャット履歴はクリアされました。",
    no_history: "🤔 うーん...まだ会話をしていないようですね。",
    history_summary: "📜 これまでの会話の要約です：",
    current_model: "🤖 現在使用中のAIモデルは：",
    available_models: "🔢 利用可能なモデルの一覧です：",
    model_changed: "🔄 モデルの切り替えに成功しました！現在使用中のモデルは：",
    help_intro: "🧭 私にできることは以下の通りです：",
    start_description: "🚀 挨拶をして会話を始める",
    language_description: "🗣️ 言語を切り替えたい場合はこちら",
    new_description: "🔄 新しい会話を始める",
    history_description: "📚 これまでの会話を振り返る",
    switchmodel_description: "🔀 別のAIモデルを試す",
    help_description: "❓ 利用可能なすべてのコマンドを見る",
    choose_language: "🌐 どの言語で会話しますか？",
    choose_model: "🤖 会話に使用するAIモデルを選んでください：",
    language_en: "🇬🇧 英語",
    language_zh: "🇨🇳 中国語（簡体字）",
    language_es: "🇪🇸 スペイン語",
    'language_zh-TW': "🇹🇼 中国語（繁体字）",
    language_ja: "🇯🇵 日本語",
    language_de: "🇩🇪 ドイツ語",
    language_fr: "🇫🇷 フランス語",
    language_ru: "🇷🇺 ロシア語",
    image_prompt_required: "🖼️ 画像を作成するには、何を見たいか教えてください！",
    image_generation_error: "😞 申し訳ありません。画像の作成中に問題が発生しました。もう一度試してみませんか？",
    img_description: "🎨 DALL·Eを使用して素晴らしい画像を作成",
    invalid_size: "📏 申し訳ありません。そのサイズは使用できません。次のいずれかを試してみてください：",
    flux_description: "🖼️ Fluxを使用して美しい画像を作成",
    flux_usage: "📝 使用方法：/flux <説明> [アスペクト比]。次の比率から選択できます：1:1（デフォルト）、1:2、3:2、3:4、16:9、9:16",
    invalid_aspect_ratio: "🔢 そのアスペクト比は正しくありません。次の中から選んでください：",
    original_prompt: "🎨 元の説明",
    prompt_generation_model: "💬 プロンプト生成モデル",
    optimized_prompt: "🌐 最適化された説明",
    image_specs: "📐 画像の詳細",
    command_not_found: "❓ すみません、そのコマンドは分かりません。/help と入力して、私にできることを確認してください！",
    image_analysis_error: "画像の分析中にエラーが発生しました。もう一度お試しください。",
    model_not_support_multimodal: "現在のモデルは画像分析をサポートしていません。マルチモーダルモデルに切り替えてください。",
  },
  de: {
    welcome: "👋 Hallo! Willkommen bei deinem persönlichen KI-Assistenten-Bot!",
    unauthorized: "🚫 Ups! Es scheint, dass du noch keinen Zugang zu diesem Bot hast.",
    error: "😅 Hoppla! Etwas ist schiefgelaufen. Möchtest du es noch einmal versuchen?",
    current_language: "🌍 Du chattest gerade auf Deutsch",
    language_changed: "🎉 Großartig! Deine Sprache ist jetzt eingestellt auf: ",
    new_conversation: "🆕 Alles klar, lass uns von vorne anfangen! Ich habe unseren vorherigen Chat gelöscht.",
    no_history: "🤔 Hmm... Es sieht so aus, als hätten wir noch nicht gechattet.",
    history_summary: "📜 Hier ist eine kurze Zusammenfassung unserer vorherigen Chats:",
    current_model: "🤖 Du verwendest gerade dieses KI-Modell: ",
    available_models: "🔢 Schau dir all diese coolen Modelle an, die wir haben: ",
    model_changed: "🔄 Modellwechsel erfolgreich! Wir verwenden jetzt: ",
    help_intro: "🧭 Hier ist, was ich für dich tun kann:",
    start_description: "🚀 Sag Hallo und lass uns anfangen zu chatten",
    language_description: "🗣️ Möchtest du die Sprache wechseln? Benutze dies",
    new_description: "🔄 Starte eine komplett neue Unterhaltung",
    history_description: "📚 Sieh dir an, worüber wir gesprochen haben",
    switchmodel_description: "🔀 Probiere ein anderes KI-Modell aus",
    help_description: "❓ Siehe alle verfügbaren Befehle",
    choose_language: "🌐 In welcher Sprache möchtest du chatten?",
    choose_model: "🤖 Wähle ein KI-Modell zum Chatten aus:",
    language_en: "🇬🇧 Englisch",
    language_zh: "🇨🇳 Chinesisch (Vereinfacht)",
    language_es: "🇪🇸 Spanisch",
    'language_zh-TW': "🇹🇼 Chinesisch (Traditionell)",
    language_ja: "🇯🇵 Japanisch",
    language_de: "🇩🇪 Deutsch",
    language_fr: "🇫🇷 Französisch",
    language_ru: "🇷🇺 Russisch",
    image_prompt_required: "🖼️ Um ein Bild zu erstellen, sag mir, was du sehen möchtest!",
    image_generation_error: "😞 Oh je, bei der Erstellung des Bildes gab es ein Problem. Möchtest du es noch einmal versuchen?",
    img_description: "🎨 Erstelle erstaunliche Bilder mit DALL·E",
    invalid_size: "📏 Ups, diese Größe funktioniert nicht. Wie wäre es mit einer von diesen: ",
    flux_description: "🖼️ Erstelle wunderschöne Bilder mit Flux",
    flux_usage: "📝 So wird es verwendet: /flux <Beschreibung> [Seitenverhältnis]. Du kannst aus diesen Verhältnissen wählen: 1:1 (Standard), 1:2, 3:2, 3:4, 16:9, 9:16",
    invalid_aspect_ratio: "🔢 Dieses Seitenverhältnis stimmt nicht ganz. Du kannst aus diesen wählen: ",
    original_prompt: "🎨 Originalbeschreibung",
    prompt_generation_model: "💬 Prompt-Generierungsmodell",
    optimized_prompt: "🌐 Verbesserte Beschreibung",
    image_specs: "📐 Bilddetails",
    command_not_found: "❓ Hmm, ich kenne diesen Befehl nicht. Gib /help ein, um zu sehen, was ich kann!",
    image_analysis_error: "Fehler bei der Bildanalyse. Bitte versuchen Sie es erneut.",
    model_not_support_multimodal: "Das aktuelle Modell unterstützt keine Bildanalyse. Bitte wechseln Sie zu einem multimodalen Modell.",
  },
  fr: {
    welcome: "👋 Salut ! Bienvenue sur votre assistant IA personnel !",
    unauthorized: "🚫 Oups ! Il semble que vous n'ayez pas encore accès à ce bot.",
    error: "😅 Oups ! Quelque chose s'est mal passé. Voulez-vous réessayer ?",
    current_language: "🌍 Vous chattez actuellement en français",
    language_changed: "🎉 Génial ! Votre langue est maintenant définie sur : ",
    new_conversation: "🆕 D'accord, commençons une nouvelle conversation ! J'ai effacé notre chat précédent.",
    no_history: "🤔 Hmm... On dirait qu'on n'a pas encore discuté.",
    history_summary: "📜 Voici un résumé rapide de nos conversations précédentes :",
    current_model: "🤖 Vous utilisez actuellement ce modèle d'IA : ",
    available_models: "🔢 Jetez un œil à tous ces modèles cool que nous avons : ",
    model_changed: "🔄 Changement de modèle réussi ! Nous utilisons maintenant : ",
    help_intro: "🧭 Voici ce que je peux faire pour vous :",
    start_description: "🚀 Dites bonjour et commençons à discuter",
    language_description: "🗣️ Vous voulez changer de langue ? Utilisez ceci",
    new_description: "🔄 Commencer une toute nouvelle conversation",
    history_description: "📚 Jetez un œil à ce dont nous avons discuté",
    switchmodel_description: "🔀 Essayez un modèle d'IA différent",
    help_description: "❓ Voir toutes les commandes disponibles",
    choose_language: "🌐 Dans quelle langue voulez-vous discuter ?",
    choose_model: "🤖 Choisissez un modèle d'IA pour discuter :",
    language_en: "🇬🇧 Anglais",
    language_zh: "🇨🇳 Chinois (Simplifié)",
    language_es: "🇪🇸 Espagnol",
    'language_zh-TW': "🇹🇼 Chinois (Traditionnel)",
    language_ja: "🇯🇵 Japonais",
    language_de: "🇩🇪 Allemand",
    language_fr: "🇫🇷 Français",
    language_ru: "🇷🇺 Russe",
    image_prompt_required: "🖼️ Pour créer une image, dites-moi ce que vous aimeriez voir !",
    image_generation_error: "😞 Oh non, il y a eu un problème lors de la création de l'image. Voulez-vous réessayer ?",
    img_description: "🎨 Créez des images incroyables avec DALL·E",
    invalid_size: "📏 Oups, cette taille ne fonctionne pas. Que diriez-vous d'essayer l'une de celles-ci : ",
    flux_description: "🖼️ Créez de belles images en utilisant Flux",
    flux_usage: "📝 Voici comment l'utiliser : /flux <description> [ratio d'aspect]. Vous pouvez choisir parmi ces ratios : 1:1 (par défaut), 1:2, 3:2, 3:4, 16:9, 9:16",
    invalid_aspect_ratio: "🔢 Ce ratio d'aspect n'est pas tout à fait correct. Vous pouvez choisir parmi ceux-ci : ",
    original_prompt: "🎨 Description originale",
    prompt_generation_model: "💬 Modèle de génération de prompt",
    optimized_prompt: "🌐 Description améliorée",
    image_specs: "📐 Détails de l'image",
    command_not_found: "❓ Hmm, je ne connais pas cette commande. Tapez /help pour voir ce que je peux faire !",
    image_analysis_error: "Erreur lors de l'analyse de l'image. Veuillez réessayer.",
    model_not_support_multimodal: "Le modèle actuel ne prend pas en charge l'analyse d'images. Veuillez passer à un modèle multimodal.",
  },
  ru: {
    welcome: "👋 Привет! Добро пожаловать в вашего персонального ИИ-ассистента!",
    unauthorized: "🚫 Упс! Похоже, у вас еще нет доступа к этому боту.",
    error: "😅 Ой! Что-то пошло не так. Хотите попробовать еще раз?",
    current_language: "🌍 Сейчас вы общаетесь на русском языке",
    language_changed: "🎉 Отлично! Ваш язык теперь установлен на: ",
    new_conversation: "🆕 Хорошо, давайте начнем сначала! Я очистил наш предыдущий чат.",
    no_history: "🤔 Хмм... Похоже, мы еще не общались.",
    history_summary: "📜 Вот краткое резюме наших предыдущих разговоров:",
    current_model: "🤖 Сейчас вы используете эту модель ИИ: ",
    available_models: "🔢 Посмотрите на все эти классные модели, которые у нас есть: ",
    model_changed: "🔄 Модель успешно изменена! Теперь мы используем: ",
    help_intro: "🧭 Вот что я могу для вас сделать:",
    start_description: "🚀 Поздоровайтесь, и давайте начнем общаться",
    language_description: "🗣️ Хотите сменить язык? Используйте это",
    new_description: "🔄 Начать совершенно новый разговор",
    history_description: "📚 Посмотреть, о чем мы говорили",
    switchmodel_description: "🔀 Попробовать другую модель ИИ",
    help_description: "❓ Посмотреть все доступные команды",
    choose_language: "🌐 На каком языке вы хотите общаться?",
    choose_model: "🤖 Выберите модель ИИ для общения:",
    language_en: "🇬🇧 Английский",
    language_zh: "🇨🇳 Китайский (упрощенный)",
    language_es: "🇪🇸 Испанский",
    'language_zh-TW': "🇹🇼 Китайский (традиционный)",
    language_ja: "🇯🇵 Японский",
    language_de: "🇩🇪 Немецкий",
    language_fr: "🇫🇷 Французский",
    language_ru: "🇷🇺 Русский",
    image_prompt_required: "🖼️ Чтобы создать изображение, скажите мне, что вы хотите увидеть!",
    image_generation_error: "😞 Ой, при создании изображения возникла проблема. Не хотите попробовать еще раз?",
    img_description: "🎨 Создавайте удивительные изображения с помощью DALL·E",
    invalid_size: "📏 Упс, этот размер не подходит. Как насчет того, чтобы попробовать один из этих: ",
    flux_description: "🖼️ Создавайте красивые изображения с помощью Flux",
    flux_usage: "📝 Вот как это использовать: /flux <описание> [соотношение сторон]. Вы можете выбрать из этих соотношений: 1:1 (по умолчанию), 1:2, 3:2, 3:4, 16:9, 9:16",
    invalid_aspect_ratio: "🔢 Это соотношение сторон не совсем правильное. Вы можете выбрать из этих: ",
    original_prompt: "🎨 Исходное описание",
    prompt_generation_model: "💬 Модель генерации подсказок",
    optimized_prompt: "🌐 Улучшенное описание",
    image_specs: "📐 Детали изображения",
    command_not_found: "❓ Хмм, я не знаю эту команду. Введите /help, чтобы увидеть, что я могу сделать!",
    image_analysis_error: "Ошибка при анализе изображения. Пожалуйста, попробуйте еще раз.",
    model_not_support_multimodal: "Текущая модель не поддерживает анализ изображений. Пожалуйста, переключитесь на мультимодальную модель.",
  },
};

export function translate(key: TranslationKey, language: SupportedLanguages = 'en'): string {
  return translations[language]?.[key] || translations['en'][key];
}