var repo_site = "https://ssaku6.github.io/jpq7/";

// 使用する画像のパスを指定
var selectedImage = repo_site + 'img/01.jpg'; // 指定したい画像のパスを記入

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

// 強制終了のためのイベントリスナー
document.addEventListener('keydown', function(e) {
    if (e.code === 'Escape') { // Escキーを押したとき
        jsPsych.endCurrentTimeline(); // 現在のタイムラインを終了
        jsPsych.init({ // jsPsychを再初期化して実験を強制終了
            timeline: [], // 空のタイムラインを渡す
            on_finish: function() {
                alert("実験が強制終了されました。");
            }
        });
    }
});

// jsPsychを初期化
jsPsych.init({
    timeline: [preload, welcome, hello_trial],
    on_finish: function() {
        // 実験が終了した後の処理を追加（例：結果をサーバーに送信するなど）
        console.log("Experiment finished!");
    }
});
