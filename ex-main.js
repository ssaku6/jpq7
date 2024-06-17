var repo_site = "https://ssaku6.github.io/jpq7/";

// 画像ファイル名の配列
var imageFiles = [
    'jspsych-6.3.1/img/01.jpg',
    'jspsych-6.3.1/img/02.jpg',
    'jspsych-6.3.1/img/03.jpg',
    'jspsych-6.3.1/img/04.jpg',
    'jspsych-6.3.1/img/05.jpg',
    'jspsych-6.3.1/img/06.jpg',
    'jspsych-6.3.1/img/07.jpg',
    'jspsych-6.3.1/img/08.jpg',
    'jspsych-6.3.1/img/09.jpg',
    'jspsych-6.3.1/img/10.jpg',
];

// ランダムに1つの画像ファイル名を選択
var selectedImage = jsPsych.randomization.sampleWithoutReplacement(imageFiles, 1)[0];

var time_array = [500, 5000]; // 表示時間の配列を定義

// 表示時間の配列をランダムに並び替え
var shuffled_time = jsPsych.randomization.sampleWithoutReplacement(time_array, 2)[0];

// 画像トライアル
var hello_trial = {
    type: 'image-keyboard-response',
    stimulus: selectedImage,
    trial_duration: shuffled_time,
    choices: jsPsych.NO_KEYS, // スペースキーを押して画像が表示された後の選択を防ぐためにキー入力を無効にする
    on_finish: function(){
        document.body.style.backgroundColor = 'white'; // 画像が表示された後に背景色を白に変更する
    }
}

var welcome = {
    type : "html-keyboard-response",
    stimulus : "Enterキーを押すと実験が始まります",
    choices: ["Enter"]
};

// スペースキーで四角形を表示するトライアル
var space_key_trial = {
    type: 'html-keyboard-response',
    stimulus: '',
    choices: jsPsych.NO_KEYS, // スペースキーの押し始めと離しを検知するためにキー入力を無効にする
    on_start: function(trial){
        trial.stimulus = '<div id="rectangle" style="width: 100px; height: 100px; background-color: red; display: none;"></div>';
        var startTime = null;

        // keydownイベントを設定
        document.addEventListener('keydown', function(e){
            if(e.code === 'Space' && startTime === null){
                startTime = performance.now();
                document.getElementById('rectangle').style.display = 'block';
            }
        });

        // keyupイベントを設定
        document.addEventListener('keyup', function(e){
            if(e.code === 'Space' && startTime !== null){
                var endTime = performance.now();
                var reactionTime = endTime - startTime;
                console.log("Reaction time: " + reactionTime + " milliseconds");
                document.getElementById('rectangle').style.display = 'none';
                startTime = null; // リセットする
            }
        });
    }
}