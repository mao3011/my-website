// JavaScriptコードは特に必要ありませんが、複数の名言をランダムに表示したい場合に備えて、次のような機能を追加できます。

const quotes = [
    "愛はすべての感情の中で最も自己中心的である。 - オスカー・ワイルド",
    "愛は魂の安らぎであり、心の慰めである。 - ヴィクター・ユーゴー",
    "真実の愛は永遠に新しい。 - ゲーテ",
    "幸福とは、自分の意志に従って生きることだ。 - アントン・チェーホフ",
    "誠実な愛は、見えないところにこそ存在する。 - ジェーン・オースティン",
    "別離において愛の深さが測られる。 - アリストテレス"
];

const marqueeElement = document.querySelector('.marquee p');
marqueeElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];

// 一定間隔で名言を更新する場合
setInterval(() => {
    marqueeElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}, 5000); // 5秒ごとに更新

