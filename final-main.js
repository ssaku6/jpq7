// 画像をシャッフルして、同じ画像が選ばれないようにする
concreteImages = jsPsych.randomization.shuffle(concreteImages);
abstractImages = jsPsych.randomization.shuffle(abstractImages);

// ランダムに形容詞対セットを選ぶ
var conditionSets = [
    ["良いー悪い", "好きなー嫌いな"],// インデックス 0
    ["明るいー暗い", "軽いー重い"]// インデックス 1
];

var trials = [];

// 具象画と抽象画をそれぞれ2つのグループに分ける
var concreteGroups = [
    concreteImages.slice(0, 12),   // 具象画グループ1（1~12）
    concreteImages.slice(12, 24)   // 具象画グループ2（13~24）
];

var abstractGroups = [
    abstractImages.slice(0, 12),   // 抽象画グループ1（25~36）
    abstractImages.slice(12, 24)   // 抽象画グループ2（37~48）
];

// 各グループから画像をランダムに選択し、形容詞対と組み合わせる
concreteGroups.forEach((group, groupIndex) => {
    group.forEach((image, imageIndex) => {
        trials.push({
            image: image,
            set: conditionSets[groupIndex], // グループごとに条件セットを選択
            art: image
        });
    });
});

abstractGroups.forEach((group, groupIndex) => {
    group.forEach((image, imageIndex) => {
        trials.push({
            image: image,
            set: conditionSets[groupIndex + 1], // 次の形容詞対セット
            art: image
        });
    });
});

// trials をシャッフルして順番をランダム化
trials = jsPsych.randomization.shuffle(trials);

// 試行をrepetitionsで繰り返す
var repetitions = 2; // 試行の繰り返し回数
for (var i = 0; i < repetitions; i++) {
    trials.forEach(trial => {
        // 画像を表示している時間とサイズを格納する変数
        var imageWidth = 0;
        var imageHeight = 0;
        var reactionTime;

        // 画像をプリロードするトライアル
        var preload = {
            type: 'preload',
            images: [trial.image]
        };
        timeline.push(preload);

        // 形容詞対セットの表示
        var condition_trial = {
            type: "html-keyboard-response",
            stimulus: `<p>以下の項目について絵画を5段階で評価してもらいます。</p><br><p><strong>${trial.set[0]}</strong></p><p><strong>${trial.set[1]}</strong></p><br>enterキーで次に進みます。`,
            choices: ["Enter"],
        };
        timeline.push(condition_trial);

        // ウェルカムメッセージ
        var welcome = {
            type: "html-keyboard-response",
            stimulus: "enterキーを押すと絵画が表示されます。絵画は自動で消えるまで、表示されます。<br>事前に見た評価項目に基づき、絵画が消えるまで見続けてください。",
            choices: ["Enter"]
        };
        timeline.push(welcome);

        // 固視点トライアル
        var fixation_trial = {
            type: "html-keyboard-response",
            stimulus: "<p style='font-size: 48px;'>+</p>",  // 固視点として「+」を表示
            choices: jsPsych.NO_KEYS,
            trial_duration: 1000
        };
        timeline.push(fixation_trial);

        // 画像トライアル
        var hello_trial = {
            type: 'html-keyboard-response',
            stimulus: '<img id="jspsych-image" src="' + trial.image + '" style="display: none;">',
            choices: jsPsych.NO_KEYS,
            on_load: function() {
                var imageElement = document.getElementById('jspsych-image');
                imageElement.style.display = 'block';

                imageWidth = imageElement.naturalWidth;
                imageHeight = imageElement.naturalHeight;

                var time_array = [100, 200, 300];
                var shuffled_times = jsPsych.randomization.repeat(time_array, 1);

                var displayTime = shuffled_times[0];  

                setTimeout(function() {
                    imageElement.style.display = 'none';
                    jsPsych.finishTrial();
                }, displayTime);
            },
            on_finish: function() {
                document.body.style.backgroundColor = 'white';
            }
        };
        timeline.push(hello_trial);

        // 時間再現課題
        var space_key_trial = {
            type: 'html-keyboard-response',
            data: {task: 'response'},
            stimulus: `
                <div id="instructions">
                    <p>では、この画面のまま<strong>spaceキーを押して四角形を表示させてください</strong></p>
                    <p>spaceキーを長押しすると灰色の四角形が表示されるので、 絵画を見ていたと思う時間と同じ時間、四角形を表示させてください。</p>
                    <p>spaceキーを離すと四角形が消えます。</p>
                </div>
                <div id="rectangle" style="display: none; background-color: grey;"></div>
            `,
            choices: jsPsych.NO_KEYS,
            on_load: function() {
                var rectangle = document.getElementById('rectangle');
                rectangle.style.width = imageWidth + 'px';
                rectangle.style.height = imageHeight + 'px';
            },
            on_start: function(trial) {
                var startTime = null;
                var displayed = false;

                var keydownListener = function(e) {
                    if (e.code === 'Space' && startTime === null && !displayed) {
                        startTime = performance.now();
                        document.getElementById('instructions').style.display = 'none';
                        document.getElementById('rectangle').style.display = 'block';  
                    }
                };

                var keyupListener = function(e) {
                    if (e.code === 'Space' && startTime !== null && !displayed) {
                        var endTime = performance.now();
                        reactionTime = endTime - startTime;

                        document.getElementById('rectangle').style.display = 'none';  
                        displayed = true;

                        document.removeEventListener('keydown', keydownListener);
                        document.removeEventListener('keyup', keyupListener);
                        jsPsych.finishTrial();
                    }
                };

                document.addEventListener('keydown', keydownListener);
                document.addEventListener('keyup', keyupListener);
            },

            on_finish: function(data) {
                data.correct = reactionTime;
                data.art = trial.image;
                data.adjective = trial.set;
            }
        };

        timeline.push(space_key_trial);
    });
}

// jsPsychの実行
jsPsych.init({
    timeline: timeline
});
