var repo_site = "https://ssaku6.github.io/jpq7/";


/* create timeline */
var timeline = [];

// 使用する画像のパスを指定
var selectedImage = repo_site + 'img/09.jpg';

// 画像を表示している時間とサイズを格納する変数
var imageWidth = 0;
var imageHeight = 0;


// 画像をプリロードするトライアル
var preload = {
    type: 'preload',
    images: [selectedImage]
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
var hello_trial = {
    type: 'html-keyboard-response',
    stimulus: '<img id="jspsych-image" src="' + selectedImage + '" style="display: none;">',
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



// 次の画面での説明
var welcome2 = {
    type: "html-keyboard-response",
    stimulus: `<strong>予告していませんでしたが、絵画の評価の前に、絵画を見ていた時間の長さを再現してもらいます。</strong><br><br>
    その画面ではSpaceキーを長押しすると四角形が表示され、離すと四角形が消えます。<br>
    絵画を見ていたと思う時間と同じ時間、四角形を表示させてください。<br>
    <strong>spaceキーを押す操作は1度しかできないので注意してください。</strong><br>
    enterキーで次のページに進みます。`,
    choices: ["Enter"]
};

timeline.push(welcome2);

var space_key_trial = {
    type: 'html-keyboard-response',
    stimulus: `
        <div id="instructions">
            <p>では、この画面のまま<strong>spaceキーを押して四角形を表示させてください</strong></p>
            <p>spaceキーを長押しすると灰色の四角形が表示されるので、 絵画を見ていたと思う時間と同じ時間、四角形を表示させてください。</p>
            <p>spaceキーを離すと四角形が消えます。</p>
            
        </div>
        <div id="rectangle" style="display: none; background-color: grey;"></div>
    `,
    choices: jsPsych.NO_KEYS,  // Enterキーを不要にするためNO_KEYSを設定
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

                // 教示を非表示にする
                document.getElementById('instructions').style.display = 'none';

                // 四角形を表示
                document.getElementById('rectangle').style.display = 'block';  
            }
        };

        // keyupイベントリスナー
        var keyupListener = function(e) {
            if (e.code === 'Space' && startTime !== null && !displayed) {
                var endTime = performance.now();
                var reactionTime = endTime - startTime;
                console.log("Reaction time: " + reactionTime + " milliseconds");

                // 四角形を非表示にする
                document.getElementById('rectangle').style.display = 'none';  
                displayed = true;

                // イベントリスナーを解除して試行を終了
                document.removeEventListener('keydown', keydownListener);
                document.removeEventListener('keyup', keyupListener);
                jsPsych.finishTrial();  // 試行を終了
            }
        };

        // イベントリスナーの追加
        document.addEventListener('keydown', keydownListener);
        document.addEventListener('keyup', keyupListener);
    }
};

timeline.push(space_key_trial);

// 次の画面に進む指示を表示するトライアル
var end_message = {
    type: "html-keyboard-response",
    stimulus: "続いて絵画の評価をしてください。<br>enterキーで次のページに進みます。",
    choices: ["Enter"]
};

timeline.push(end_message);
