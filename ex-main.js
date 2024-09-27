var repo_site = "https://ssaku6.github.io/jpq7/";

// タイムラインを初期化
var timeline = [];

    // 使用する画像のパスを指定
    var selectedImage = repo_site+'img/01.jpg'; // 指定したい画像のパスを記入

    // 画像を表示している時間とサイズを格納する変数
    var imageWidth = 0;
    var imageHeight = 0;

    // 画像をプリロードするトライアル
    var preload = {
        type: 'preload',
        images: [selectedImage]
    };

    var welcome = {
        type: "html-keyboard-response",
        stimulus: "Enterキーを押すと実験が始まります。",
        choices: ["Enter"]
    };

    // 画像トライアル
    var hello_trial = {
        type: 'html-keyboard-response',
        stimulus: '<img id="jspsych-image" src="' + selectedImage + '" style="display: none;">',
        choices: jsPsych.NO_KEYS,
        on_load: function() {
            var imageElement = document.getElementById('jspsych-image');
            var startTime = performance.now();

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

    var welcome2 = {
        type: "html-keyboard-response",
        stimulus: `絵画を評価していた時間を再現してください。<br>
        次の画面では、真っ白な画面が表示れます。<br>
        その画面ではSpaceキーを長押しすると四角形が表示され、押し続けることを止めると消えます。<br>
        絵画を見ていた時間と同じ時間、四角形を表示させてください。<br>
        <strong>spaceキーを押す操作は1度しかできないので注意してください</strong><br>
        enterキーで進む`,
        choices: ["Enter"]
    };

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

                    // 実験終了トライアルを追加
                    jsPsych.finishTrial();
                }
            };

            // イベントリスナーの追加
            document.addEventListener('keydown', keydownListener);
            document.addEventListener('keyup', keyupListener);
        }
    };

    // 次の画面に進む指示を表示するトライアル
    var end_message = {
        type: "html-keyboard-response",
        stimulus: "実験は終了しました。次の画面に進んでください。",
        choices: ["Enter"]
    };

   
// プリロードトライアルを追加
timeline.push(preload);
timeline.push(welcome);
timeline.push(hello_trial);
timeline.push(welcome2);
timeline.push(space_key_trial);
timeline.push(end_message);

// jsPsychの初期化
jsPsych.init({
    timeline: timeline,  // 定義されたtimelineを渡す
});