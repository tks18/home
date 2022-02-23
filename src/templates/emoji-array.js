import { shuffle } from 'lodash';

const emojis =
  '😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👋 🤚 🖐 ✋ 🖖 👌 🤏 ✌️ 🤞 🤟 🤘 🤙 👈 👉 👆 🖕 👇 ☝️ 👍 👎 ✊ 👊 🤛 🤜 👏 🙌 👐 🤲 🤝 🙏 🚶🏻 🚶🏻‍♂️ 🚶🏻‍♀️ 🧍🏻 🧍🏻‍♂️ 🧍🏻‍♀️ 🧎🏻 🧎🏻‍♂️ 🧎🏻‍♀️';

const safeEmoji =
  '😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🤩 🥳 🤯 🤔 🤭 🤫 😨 🤗 🥱 😴 🤤 😪 😵 👻 💀 ☠️ 👽 👾 🤖 🎃 👋 🤚 🖐 ✋ 🖖 👌 🤏 ✌️ 🤞 🤟 🤘 🤙 👈 👉 👆 🧠 👀 👁 🙅‍♂️ 🙅‍♀️ 🙆 🙆‍♂️ 🙆‍♀️ 💁 💁‍♂️ 💁‍♀️ 🙋 🙋‍♂️ 🙋‍♀️ 🤷 🤷‍♂️ 🤷‍♀️ 🚶 🚶‍♂️ 🚶‍♀️ 🧍 🧍‍♂️ 🧍‍♀️ 🧎 🧎‍♂️ 🧎‍♀️ 🏃 🏃‍♂️ 🏃‍♀️ 💃 🕺 🕴 🧳 🌂 ☂️ 🧵 🧶 👓 🕶 🥽 🤸🏻 🤸🏻‍♂️ 🤸🏻‍♀️ 👨🏽‍💻 👩🏽‍💻 💣 🧨 🔮 ❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎 ❣️ 💕 💞 💓 💗 💖 💘 💝 👏 🙌 👐 🤲 🤝 🙏 💯';
const letters = '?><{}|//~-#.+abcdefghijklmnopqrstuvwxyz$#@!() *&^][';

const arrays = {
  emoji: emojis.split(' '),
  letters: letters.split(''),
  safeEmojis: safeEmoji.split(' '),
};

const concatArray = arrays.emoji.concat(arrays.letters);

export const emojiArray = shuffle(arrays.emoji);

export const safeEmojis = shuffle(arrays.safeEmojis);

export const lettersArray = shuffle(arrays.letters);

export const alphaArray = shuffle(concatArray);
