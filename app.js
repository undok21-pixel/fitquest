const baseQuestions = [
  {
    category: "verbal",
    tag: "言語・二語の関係",
    question: "「医師：診察」と同じ関係になるものを選んでください。",
    sub: "左の語が、右の行為を職業として行う関係です。",
    answers: ["教師：授業", "生徒：学校", "作家：書店", "料理：調理"],
    correct: 0,
    title: "「職業」と「その職業が行うこと」の関係",
    explanation: "医師が診察をするように、教師は授業をします。二語の役割を短い文にすると見抜きやすくなります。"
  },
  {
    category: "verbal",
    tag: "言語・語句の意味",
    question: "「杞憂」の意味として最も近いものを選んでください。",
    sub: "文脈：結果が出る前から失敗を心配するのは、杞憂に終わるかもしれない。",
    answers: ["取り越し苦労", "突然の幸運", "慎重な判断", "過去への後悔"],
    correct: 0,
    title: "杞憂 = 必要のない心配",
    explanation: "「起こるか分からないことを、むやみに心配すること」を表します。例文の前後からも推測できます。"
  },
  {
    category: "verbal",
    tag: "言語・空欄補充",
    question: "文の空欄に入る最も適切な接続語はどれですか。",
    sub: "新サービスの利用者は増えている。＿＿＿、収益化にはまだ課題が残っている。",
    answers: ["したがって", "しかし", "たとえば", "つまり"],
    correct: 1,
    title: "前後が逆向きなので「しかし」",
    explanation: "利用者増はプラス、課題が残るのはマイナスです。内容が対立するときは逆接の接続語を選びます。"
  },
  {
    category: "verbal",
    tag: "言語・反対語",
    question: "「簡潔」の反対の意味に最も近い言葉を選んでください。",
    sub: "「簡潔」は、短く要点がまとまっている様子を表します。",
    answers: ["明瞭", "冗長", "正確", "慎重"],
    correct: 1,
    title: "簡潔の反対は「冗長」",
    explanation: "冗長は、話や文章が必要以上に長く、無駄が多いことです。対義語は意味を短い言葉に置き換えて考えます。"
  },
  {
    category: "verbal",
    tag: "言語・文章整序",
    question: "「結論 → 理由」の自然な順になる組み合わせを選んでください。",
    sub: "①そのため、計画の見直しが必要だ。 ②当初より費用が増加している。",
    answers: ["①だけ", "②だけ", "① → ②", "② → ①"],
    correct: 3,
    title: "理由のあとに結論を置く",
    explanation: "費用が増えたことが理由で、計画の見直しが結論です。「そのため」は前の内容を受けるので②→①になります。"
  },
  {
    category: "numeric",
    tag: "計数・割合",
    question: "定価8,000円の商品を20%引きで購入しました。支払額はいくらですか。",
    sub: "割引後の割合に注目して計算しましょう。",
    answers: ["1,600円", "6,000円", "6,400円", "7,800円"],
    correct: 2,
    title: "8,000 × 0.8 = 6,400",
    explanation: "20%引きは、定価の80%を支払うという意味です。8,000円 × 0.8 = 6,400円です。"
  },
  {
    category: "numeric",
    tag: "計数・速さ",
    question: "時速60kmで1時間30分進むと、移動距離は何kmですか。",
    sub: "距離 = 速さ × 時間。30分を時間に直します。",
    answers: ["40km", "75km", "90km", "120km"],
    correct: 2,
    title: "60 × 1.5 = 90km",
    explanation: "1時間30分は1.5時間です。速さ60km/h × 時間1.5hで、距離は90kmになります。"
  },
  {
    category: "numeric",
    tag: "計数・表の読み取り",
    question: "前月から今月にかけて、売上の増加率が最も高い商品はどれですか。",
    sub: "増えた金額ではなく、前月を基準にした割合を比較します。",
    visual: `<table class="data-table"><tr><th>商品</th><th>前月</th><th>今月</th></tr><tr><td>A</td><td>100万円</td><td>120万円</td></tr><tr><td>B</td><td>50万円</td><td>70万円</td></tr><tr><td>C</td><td>200万円</td><td>230万円</td></tr></table>`,
    answers: ["商品A", "商品B", "商品C", "すべて同じ"],
    correct: 1,
    title: "商品Bは40%増",
    explanation: "Aは20%、Bは40%、Cは15%の増加です。「増加額 ÷ 前月」で増加率を比べます。"
  },
  {
    category: "numeric",
    tag: "計数・平均",
    question: "4人のテスト得点が70点、80点、90点、60点でした。平均点はいくつですか。",
    sub: "合計点を人数で割って求めます。",
    answers: ["70点", "75点", "80点", "85点"],
    correct: 1,
    title: "合計300点 ÷ 4人 = 75点",
    explanation: "70 + 80 + 90 + 60 = 300です。これを4人で割ると平均は75点になります。"
  },
  {
    category: "numeric",
    tag: "計数・比",
    question: "赤と青のボールの個数比が3：2で、合計が25個です。赤は何個ですか。",
    sub: "比の合計を使って、1つ分の量を求めましょう。",
    answers: ["10個", "12個", "15個", "18個"],
    correct: 2,
    title: "25 ÷ 5 × 3 = 15個",
    explanation: "比の合計は3+2=5です。1つ分は25÷5=5個なので、赤は5×3=15個です。"
  },
  {
    category: "logic",
    tag: "推理・数列",
    question: "次の数列の「？」に入る数字を選んでください。",
    sub: "隣り合う数字の差に注目しましょう。",
    visual: `<div class="sequence"><span>2</span><i>→</i><span>5</span><i>→</i><span>11</span><i>→</i><span>?</span></div>`,
    answers: ["17", "20", "23", "24"],
    correct: 2,
    title: "前の数を2倍して1を足す",
    explanation: "2×2+1=5、5×2+1=11なので、11×2+1=23です。差が3、6、12と倍になる考え方でも解けます。"
  },
  {
    category: "logic",
    tag: "推理・命題",
    question: "「すべての営業担当は社員である」「田中さんは営業担当である」から、必ず言えることは？",
    sub: "書かれている条件だけを使って判断してください。",
    answers: ["田中さんは社員である", "社員は全員営業担当である", "田中さんは成績が良い", "営業担当は田中さんだけである"],
    correct: 0,
    title: "集合の包含関係をたどる",
    explanation: "営業担当は全員「社員」という集合に含まれます。田中さんは営業担当なので、必ず社員だと言えます。"
  },
  {
    category: "logic",
    tag: "推理・順序",
    question: "AはBより背が高く、CはAより背が高い。3人を背の高い順に並べると？",
    sub: "比較を一本の不等号でつないでみましょう。",
    answers: ["A・B・C", "B・A・C", "C・A・B", "C・B・A"],
    correct: 2,
    title: "C > A > B",
    explanation: "A > B、C > AをつなぐとC > A > Bです。比較問題は記号に置き換えると迷いにくくなります。"
  },
  {
    category: "logic",
    tag: "推理・規則性",
    question: "アルファベットが「A、C、F、J、？」と並んでいます。次に来る文字は？",
    sub: "何文字ずつ進んでいるかに注目してください。",
    answers: ["M", "N", "O", "P"],
    correct: 2,
    title: "進む数が1つずつ増える",
    explanation: "Aから2つ進んでC、3つ進んでF、4つ進んでJです。次は5つ進むのでOになります。"
  },
  {
    category: "logic",
    tag: "推理・位置関係",
    question: "北を向いて右へ90度、さらに左へ180度回転しました。最後に向いている方角は？",
    sub: "一度ずつ向きを変えて追ってみましょう。",
    answers: ["北", "東", "南", "西"],
    correct: 3,
    title: "北 → 東 → 西",
    explanation: "北から右へ90度で東、東から左へ180度で西を向きます。図に矢印を描くと確実です。"
  },
  {
    category: "personality",
    tag: "性格傾向・回答練習",
    question: "初めての仕事に取り組むとき、あなたに最も近い行動は？",
    sub: "性格検査に正解はありません。実際の自分に近い回答をテンポよく選びましょう。",
    answers: ["まず全体像を整理する", "すぐ試しながら覚える", "経験者に進め方を聞く", "細かな手順を確認する"],
    correct: null,
    title: "自分らしく、一貫して答えられています",
    explanation: "性格検査では自分を良く見せようとしすぎず、似た質問にも一貫した回答をすることが大切です。"
  },
  {
    category: "personality",
    tag: "性格傾向・回答練習",
    question: "チームで意見が割れたとき、あなたが最初にすることは？",
    sub: "理想の人物像ではなく、普段の行動を思い浮かべてください。",
    answers: ["全員の意見を整理する", "自分の案を強く提案する", "判断できる人に任せる", "一度時間を置く"],
    correct: null,
    title: "回答の速さも本番対策のひとつ",
    explanation: "深く考えすぎず、直感に近い回答を選ぶ練習です。一問ごとの正解・不正解はありません。"
  },
  {
    category: "personality",
    tag: "性格傾向・回答練習",
    question: "締め切りが遠い仕事を任されたとき、あなたに最も近い進め方は？",
    sub: "普段の仕事で自然に取る行動を選んでください。",
    answers: ["すぐ計画を立てる", "期限直前に集中する", "小さく着手して様子を見る", "周囲の進め方に合わせる"],
    correct: null,
    title: "計画性に関する回答です",
    explanation: "どの選択肢にも優劣はありません。似た場面を問う設問でも、自分の普段の行動を基準に答えましょう。"
  },
  {
    category: "personality",
    tag: "性格傾向・回答練習",
    question: "予想外のトラブルが起きたとき、最初に取りやすい行動は？",
    sub: "理想ではなく、実際の自分に近いものを選びます。",
    answers: ["原因を冷静に調べる", "すぐ周囲に共有する", "まず応急対応する", "少し考えてから動く"],
    correct: null,
    title: "状況対応の傾向を確認する設問です",
    explanation: "性格検査では回答全体の一貫性も見られます。自分らしい選択をテンポよく続けることが大切です。"
  },
  {
    category: "personality",
    tag: "性格傾向・回答練習",
    question: "新しいチームに入ったとき、あなたが自然にすることは？",
    sub: "最も望ましい行動ではなく、自分に近い行動を選んでください。",
    answers: ["自分から話しかける", "まず周囲を観察する", "役割を確認する", "知っている人を探す"],
    correct: null,
    title: "対人場面での自然な傾向です",
    explanation: "無理に社交的な回答を選ぶ必要はありません。実際の自分に近い回答ほど、結果も役立つものになります。"
  }
];

