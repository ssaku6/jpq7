var repo_site = "https://ssaku6.github.io/jpq7/";


/* create timeline */
var timeline = [];

// 使用する画像のパスを指定
var selectedImage = repo_site + 'img/01.jpg';

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
    stimulus: "Enterキーを押すと絵画が表示されます。絵画は自動で消えるまで、表示されます。<br>事前にお伝えした評価項目に基づき、絵画をじっくり丁寧に評価してください。<br>enterキーで次のページに進みます。",
    choices: ["Enter"]
};

timeline.push(welcome);

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
        }, 3000); // 3秒間表示後に非表示
    },
    on_finish: function() {
        document.body.style.backgroundColor = 'white';
    }
};

timeline.push(hello_trial);



// 次の画面での説明
var welcome2 = {
    type: "html-keyboard-response",
    stimulus: `<strong>予告していませんでしたが、絵画の評価の前に、絵画を見ていた時間の長さを再現していただきます。</strong><br><br>
    次の画面では、真っ白な画面が表示れます。<br>
    その画面ではSpaceキーを長押しすると四角形が表示され、押し続けることを止めると消えます。<br>
    絵画を見ていた時間と同じ時間、四角形を表示させてください。<br>
    <strong>spaceキーを押す操作は1度しかできないので注意してください。</strong><br>
    enterキーで進のページに進みます。`,
    choices: ["Enter"]
};

timeline.push(welcome2);

var welcome3 = {
    type: "html-keyboard-response",
    stimulus: `spaceキーを長押しすると灰色の長方形が表示されるので、見ていた時間を再現してください。spaceキーを離すと長方形が消えます。<br>enterキーで次の画面に進みます。`,
    choices: ["Enter"]
};

timeline.push(welcome3);


// スペースキーで四角形を表示するトライアル
var space_key_trial = {
    type: 'html-keyboard-response',
    stimulus: '<div id="rectangle" style="display: none; background-color: grey;"></div>',
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
                document.getElementById('rectangle').style.display = 'block';
            }
        };

        // keyupイベントリスナー
        var keyupListener = function(e) {
            if (e.code === 'Space' && startTime !== null && !displayed) {
                var endTime = performance.now();
                var reactionTime = endTime - startTime;
                console.log("Reaction time: " + reactionTime + " milliseconds");
                document.getElementById('rectangle').style.display = 'none';
                displayed = true;
                document.removeEventListener('keydown', keydownListener);
                document.removeEventListener('keyup', keyupListener);
                jsPsych.finishTrial();
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
    stimulus: "続いて絵画の評価をしていただきます。<br>評価項目全てに回答するのではなく、事前に見た評価項目のみに回答してください。<br>enterキーで次のページに進みます。",
    choices: ["Enter"]
};

timeline.push(end_message);
