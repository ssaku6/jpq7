// 使用する画像と形容詞対セット
var concreteImages = [
    repo_site + 'img2/01.jpg', repo_site + 'img2/02.jpg', repo_site + 'img2/03.jpg', repo_site + 'img2/04.jpg',
    repo_site + 'img2/05.jpg', repo_site + 'img2/06.jpg', repo_site + 'img2/07.jpg', repo_site + 'img2/08.jpg',
    repo_site + 'img2/09.jpg', repo_site + 'img2/10.jpg', repo_site + 'img2/11.jpg', repo_site + 'img2/12.jpg',
    repo_site + 'img2/13.jpg', repo_site + 'img2/14.jpg', repo_site + 'img2/15.jpg', repo_site + 'img2/16.jpg',
    repo_site + 'img2/17.jpg', repo_site + 'img2/18.jpg', repo_site + 'img2/19.jpg', repo_site + 'img2/20.jpg',
    repo_site + 'img2/21.jpg', repo_site + 'img2/22.jpg', repo_site + 'img2/23.jpg', repo_site + 'img2/24.jpg'
];

var abstractImages = [
    repo_site + 'img2/25.jpg', repo_site + 'img2/26.jpg', repo_site + 'img2/27.jpg', repo_site + 'img2/28.jpg',
    repo_site + 'img2/29.jpg', repo_site + 'img2/30.jpg', repo_site + 'img2/31.jpg', repo_site + 'img2/32.jpg',
    repo_site + 'img2/33.jpg', repo_site + 'img2/34.jpg', repo_site + 'img2/35.jpg', repo_site + 'img2/36.jpg',
    repo_site + 'img2/37.jpg', repo_site + 'img2/38.jpg', repo_site + 'img2/39.jpg', repo_site + 'img2/40.jpg',
    repo_site + 'img2/41.jpg', repo_site + 'img2/42.jpg', repo_site + 'img2/43.jpg', repo_site + 'img2/44.jpg',
    repo_site + 'img2/45.jpg', repo_site + 'img2/46.jpg', repo_site + 'img2/47.jpg', repo_site + 'img2/48.jpg'
];

var conditionSets = [
    ["良いー悪い", "好きなー嫌いな"],
    ["明るいー暗い", "軽いー重い"]
];

// 条件の組み合わせを作成
var conditions = [
    { images: concreteImages.slice(0, 12), adjectives: conditionSets[0] },
    { images: concreteImages.slice(12, 24), adjectives: conditionSets[1] },
    { images: abstractImages.slice(0, 12), adjectives: conditionSets[0] },
    { images: abstractImages.slice(12, 24), adjectives: conditionSets[1] }
];

// 各条件を12回繰り返して試行を作成
var trials = [];
var repetitions = 12;
for (var i = 0; i < conditions.length; i++) {
    var condition = conditions[i];
    for (var j = 0; j < repetitions; j++) {
        var shuffledImages = jsPsych.randomization.shuffle(condition.images);
        for (var k = 0; k < shuffledImages.length; k++) {
            trials.push({
                image: shuffledImages[k],
                adjectives: condition.adjectives,
                art: shuffledImages[k]
            });
        }
    }
}

// 全試行をランダムにシャッフル
trials = jsPsych.randomization.shuffle(trials);

// 試行のタイムラインを設定
for (var i = 0; i < trials.length; i++) {
    var trial = trials[i];

    // 画像をプリロード
    var preload = {
        type: 'preload',
        images: [trial.image]
    };
    timeline.push(preload);

    // 形容詞対セットの提示
    var condition_trial = {
        type: "html-keyboard-response",
        stimulus: `<p>以下の項目について絵画を5段階で評価してもらいます。</p><br><p><strong>${trial.adjectives[0]}</strong></p><p><strong>${trial.adjectives[1]}</strong></p><br>enterキーで次に進みます。`,
        choices: ["Enter"],
    };
    timeline.push(condition_trial);

    // 固視点
    var fixation_trial = {
        type: "html-keyboard-response",
        stimulus: "<p style='font-size: 48px;'>+</p>",
        choices: jsPsych.NO_KEYS,
        trial_duration: 1000
    };
    timeline.push(fixation_trial);

    // 画像呈示
    var image_trial = {
        type: 'html-keyboard-response',
        stimulus: `<img src="${trial.image}" style="width: 800px; height: auto;">`,
        choices: jsPsych.NO_KEYS,
        trial_duration: jsPsych.randomization.sampleWithoutReplacement([100, 200, 300], 1)[0]
    };
    timeline.push(image_trial);

    // 時間再現課題
    var reproduction_instruction = {
        type: "html-keyboard-response",
        stimulus: `<strong>絵画を見ていた時間を再現してください。</strong><br>spaceキーを長押しして時間を再現します。`,
        choices: ["Enter"]
    };
    timeline.push(reproduction_instruction);

    var space_key_trial = {
        type: 'html-keyboard-response',
        stimulus: '<div id="rectangle" style="display:none; width:100px; height:100px; background-color:grey;"></div>',
        choices: jsPsych.NO_KEYS,
        on_load: function() {
            var startTime = null;
            document.addEventListener('keydown', function(e) {
                if (e.code === 'Space' && !startTime) {
                    startTime = performance.now();
                    document.getElementById('rectangle').style.display = 'block';
                }
            });
            document.addEventListener('keyup', function(e) {
                if (e.code === 'Space' && startTime) {
                    var endTime = performance.now();
                    var reactionTime = endTime - startTime;
                    jsPsych.finishTrial({ reactionTime: reactionTime });
                }
            });
        }
    };
    timeline.push(space_key_trial);

    // 評価
    var rating_trial = {
        type: "survey-likert",
        questions: [
            { prompt: `<p><strong>${trial.adjectives[0]}</strong></p>`, labels: ["1", "2", "3", "4", "5"], required: true },
            { prompt: `<p><strong>${trial.adjectives[1]}</strong></p>`, labels: ["1", "2", "3", "4", "5"], required: true }
        ]
    };
    timeline.push(rating_trial);
}