function createChoiceQuestion({ category, tag, question, sub, correctAnswer, distractors, title, explanation, visual }) {
  const answers = shuffle([correctAnswer, ...distractors]);
  return {
    category,
    tag,
    question,
    sub,
    answers,
    correct: answers.indexOf(correctAnswer),
    title,
    explanation,
    ...(visual ? { visual } : {})
  };
}

function buildVerbalQuestions() {
  const synonyms = [
    ["端的", "要点をはっきり示すさま", ["遠回しなさま", "変化が激しいさま", "慎重に迷うさま"]],
    ["顕著", "はっきり目立つさま", ["静かで穏やかなさま", "一時的であるさま", "複雑に入り組むさま"]],
    ["柔軟", "状況に応じて変えられるさま", ["方針を決して変えないさま", "行動が非常に速いさま", "内容が不明確なさま"]],
    ["妥当", "適切で無理がないさま", ["新しく珍しいさま", "規模が非常に大きいさま", "根拠が不足しているさま"]],
    ["俯瞰", "全体を高い視点から見ること", ["細部だけを詳しく調べること", "過去の失敗を忘れること", "相手の意見に反対すること"]],
    ["踏襲", "以前のやり方を受け継ぐこと", ["古い方法を全面的に廃止すること", "複数の案を比較すること", "責任の所在を調べること"]],
    ["示唆", "それとなく気づかせること", ["強く命令すること", "内容を完全に否定すること", "結果を数字で確定すること"]],
    ["懸念", "気がかりで心配なこと", ["達成による満足", "突然の方針変更", "意見の完全な一致"]],
    ["精査", "細かく詳しく調べること", ["おおまかに予想すること", "すぐに結論を出すこと", "順番を入れ替えること"]],
    ["暫定", "正式決定まで仮に定めること", ["今後も変更しないこと", "過去にさかのぼること", "複数を一つにまとめること"]],
    ["網羅", "必要なものを広く含むこと", ["一部だけを選ぶこと", "順序を逆にすること", "内容を秘密にすること"]],
    ["進捗", "物事の進み具合", ["最終的な利益", "担当者の人数", "計画を立てた理由"]],
    ["乖離", "二つのものが離れること", ["互いに近づくこと", "同時に終了すること", "順番に並ぶこと"]],
    ["簡素", "飾りがなく簡単なさま", ["華やかで複雑なさま", "動きが素早いさま", "判断が正確なさま"]],
    ["明瞭", "はっきりして分かりやすいさま", ["内容が曖昧なさま", "態度が控えめなさま", "変化が少ないさま"]]
  ];

  const antonyms = [
    ["拡大", "縮小", ["増加", "発展", "延長"]],
    ["承認", "否認", ["賛成", "確認", "許可"]],
    ["具体", "抽象", ["詳細", "実際", "明確"]],
    ["楽観", "悲観", ["安心", "期待", "歓喜"]],
    ["能動", "受動", ["活動", "積極", "自発"]],
    ["供給", "需要", ["提供", "生産", "補充"]],
    ["原因", "結果", ["理由", "発端", "要因"]],
    ["上昇", "下降", ["向上", "増進", "前進"]],
    ["統合", "分離", ["結合", "連携", "集合"]],
    ["必然", "偶然", ["当然", "確実", "不可避"]],
    ["慎重", "軽率", ["丁寧", "安全", "堅実"]],
    ["普遍", "特殊", ["一般", "共通", "通常"]],
    ["簡略", "詳細", ["省略", "短縮", "要約"]],
    ["賛成", "反対", ["同意", "支持", "承諾"]],
    ["開始", "終了", ["着手", "発足", "始動"]]
  ];

  const relations = [
    ["画家：絵画", "作曲家：楽曲", ["図書館：書籍", "記者：新聞社", "観客：劇場"]],
    ["鳥：翼", "魚：ひれ", ["船：港", "花：庭", "机：椅子"]],
    ["学校：教育", "病院：治療", ["駅：電車", "会社：社員", "公園：遊具"]],
    ["春：四季", "月曜：曜日", ["朝：時計", "本：文字", "海：波"]],
    ["鍵：施錠", "はさみ：切断", ["靴：歩道", "窓：部屋", "鉛筆：紙"]],
    ["種：植物", "卵：鳥", ["雨：雲", "川：海", "土：畑"]],
    ["警察官：治安", "消防士：消火", ["選手：観客", "医師：病院", "店員：商品"]],
    ["小麦：パン", "木材：家具", ["料理：皿", "水：川", "商品：店"]],
    ["辞書：言葉", "地図：場所", ["時計：数字", "新聞：記者", "教科書：学校"]],
    ["温度計：温度", "体重計：重さ", ["定規：紙", "鏡：顔", "電話：会話"]],
    ["努力：成果", "練習：上達", ["会議：資料", "睡眠：夜", "通勤：会社"]],
    ["砂糖：甘い", "酢：酸っぱい", ["水：透明", "火：赤い", "氷：冬"]],
    ["子犬：犬", "苗木：木", ["葉：森", "卵：料理", "糸：布"]],
    ["裁判所：裁判", "議会：審議", ["空港：飛行機", "銀行：預金者", "工場：製品"]],
    ["質問：回答", "注文：提供", ["開始：途中", "道路：自動車", "読書：図書館"]]
  ];

  return [
    ...synonyms.map(([word, correctAnswer, distractors]) => createChoiceQuestion({
      category: "verbal",
      tag: "言語・語句の意味",
      question: `「${word}」の意味として最も近いものを選んでください。`,
      sub: "仕事でよく使われる語句の意味を確認しましょう。",
      correctAnswer,
      distractors,
      title: `${word}の意味`,
      explanation: `「${word}」は「${correctAnswer}」という意味です。文中での使われ方も一緒に覚えると定着します。`
    })),
    ...antonyms.map(([word, correctAnswer, distractors]) => createChoiceQuestion({
      category: "verbal",
      tag: "言語・反対語",
      question: `「${word}」の反対の意味に最も近い言葉はどれですか。`,
      sub: "元の言葉を短く言い換えてから考えましょう。",
      correctAnswer,
      distractors,
      title: `${word}の反対は「${correctAnswer}」`,
      explanation: `「${word}」と「${correctAnswer}」は反対の意味を表す組み合わせです。`
    })),
    ...relations.map(([pair, correctAnswer, distractors]) => createChoiceQuestion({
      category: "verbal",
      tag: "言語・二語の関係",
      question: `「${pair}」と同じ関係になるものを選んでください。`,
      sub: "二つの言葉を短い文でつないで関係を考えます。",
      correctAnswer,
      distractors,
      title: "二語の役割を文にして確認",
      explanation: `「${pair}」と「${correctAnswer}」は、二つの語の役割や関係が共通しています。`
    }))
  ];
}

