// src/app/utils/emoji-utils.ts

export function translateToEmoji(inputText: string, toolData: any): string {
    let translatedText = inputText;
    const EMOJIS = toolData;
    for (const emojiKey in EMOJIS) {
      if (Object.prototype.hasOwnProperty.call(EMOJIS, emojiKey)) {
        const emoji = EMOJIS[emojiKey];
        if (!Array.isArray(emoji.keywords)) {
          console.error(`Keywords for emoji ${emojiKey} are not an array`);
          continue;
        }
        emoji.keywords.forEach((keyword: string) => {
          const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
          translatedText = translatedText.replace(regex, emoji.char);
        });
      }
    }
    return translatedText;
  }
  
  export function translateToText(inputText: string, toolData: any): string {
    let translatedText = inputText;
    const EMOJIS = toolData;
    for (const emojiKey in EMOJIS) {
      if (Object.prototype.hasOwnProperty.call(EMOJIS, emojiKey)) {
        const emoji = EMOJIS[emojiKey];
        const regex = new RegExp(`${emoji.char}`, 'g');
        translatedText = translatedText.replace(regex, emojiKey);
      }
    }
    return translatedText;
  }
  
  export function addEmojisToText(inputText: string, toolData: any): string {
    if (!inputText || !toolData) {
      console.error('Input text or emoji data is missing');
      return inputText;
    }
  
    let translatedText = inputText;
    const EMOJIS = toolData;
    const replacedKeywords = new Set<string>();
  
    for (const emojiKey in EMOJIS) {
      if (Object.prototype.hasOwnProperty.call(EMOJIS, emojiKey)) {
        const emoji = EMOJIS[emojiKey];
  
        if (!Array.isArray(emoji.keywords)) {
          console.error(`Keywords for emoji ${emojiKey} are not an array`);
          continue;
        }
  
        emoji.keywords.forEach((keyword: string) => {
          const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
  
          if (replacedKeywords.has(keyword)) {
            return;
          }
  
          if (regex.test(translatedText)) {
            console.log(`Replacing keyword: "${keyword}" with emoji: "${emoji.char}"`);
            translatedText = translatedText.replace(regex, `${keyword} ${emoji.char}`);
            replacedKeywords.add(keyword);
          }
        });
      }
    }
    return translatedText;
  }
  