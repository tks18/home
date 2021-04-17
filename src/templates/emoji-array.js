import { shuffle } from 'lodash';

const emojis =
  '😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👋 🤚 🖐 ✋ 🖖 👌 🤏 ✌️ 🤞 🤟 🤘 🤙 👈 👉 👆 🖕 👇 ☝️ 👍 👎 ✊ 👊 🤛 🤜 👏 🙌 👐 🤲 🤝 🙏 🚶🏻 🚶🏻‍♂️ 🚶🏻‍♀️ 🧍🏻 🧍🏻‍♂️ 🧍🏻‍♀️ 🧎🏻 🧎🏻‍♂️ 🧎🏻‍♀️';

const safeEmoji =
  '😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🤩 🥳 🤯 🤔 🤭 🤫 😨 🤗 🥱 😴 🤤 😪 😵 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 👋 🤚 🖐 ✋ 🖖 👌 🤏 ✌️ 🤞 🤟 🤘 🤙 👈 👉 👆 🧠 👀 👁 🙅‍♂️ 🙅‍♀️ 🙆 🙆‍♂️ 🙆‍♀️ 💁 💁‍♂️ 💁‍♀️ 🙋 🙋‍♂️ 🙋‍♀️ 🤷 🤷‍♂️ 🤷‍♀️ 🚶 🚶‍♂️ 🚶‍♀️ 🧍 🧍‍♂️ 🧍‍♀️ 🧎 🧎‍♂️ 🧎‍♀️ 🏃 🏃‍♂️ 🏃‍♀️ 💃 🕺 🕴 🧳 🌂 ☂️ 🧵 🧶 👓 🕶 🥽 🤸🏻 🤸🏻‍♂️ 🤸🏻‍♀️ 👨🏽‍💻 👩🏽‍💻 💣 🧨 🔮 ❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎 ❣️ 💕 💞 💓 💗 💖 💘 💝 👏 🙌 👐 🤲 🤝 🙏 💯';
const letters = '?><{}|//~-#.+abcdefghijklmnopqrstuvwxyz$#@!() *&^][';

let arrays = {
  emoji: emojis.split(' '),
  letters: letters.split(''),
  safeEmojis: safeEmoji.split(' '),
};

let concatArray = arrays.emoji.concat(arrays.letters);

export const emojiArray = shuffle(arrays.emoji);

export const safeEmojis = shuffle(arrays.safeEmojis);

export const lettersArray = shuffle(arrays.letters);

export const alphaArray = shuffle(concatArray);