function buildNumericQuestions() {
  const generated = [];

  for (let i = 0; i < 10; i += 1) {
    const price = 3000 + i * 1000;
    const discount = [10, 20, 25, 30, 40][i % 5];
    const answer = price * (100 - discount) / 100;
    generated.push(createChoiceQuestion({
      category: "numeric",
      tag: "計数・割合",
      question: `${price.toLocaleString()}円の商品を${discount}%引きで購入すると、支払額はいくらですか。`,
      sub: "元の価格に、割引後の割合を掛けます。",
      correctAnswer: `${answer.toLocaleString()}円`,
      distractors: [
        `${(price * discount / 100).toLocaleString()}円`,
        `${(answer + 500).toLocaleString()}円`,
        `${(price - 200).toLocaleString()}円`
      ],
      title: `${price.toLocaleString()} × ${(100 - discount) / 100} = ${answer.toLocaleString()}`,
      explanation: `${discount}%引きは定価の${100 - discount}%を支払います。答えは${answer.toLocaleString()}円です。`
    }));
  }

  for (let i = 0; i < 10; i += 1) {
    const start = 40 + i * 20;
    const percent = [10, 20, 25, 30, 40][i % 5];
    const increase = start * percent / 100;
    const end = start + increase;
    generated.push(createChoiceQuestion({
      category: "numeric",
      tag: "計数・増加率",
      question: `利用者数が${start}人から${end}人に増えました。増加率は何%ですか。`,
      sub: "増加した数を、増加前の数で割ります。",
      correctAnswer: `${percent}%`,
      distractors: [`${percent + 5}%`, `${percent + 10}%`, `${Math.max(5, percent - 10)}%`],
      title: `${increase} ÷ ${start} × 100 = ${percent}%`,
      explanation: `増加数は${increase}人です。${increase}÷${start}×100で、増加率は${percent}%になります。`
    }));
  }

  for (let i = 0; i < 10; i += 1) {
    const base = 50 + i * 3;
    const values = [base, base + 10, base + 20, base + 30];
    const answer = base + 15;
    generated.push(createChoiceQuestion({
      category: "numeric",
      tag: "計数・平均",
      question: `${values.join("点、")}点の4つの得点があります。平均は何点ですか。`,
      sub: "すべてを足して、データの個数で割ります。",
      correctAnswer: `${answer}点`,
      distractors: [`${answer - 10}点`, `${answer + 5}点`, `${answer + 10}点`],
      title: `合計 ÷ 4 = ${answer}点`,
      explanation: `${values.join(" + ")}を4で割ると、平均は${answer}点です。`
    }));
  }

  for (let i = 0; i < 10; i += 1) {
    const leftRatio = 3 + i % 4;
    const rightRatio = 1 + i % 2;
    const unit = 3 + i;
    const total = (leftRatio + rightRatio) * unit;
    const answer = leftRatio * unit;
    generated.push(createChoiceQuestion({
      category: "numeric",
      tag: "計数・比",
      question: `AとBの個数比は${leftRatio}：${rightRatio}で、合計は${total}個です。Aは何個ですか。`,
      sub: "比の合計から、比1つ分の数を求めます。",
      correctAnswer: `${answer}個`,
      distractors: [`${rightRatio * unit}個`, `${total}個`, `${answer + unit * 3}個`],
      title: `${total} ÷ ${leftRatio + rightRatio} × ${leftRatio} = ${answer}`,
      explanation: `比の合計は${leftRatio + rightRatio}です。1つ分は${unit}個なので、Aは${answer}個です。`
    }));
  }

  for (let i = 0; i < 5; i += 1) {
    const speed = 40 + i * 10;
    const hours = 2 + i;
    const distance = speed * hours;
    generated.push(createChoiceQuestion({
      category: "numeric",
      tag: "計数・速さ",
      question: `時速${speed}kmで${hours}時間進むと、移動距離は何kmですか。`,
      sub: "距離 = 速さ × 時間で求めます。",
      correctAnswer: `${distance}km`,
      distractors: [`${speed + hours}km`, `${distance - speed}km`, `${distance + 20}km`],
      title: `${speed} × ${hours} = ${distance}km`,
      explanation: `時速${speed}kmで${hours}時間進むため、距離は${distance}kmです。`
    }));
  }

  return generated;
}

