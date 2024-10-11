export interface Dish {
  name: string;
  recipe: string;
}

export const japaneseDishes: Dish[] = [
  {
    name: "鯖の味噌煮",
    recipe: "1. 鯖を適当な大きさに切る 2. 味噌、砂糖、酒を混ぜて調味料を作る 3. 鍋に鯖と調味料を入れて煮込む 4. 生姜を加えて完成"
  },
  {
    name: "鶏の照り焼き",
    recipe: "1. 鶏肉に塩こしょうする 2. フライパンで両面焼く 3. 醤油、みりん、砂糖を加えて煮詰める 4. タレがとろみついたら完成"
  },
  {
    name: "すき焼き",
    recipe: "1. 牛肉を薄切りにする 2. 鍋に油を引き、牛肉を炒める 3. 砂糖、醤油、酒を加える 4. 野菜と豆腐を加えて煮る 5. 溶き卵につけて食べる"
  },
  {
    name: "豚の生姜焼き",
    recipe: "1. 豚肉に片栗粉をまぶす 2. 生姜、醤油、酒、みりんでタレを作る 3. フライパンで豚肉を焼く 4. タレを加えて絡める"
  },
  {
    name: "カレーライス",
    recipe: "1. 野菜と肉を炒める 2. 水を加えて煮込む 3. カレールーを溶かし入れる 4. とろみがついたらご飯にかける"
  },
  {
    name: "天ぷら",
    recipe: "1. 野菜や魚介を適当な大きさに切る 2. 衣を作る 3. 具材に衣をつけて揚げる 4. 天つゆを添えて完成"
  },
  {
    name: "親子丼",
    recipe: "1. 鶏肉を炒める 2. 玉ねぎを加えて炒める 3. だし汁、醤油、みりんを加えて煮る 4. 溶き卵を加えて半熟に仕上げる 5. ご飯の上に盛り付ける"
  },
  {
    name: "味噌汁",
    recipe: "1. だし汁を作る 2. 具材を切って加える 3. 具材が柔らかくなったら味噌を溶き入れる 4. 一煮立ちさせて完成"
  },
  {
    name: "焼きそば",
    recipe: "1. 野菜と肉を炒める 2. 茹でた麺を加えて炒める 3. ソースを加えて味付けする 4. かつお節や青のりをトッピングして完成"
  },
  {
    name: "おでん",
    recipe: "1. だし汁を作る 2. 具材を入れて煮込む 3. 味付けをする 4. 長時間煮込んで味を染み込ませる"
  },
  {
    name: "たこ焼き",
    recipe: "1. 生地を作る 2. たこと具材を切る 3. 熱した鉄板に生地を流し入れる 4. 具材を入れて丸く焼く 5. ソースと青のりをかけて完成"
  },
  {
    name: "うどん",
    recipe: "1. だし汁を作る 2. うどんを茹でる 3. 具材を準備する 4. 茹でたうどんをだし汁に入れ、具材を添える"
  },
  {
    name: "お好み焼き",
    recipe: "1. 生地を作る 2. キャベツなどの具材を切る 3. 生地に具材を混ぜる 4. 熱した鉄板で焼く 5. ソースと青のりをかけて完成"
  },
  {
    name: "肉じゃが",
    recipe: "1. じゃがいもと肉を切る 2. 野菜を炒める 3. だし汁を加えて煮込む 4. 醤油、砂糖で味付けする"
  },
  {
    name: "茶碗蒸し",
    recipe: "1. だし汁で卵液を作る 2. 具材を器に入れる 3. 卵液を注ぐ 4. 蒸し器で蒸す"
  },
  {
    name: "焼き鳥",
    recipe: "1. 鶏肉を一口大に切る 2. 串に刺す 3. タレを作る 4. グリルで焼きながらタレを塗る"
  },
  {
    name: "冷やし中華",
    recipe: "1. 中華麺を茹でて冷やす 2. 具材を準備する 3. タレを作る 4. 麺の上に具材を盛り付け、タレをかける"
  },
  {
    name: "豚汁",
    recipe: "1. 野菜と豚肉を切る 2. だし汁を作る 3. 具材を煮込む 4. 味噌を溶き入れる"
  },
  {
    name: "炊き込みご飯",
    recipe: "1. 具材を準備する 2. 米と具材を炊飯器に入れる 3. だし汁と調味料を加える 4. 通常通り炊く"
  },
  {
    name: "ラーメン",
    recipe: "1. スープを作る 2. 麺を茹でる 3. 具材を準備する 4. 器に麺を入れ、スープを注ぎ、具材をトッピングする"
  },
  // ... 残りの80個の料理も同様に追加 ...
];