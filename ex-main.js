var repo_site = "https://ssaku6.github.io/jpq7/img";

// 画像ファイル名の配列
var imageFiles = [
    'jspsych-6.3.1/img/01.jpg',
    'jspsych-6.3.1/img/02.jpg',
    'jspsych-6.3.1/img/03.jpg',
    'jspsych-6.3.1/img/04.jpg',
    'jspsych-6.3.1/img/05.jpg',
    'jspsych-6.3.1/img/31.jpg',
    'jspsych-6.3.1/img/32.jpg',
    'jspsych-6.3.1/img/33.jpg',
    'jspsych-6.3.1/img/34.jpg',
    'jspsych-6.3.1/img/35.jpg',
];

// ランダムに1つの画像ファイル名を選択
var selectedImage = repo_site + jsPsych.randomization.sampleWithoutReplacement(imageFiles, 1)[0];

// 画像を表示している時間とサイズを格納する変数
var viewingTime = 3000; // 3秒（3000ミリ秒）

var welcome = {
    type: "html-keyboard-response",
    stimulus: "Enterキーを押すと実験が始まります。",
    choices: ["Enter"]
};

// 画像を3秒間表示するトライアル
var image_trial = {
    type: 'html-keyboard-response',
    stimulus: '<img id="jspsych-image" src="' + selectedImage + '">',
    choices: jsPsych.NO_KEYS,
    trial_duration: viewingTime,
    on_finish: function(){
        document.body.style.backgroundColor = 'white';
    }
};

var welcome2 = {
    type: "html-keyboard-response",
    stimulus: `
    絵画を評価していた時間を再現してください。<br>
    Spaceキーを押して操作してください。`,
    choices: ["Enter"]
};

// スペースキーで四角形を表示するトライアル
var space_key_trial = {
    type: 'html-keyboard-response',
    stimulus: '<div id="rectangle" style="display: none; width: 300px; height: 200px; background-color: grey;"></div>',
    choices: jsPsych.NO_KEYS,
    on_start: function(trial) {
        var startTime = null;
        var displayed = false;

        var keydownListener = function(e) {
            if (e.code === 'Space' && startTime === null && !displayed) {
                startTime = performance.now();
                document.getElementById('rectangle').style.display = 'block';
            }
        };

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

        document.addEventListener('keydown', keydownListener);
        document.addEventListener('keyup', keyupListener);
    }
};

var end_experiment = {
    type: 'html-keyboard-response',
    stimulus: '続いて今見た絵画を5段階で評価してください。',
    choices: jsPsych.NO_KEYS
};

jsPsych.init({
    timeline: [welcome, image_trial, welcome2, space_key_trial, end_experiment],
});