function buildLogicQuestions() {
  const generated = [];

  for (let i = 0; i < 15; i += 1) {
    const start = 1 + i;
    const step = 2 + i % 6;
    const values = [start, start + step, start + step * 2, start + step * 3];
    const answer = start + step * 4;
    generated.push(createChoiceQuestion({
      category: "logic",
      tag: "推理・数列",
      question: `数列「${values.join("、")}、？」の「？」に入る数字はどれですか。`,
      sub: "隣り合う数字の差を比べましょう。",
      correctAnswer: String(answer),
      distractors: [String(answer - 1), String(answer + 1), String(answer + step)],
      title: `${step}ずつ増える数列`,
      explanation: `すべての数字が${step}ずつ増えています。次の数字は${answer}です。`
    }));
  }

  for (let i = 0; i < 10; i += 1) {
    const start = 2 + i;
    const multiplier = i % 2 === 0 ? 2 : 3;
    const values = [start, start * multiplier, start * multiplier ** 2];
    const answer = start * multiplier ** 3;
    generated.push(createChoiceQuestion({
      category: "logic",
      tag: "推理・規則性",
      question: `数列「${values.join("、")}、？」の「？」に入る数字はどれですか。`,
      sub: "前の数字に同じ計算を繰り返しています。",
      correctAnswer: String(answer),
      distractors: [String(answer - start), String(answer + start), String(values[2] + multiplier)],
      title: `前の数字を${multiplier}倍する`,
      explanation: `前の数字を毎回${multiplier}倍しているため、答えは${answer}です。`
    }));
  }

  const names = [
    ["青木", "石井", "上田"], ["加藤", "木村", "工藤"], ["佐藤", "鈴木", "高橋"],
    ["田中", "中村", "西村"], ["林", "原", "藤田"], ["松本", "三浦", "村上"],
    ["森", "山口", "吉田"], ["井上", "遠藤", "岡田"], ["小川", "斎藤", "清水"],
    ["前田", "山田", "渡辺"]
  ];
  names.forEach(([a, b, c], i) => {
    const measure = i % 2 === 0 ? "到着が早く" : "得点が高く";
    generated.push(createChoiceQuestion({
      category: "logic",
      tag: "推理・順序",
      question: `${a}さんは${b}さんより${measure}、${c}さんは${a}さんより${measure}なりました。順番として正しいものは？`,
      sub: "二つの比較を一本につないで考えます。",
      correctAnswer: `${c}・${a}・${b}`,
      distractors: [`${a}・${b}・${c}`, `${b}・${a}・${c}`, `${c}・${b}・${a}`],
      title: `${c} > ${a} > ${b}`,
      explanation: `${a} > ${b}、${c} > ${a}なので、${c} > ${a} > ${b}の順です。`
    }));
  });

  const directions = ["北", "東", "南", "西"];
  const turnPatterns = [
    [1, 1], [1, 2], [1, 3], [2, 1], [2, 3],
    [3, 1], [3, 2], [3, 3], [1, -1], [2, -1]
  ];
  turnPatterns.forEach(([first, second], i) => {
    const startIndex = i % 4;
    const answerIndex = (startIndex + first + second + 8) % 4;
    const turnText = value => value === -1 ? "左へ90度" : `右へ${value * 90}度`;
    generated.push(createChoiceQuestion({
      category: "logic",
      tag: "推理・方角",
      question: `${directions[startIndex]}を向いて、${turnText(first)}、さらに${turnText(second)}回転しました。最後の方角は？`,
      sub: "一つずつ向きを変えて追いましょう。",
      correctAnswer: directions[answerIndex],
      distractors: directions.filter(direction => direction !== directions[answerIndex]),
      title: `最後は${directions[answerIndex]}を向く`,
      explanation: `回転を順番に追うと、最後に向いている方角は${directions[answerIndex]}です。`
    }));
  });

  return generated;
}

