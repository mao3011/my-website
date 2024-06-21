document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        { 
            flower: "アネモネ", 
            meaning: "儚い恋、無邪気", 
            description: "風に揺れるアネモネは、その名の通り、恋の儚さと無邪気さを象徴します。" 
        },
        { 
            flower: "コスモス", 
            meaning: "乙女の真心、調和", 
            description: "コスモスは、その柔らかな花弁が純粋な心と人々の調和を表します。" 
        },
        { 
            flower: "スミレ", 
            meaning: "小さな幸せ、愛", 
            description: "スミレは、小さくても心に残る幸せを象徴し、純粋な愛情を伝えます。" 
        },
        { 
            flower: "ヤグルマギク", 
            meaning: "幸運、希望", 
            description: "青い花びらが印象的なヤグルマギクは、未来への希望と幸運を願う花です。" 
        },
        { 
            flower: "ツバキ", 
            meaning: "控えめな愛、優美", 
            description: "ツバキは、控えめでありながらもその存在感で人を引き付ける美しさを持ちます。" 
        },
        { 
            flower: "ホタルブクロ", 
            meaning: "感謝、忠誠", 
            description: "ホタルブクロの花言葉は感謝と忠誠。ほのかな光を放つ姿が感謝の気持ちと誠実な心を伝えます。" 
        },
        { 
            flower: "カスミソウ", 
            meaning: "感謝、幸福", 
            description: "小さくて可憐な花が集まるカスミソウは、感謝と幸福を象徴し、優しい気持ちを表します。" 
        },
        { 
            flower: "ネモフィラ", 
            meaning: "可憐、どこでも成功", 
            description: "青く美しいネモフィラは、可憐な姿と、どこでも成功を収める力を表しています。" 
        },
        { 
            flower: "ポピー", 
            meaning: "感謝、安らぎ", 
            description: "ポピーは、その鮮やかな色合いと独特の花姿から、感謝と安らぎの心を伝えます。" 
        },
        { 
            flower: "ベゴニア", 
            meaning: "親切、幸福な日々", 
            description: "ベゴニアは、多彩な色合いで親切な心と幸福な日々を象徴し、人々の心を明るくします。" 
        }
    ];

    const marqueeElement = document.querySelector('.marquee p');

    function updateQuote() {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        marqueeElement.textContent = `${randomQuote.flower}: ${randomQuote.meaning} - ${randomQuote.description}`;
    }

    if (marqueeElement) {
        updateQuote();
        setInterval(updateQuote, 5000); // 5秒ごとに更新
    }
});
