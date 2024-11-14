var repo_site = "https://ssaku6.github.io/jpq7/";

/* create timeline */
var timeline = [];

// 使用する画像のパスを指定
var selectedImages = [
    repo_site + 'img/10.jpg',
    repo_site + 'img/11.jpg',
    repo_site + 'img/12.jpg',
    // 他の画像も追加可能
];

// 画像を表示している時間とサイズを格納する変数
var imageWidth = 0;
var imageHeight = 0;
var reactionTime;

// 評価対（例：物理属性評価 vs 意味的評価）
var evaluationPairs = [
    {type: 'physical', image: selectedImages[0]},  // 物理属性評価
    {type: 'semantic', image: selectedImages[1]},   // 意味的評価
    {type: 'physical', image: selectedImages[2]},   // 物理属性評価
    {type: 'semantic', image: selectedImages[3]}    // 意味的評価
];

// 評価対をランダムにシャッフル
jsPsych.randomization.shuffle(evaluationPairs);

// 画像をプリロードするトライアル
var preload = {
    type: 'preload',
    images: selectedImages
};
timeline.push(preload);

// ウェルカムメッセージ
var welcome = {
    type: "html-keyboard-response",
    stimulus: "enterキーを押すと絵画が表示されます。絵画は自動で消えるまで、表示されます。<br>事前に見た評価項目に基づき、絵画が消えるまで見続けてください。",
    choices: ["Enter"]
};
timeline.push(welcome);

// 固視点トライアル（教示の後に追加）
var fixation_trial = {
    type: "html-keyboard-response",
    stimulus: "<p style='font-size: 48px;'>+</p>",  // 固視点として「+」を表示
    choices: jsPsych.NO_KEYS,  // キー入力を無効にする
    trial_duration: 1000  // 固視点を1秒間表示（時間は調整可能）
};
timeline.push(fixation_trial);

// 画像トライアル
evaluationPairs.forEach(function(pair) {
    var hello_trial = {
        type: 'html-keyboard-response',
        stimulus: '<img id="jspsych-image" src="' + pair.image + '" style="display: none;">',
        choices: jsPsych.NO_KEYS,
        on_load: function() {
            var imageElement = document.getElementById('jspsych-image');
            // 画像をすぐに表示
            imageElement.style.display = 'block';

            // 画像のサイズを取得
            imageWidth = imageElement.naturalWidth;
            imageHeight = imageElement.naturalHeight;

            // 3秒後に画像を非表示にする処理
            setTimeout(function() {
                imageElement.style.display = 'none';
                jsPsych.finishTrial(); // 次の試行に進む
            }, 5000); // 5秒間表示後に非表示
        },
        on_finish: function() {
            document.body.style.backgroundColor = 'white';
        }
    };
    timeline.push(hello_trial);
});

// 予告メッセージ
var welcome2 = {
    type: "html-keyboard-response",
    stimulus: `<strong>予告していませんでしたが、絵画の評価の前に、絵画を見ていた時間の長さを再現してもらいます。</strong><br><br>
    次の画面ではspaceキーを長押しすると四角形が表示され、離すと四角形が消えます。<br>
    絵画を見ていたと思う時間と同じ時間、四角形を表示させてください。<br>
    <strong>spaceキーを押す操作は1度しかできないので注意してください。</strong><br>
    enterキーで次のページに進みます。`,
    choices: ["Enter"]
};
timeline.push(welcome2);

// 時間再生課題
var space_key_trial = {
    type: 'html-keyboard-response',
    data: {
        task: 'response'
    },
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
        // 四角形のサイズを設定
        var rectangle = document.getElementById('rectangle');
        rectangle.style.width = imageWidth + 'px';
        rectangle.style.height = imageHeight + 'px';
    },
    on_start: function(trial) {
        var startTime = null;
        var displayed = false;

        // keydownイベントリスナー
        var keydownListener = function(e) {
            if (e.code === 'Space' && startTime === null && !displayed) {
                startTime = performance.now();
                document.getElementById('instructions').style.display = 'none';
                document.getElementById('rectangle').style.display = 'block';  
            }
        };

        // keyupイベントリスナー
        var keyupListener = function(e) {
            if (e.code === 'Space' && startTime !== null && !displayed) {
                var endTime = performance.now();
                reactionTime = endTime - startTime;
                console.log("Reaction time: " + reactionTime + " milliseconds");
                document.getElementById('rectangle').style.display = 'none';  
                displayed = true;

                document.removeEventListener('keydown', keydownListener);
                document.removeEventListener('keyup', keyupListener);
                jsPsych.finishTrial();  // 試行を終了
            }
        };

        document.addEventListener('keydown', keydownListener);
        document.addEventListener('keyup', keyupListener);
    },
    on_finish: function(data){
        data.correct = reactionTime; 
        data.art = selectedImage;
    }
};
timeline.push(space_key_trial);

// 5件法のアンケート
var questionnaire = {
    type: 'survey-likert',
    questions: [
        {
            prompt: "絵画の物理的な属性にどれくらい注目しましたか？",
            labels: ["全く注目しなかった", "あまり注目しなかった", "どちらでもない", "注目した", "非常に注目した"],
            required: true
        },
        {
            prompt: "絵画の意味にどれくらい注目しましたか？",
            labels: ["全く注目しなかった", "あまり注目しなかった", "どちらでもない", "注目した", "非常に注目した"],
            required: true
        }
    ]
};

timeline.push(questionnaire);

// 最後のメッセージ
var end_message = {
    type: "html-keyboard-response",
    stimulus: "実験はこれで終了です。ご参加いただきありがとうございました。",
    choices: ["Enter"]
};

timeline.push(end_message);