function buildPersonalityQuestions() {
  const scenarios = [
    ["複数の仕事を同時に任されたとき", ["優先順位を決める", "簡単な仕事から始める", "周囲と分担する", "締め切り順に進める"]],
    ["会議で自分と違う意見が出たとき", ["理由を詳しく聞く", "自分の考えを説明する", "共通点を探す", "結論が出るまで見守る"]],
    ["仕事の進め方が曖昧なとき", ["目的を確認する", "まず自分で試す", "過去の例を探す", "詳しい人に質問する"]],
    ["小さなミスに気づいたとき", ["すぐ修正する", "影響範囲を調べる", "周囲に共有する", "次回の改善点を記録する"]],
    ["忙しい同僚から相談されたとき", ["すぐ時間を作る", "要点だけ先に聞く", "後の時間を約束する", "他の相談先を提案する"]],
    ["自分の提案が採用されなかったとき", ["理由を確認する", "すぐ次の案を考える", "決定を受け入れる", "提案を改善して再挑戦する"]],
    ["予定より仕事が早く終わったとき", ["次の仕事を探す", "内容をもう一度確認する", "周囲を手伝う", "少し休憩する"]],
    ["難しい目標を提示されたとき", ["達成方法を細分化する", "まず挑戦してみる", "現実的な目標を相談する", "必要な支援を確認する"]],
    ["知らない人が多い集まりでは", ["自分から話しかける", "話しかけられるのを待つ", "少人数の輪に入る", "知人の近くで過ごす"]],
    ["ルールに非効率な点を見つけたとき", ["改善案を提案する", "まずルールに従う", "周囲の意見を聞く", "自分の範囲で工夫する"]],
    ["急な予定変更があったとき", ["すぐ計画を組み直す", "優先事項だけ確認する", "周囲の動きを見る", "元の計画との差を整理する"]],
    ["重要な判断を任されたとき", ["情報を十分に集める", "経験と直感で決める", "複数の人に相談する", "リスクを先に洗い出す"]],
    ["長期的な仕事を始めるとき", ["詳細な計画を立てる", "最初の一歩だけ決める", "定期的な確認日を置く", "完成形をイメージする"]],
    ["成果を褒められたとき", ["素直に喜ぶ", "協力者に感謝する", "改善点も振り返る", "次の目標を考える"]],
    ["苦手な作業を任されたとき", ["先に片づける", "得意な人に相談する", "学び方を調べる", "得意な作業と交互に進める"]],
    ["説明を理解できなかったとき", ["その場で質問する", "後で自分で調べる", "要点を言い直して確認する", "同席者に確認する"]],
    ["意見を求められたとき", ["率直に考えを話す", "全体を整理してから話す", "他の人の意見を先に聞く", "メリットとリスクを挙げる"]],
    ["初めて使う道具やサービスでは", ["説明を先に読む", "触りながら覚える", "使い方を人に聞く", "簡単な機能から試す"]],
    ["自分の担当外の問題を見つけたとき", ["担当者に知らせる", "自分で対応できるか考える", "上司に相談する", "状況を記録しておく"]],
    ["作業中に集中が切れたとき", ["短く休憩する", "別の作業に切り替える", "区切りまで続ける", "環境を変える"]],
    ["チームの雰囲気が沈んでいるとき", ["自分から声をかける", "仕事に集中する", "原因を探る", "話しやすい人に相談する"]],
    ["細かな確認が続く仕事では", ["チェック表を作る", "一定時間ごとに休む", "二回に分けて確認する", "他の人にも確認を頼む"]],
    ["競争のある環境では", ["目標があると燃える", "自分のペースを保つ", "互いに学べる点を探す", "競争より協力を重視する"]],
    ["過去と同じ問題が起きたとき", ["原因を根本から調べる", "前回の対応を再利用する", "新しい方法を試す", "関係者を集めて考える"]],
    ["締め切りに遅れそうなとき", ["早めに相談する", "作業量を減らす", "集中して巻き返す", "協力を依頼する"]],
    ["資料を作成するとき", ["構成から考える", "データを先に集める", "見本を探す", "伝えたい結論を決める"]],
    ["新しい役割を提案されたとき", ["積極的に引き受ける", "内容を詳しく確認する", "必要な能力を考える", "今の仕事との両立を相談する"]],
    ["相手に厳しい指摘をするとき", ["率直に伝える", "良い点も一緒に伝える", "具体的な改善案を添える", "適切なタイミングを選ぶ"]],
    ["自分が間違っていたと分かったとき", ["すぐ認めて訂正する", "原因を説明する", "影響を受けた人に謝る", "再発防止策を考える"]],
    ["仕事の成果が見えにくいとき", ["小さな進歩を記録する", "周囲から意見をもらう", "目標を見直す", "結果が出るまで続ける"]],
    ["考えがまとまらないとき", ["紙に書き出す", "誰かに話してみる", "少し時間を置く", "関連情報を集める"]],
    ["頼まれごとが重なったとき", ["重要度を確認する", "できないものは断る", "順番を伝える", "他の人に協力を頼む"]],
    ["相手の反応が予想と違ったとき", ["理由を尋ねる", "説明の仕方を変える", "一度受け止める", "別の機会に話す"]],
    ["定例作業に慣れてきたとき", ["もっと速い方法を探す", "ミスを減らす工夫をする", "手順を標準化する", "新しい仕事に挑戦する"]],
    ["チームで成功したとき", ["全員で成果を喜ぶ", "成功要因を振り返る", "貢献した人を称える", "次の目標を決める"]],
    ["休日の予定を立てるとき", ["早めに詳しく決める", "大まかにだけ決める", "当日の気分で決める", "一緒に行く人に合わせる"]],
    ["新しい知識を学ぶとき", ["体系的に基礎から学ぶ", "実践課題から始める", "詳しい人の話を聞く", "興味のある部分から学ぶ"]],
    ["人前で説明するとき", ["十分に練習する", "要点だけ準備する", "相手の反応を見て変える", "資料を詳しく作る"]],
    ["仕事で迷いが生じたとき", ["データを確認する", "経験を思い出す", "周囲に相談する", "目的に立ち返る"]],
    ["相手と意見が一致したとき", ["すぐ行動に移す", "認識の細部も確認する", "役割分担を決める", "他の可能性も検討する"]],
    ["予定外の空き時間ができたとき", ["未完了の仕事を進める", "今後の計画を立てる", "情報収集をする", "気分転換をする"]],
    ["大勢の前で質問するとき", ["思った時点で質問する", "内容を整理してから聞く", "終了後に個別に聞く", "他の質問を待つ"]],
    ["変化の多い職場では", ["刺激があって楽しい", "優先順位を意識する", "安定した部分を作る", "周囲とこまめに確認する"]],
    ["責任の大きい仕事では", ["やりがいを感じる", "慎重に準備する", "役割を明確にする", "支援体制を確認する"]],
    ["一日の仕事を終えるとき", ["翌日の予定を立てる", "今日の成果を振り返る", "未完了事項を整理する", "仕事から気持ちを切り替える"]]
  ];

  return scenarios.map(([scenario, answers], index) => ({
    category: "personality",
    tag: "性格傾向・回答練習",
    question: `${scenario}、あなたに最も近い行動は？`,
    sub: "理想の人物像ではなく、普段の自分に近いものを選んでください。",
    answers,
    correct: null,
    title: "自分らしい回答を選べています",
    explanation: `性格検査に正解はありません。設問${index + 6}でも、考えすぎず普段の行動を基準に答えることが大切です。`
  }));
}

function buildQuestionBank() {
  const additions = [
    ...buildVerbalQuestions(),
    ...buildNumericQuestions(),
    ...buildLogicQuestions(),
    ...buildPersonalityQuestions()
  ];
  const bank = [...baseQuestions, ...additions];
  return ["verbal", "numeric", "logic", "personality"]
    .flatMap(category => bank.filter(question => question.category === category).slice(0, 50));
}

const questions = buildQuestionBank();

const categoryNames = {
  mix: "MIX QUEST",
  verbal: "VERBAL QUEST",
  numeric: "NUMERIC QUEST",
  logic: "LOGIC QUEST",
  personality: "PERSONALITY"
};

const app = document.getElementById("app");
const state = {
  mode: "mix",
  queue: [],
  index: 0,
  correct: 0,
  combo: 0,
  maxCombo: 0,
  xp: 0,
  answered: false,
  seconds: 45,
  timerId: null,
  sound: true
};

function getProgress() {
  const fallback = { streak: 3, total: 12, week: [2, 0, 3, 1, 4, 2, 0] };
  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem("fitquest-progress")) };
  } catch {
    return fallback;
  }
}

function saveProgress(result) {
  const progress = getProgress();
  const today = new Date().getDay();
  const mondayIndex = (today + 6) % 7;
  progress.total += result;
  progress.week[mondayIndex] = (progress.week[mondayIndex] || 0) + result;
  localStorage.setItem("fitquest-progress", JSON.stringify(progress));
}

function cloneTemplate(id) {
  return document.getElementById(id).content.cloneNode(true);
}

function renderHome() {
  stopTimer();
  app.replaceChildren(cloneTemplate("homeTemplate"));
  const progress = getProgress();
  document.getElementById("headerStreak").textContent = progress.streak;
  document.getElementById("weekCount").textContent = `${progress.total}問クリア`;
  renderWeek(progress.week);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderWeek(data) {
  const labels = ["月", "火", "水", "木", "金", "土", "日"];
  const today = (new Date().getDay() + 6) % 7;
  const max = Math.max(...data, 5);
  document.getElementById("weekChart").innerHTML = data.map((count, i) => `
    <div class="day-column ${i === today ? "today" : ""}">
      <div class="day-bar-wrap">
        ${count ? `<b class="day-count">${count}</b>` : ""}
        <i class="day-bar" style="height:${Math.max(5, count / max * 100)}%"></i>
      </div>
      <span>${labels[i]}</span>
    </div>
  `).join("");
}

function shuffle(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function startQuiz(mode) {
  state.mode = mode;
  const pool = mode === "mix" ? questions.filter(q => q.category !== "personality") : questions.filter(q => q.category === mode);
  state.queue = shuffle(pool).slice(0, Math.min(5, pool.length));
  state.index = 0;
  state.correct = 0;
  state.combo = 0;
  state.maxCombo = 0;
  state.xp = 0;
  state.answered = false;
  app.replaceChildren(cloneTemplate("quizTemplate"));
  document.getElementById("questionTotal").textContent = state.queue.length;
  document.getElementById("quizCategory").textContent = categoryNames[mode];
  document.getElementById("nextButton").addEventListener("click", nextQuestion);
  showQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showQuestion() {
  state.answered = false;
  const q = state.queue[state.index];
  document.getElementById("questionNumber").textContent = state.index + 1;
  document.getElementById("quizProgress").style.width = `${((state.index + 1) / state.queue.length) * 100}%`;
  document.getElementById("questionTag").textContent = q.tag;
  document.getElementById("questionText").textContent = q.question;
  document.getElementById("questionSub").textContent = q.sub || "";
  document.getElementById("visualQuestion").innerHTML = q.visual || "";
  document.getElementById("feedbackDrawer").className = "feedback-drawer";

  const letters = ["A", "B", "C", "D"];
  document.getElementById("answerList").innerHTML = q.answers.map((answer, index) => `
    <button class="answer-button" data-answer="${index}">
      <span>${letters[index]}</span><strong>${answer}</strong>
    </button>
  `).join("");

  document.querySelectorAll(".answer-button").forEach(button => {
    button.addEventListener("click", () => chooseAnswer(Number(button.dataset.answer)));
  });

  updateCombo();
  startTimer();
}

function chooseAnswer(selected, timedOut = false) {
  if (state.answered) return;
  state.answered = true;
  stopTimer();

  const q = state.queue[state.index];
  const isPersonality = q.correct === null;
  const isCorrect = isPersonality || selected === q.correct;
  const buttons = [...document.querySelectorAll(".answer-button")];
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (!isPersonality && index === q.correct) button.classList.add("correct");
    if (!isPersonality && index === selected && !isCorrect) button.classList.add("wrong");
    if (isPersonality && index === selected) button.classList.add("correct");
  });

  if (isCorrect) {
    state.correct += 1;
    state.combo += 1;
    state.maxCombo = Math.max(state.maxCombo, state.combo);
    state.xp += 20 + Math.min(state.combo - 1, 4) * 5;
  } else {
    state.combo = 0;
    state.xp += 5;
  }

  const drawer = document.getElementById("feedbackDrawer");
  drawer.classList.add("show");
  if (!isCorrect) drawer.classList.add("wrong");
  document.getElementById("feedbackIcon").textContent = isCorrect ? "✓" : "×";
  document.getElementById("feedbackLabel").textContent = timedOut ? "TIME UP" : isPersonality ? "ANSWERED" : isCorrect ? "正解！" : "惜しい！";
  document.getElementById("feedbackTitle").textContent = q.title;
  document.getElementById("feedbackText").textContent = q.explanation;
  document.getElementById("nextButton").innerHTML = state.index === state.queue.length - 1 ? "結果を見る <span>→</span>" : "次の問題へ <span>→</span>";
  updateCombo();
  playTone(isCorrect ? 620 : 220);
  setTimeout(() => drawer.scrollIntoView({ behavior: "smooth", block: "nearest" }), 80);
}

function updateCombo() {
  const count = document.getElementById("comboCount");
  const dots = document.getElementById("comboDots");
  if (!count || !dots) return;
  count.textContent = state.combo;
  dots.innerHTML = Array.from({ length: 5 }, (_, i) => `<i class="${i < Math.min(state.combo, 5) ? "on" : ""}"></i>`).join("");
}

function nextQuestion() {
  if (!state.answered) return;
  if (state.index >= state.queue.length - 1) {
    showResult();
    return;
  }
  state.index += 1;
  showQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startTimer() {
  stopTimer();
  state.seconds = 45;
  updateTimer();
  state.timerId = setInterval(() => {
    state.seconds -= 1;
    updateTimer();
    if (state.seconds <= 0) chooseAnswer(-1, true);
  }, 1000);
}

function stopTimer() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
}

function updateTimer() {
  const timer = document.getElementById("timer");
  const text = document.getElementById("timerText");
  if (!timer || !text) return;
  text.textContent = `00:${String(Math.max(0, state.seconds)).padStart(2, "0")}`;
  timer.classList.toggle("urgent", state.seconds <= 10);
}

function showResult() {
  stopTimer();
  saveProgress(state.correct);
  app.replaceChildren(cloneTemplate("resultTemplate"));
  const percent = Math.round((state.correct / state.queue.length) * 100);
  document.getElementById("resultPercent").textContent = percent;
  document.getElementById("resultCorrect").textContent = `${state.correct} / ${state.queue.length}`;
  document.getElementById("resultCombo").textContent = state.maxCombo;
  document.getElementById("resultXp").textContent = `+${state.xp} XP`;
  document.getElementById("resultRing").style.setProperty("--score", percent);

  const message = percent >= 80
    ? ["EXCELLENT!", "高い正答率です。解き方の型がしっかり身についています。"]
    : percent >= 60
      ? ["GOOD!", "問題のパターンが見えてきています。この調子で繰り返しましょう。"]
      : ["NICE TRY!", "間違えた問題は伸びしろです。解説を思い出しながらもう一度挑戦しましょう。"];
  const box = document.getElementById("resultMessage");
  box.querySelector("span").textContent = message[0];
  box.querySelector("p").textContent = message[1];
  playTone(760);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function playTone(frequency) {
  if (!state.sound || !window.AudioContext) return;
  try {
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.frequency.value = frequency;
    oscillator.type = "sine";
    gain.gain.setValueAtTime(.06, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + .16);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + .16);
  } catch {
    // Audio is an optional enhancement.
  }
}

document.addEventListener("click", event => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  if (action === "home") renderHome();
  if (action === "start") startQuiz(target.dataset.mode || "mix");
  if (action === "retry") startQuiz(state.mode);
});

document.getElementById("soundButton").addEventListener("click", event => {
  state.sound = !state.sound;
  event.currentTarget.classList.toggle("muted", !state.sound);
});

renderHome();
