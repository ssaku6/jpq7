var repo_site = "https://ssaku6.github.io/jpq7/";


/* create timeline */
var timeline = [];

var test_stimuli_set1 = [
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/01.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/02.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/03.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/04.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/05.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/06.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/07.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/08.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/09.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/10.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/11.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/12.jpg'}
];

var test_stimuli_set2 = [
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/13.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/14.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/15.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/16.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/17.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/18.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/19.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/20.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/21.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/22.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/23.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/24.jpg'},
];

var test_stimuli_set3 = [
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/25.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/26.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/27.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/28.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/29.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/30.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/31.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/32.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/33.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/34.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/35.jpg'},
    {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/36.jpg'}
];

var test_stimuli_set4 = [
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/37.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/38.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/39.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/40.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/41.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/42.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/43.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/44.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/45.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/46.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/47.jpg'},
    {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/48.jpg'},
];


// すべての画像を1つのリストにまとめる
var all_stimuli = test_stimuli_set1.concat(test_stimuli_set2, test_stimuli_set3, test_stimuli_set4);

// 使用する画像をランダムに選ぶ
var shuffledStimuli = jsPsych.randomization.shuffle(all_stimuli);

// 使用した画像データを格納する配列
var selectedImages = [];

// 3つの画像を選択
for (var i = 0; i < 3; i++) {
    selectedImages.push(shuffledStimuli[i]); // ランダムに選んだ画像データを格納


// プリロードする画像データ
var preloadImages = selectedImages.map(function(stimulus) {
    return stimulus.img; // imgプロパティを取得
});

// 画像のプリロード
var preload = {
    type: 'preload',
    images: preloadImages, // 選択された画像をプリロード
};

// プリロードをタイムラインに追加
timeline.push(preload);




    // 例: 最初の選択された画像の形容詞対を取得する処理
var currentStimulus = selectedImages[0]; // 最初の画像を選択
;


//var selectedSet = jsPsych.randomization.sampleWithoutReplacement(conditionSets, 1)[0];  // ランダムで1セット選ぶ


var condition_trial = {
    type: "html-keyboard-response",
    stimulus: `<p>以下の項目について絵画を5段階で評価してもらいます。</p><br><p><strong>${currentStimulus.adjective1}</strong></p><p><strong>${currentStimulus.adjective2}</strong></p><br>enterキーで次に進みます。`,
    choices: ["Enter"],  // Enterキーで次のステップに進む
    
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
    choices: jsPsych.NO_KEYS,  // キー入力を無効にする
    trial_duration: 1000  // 固視点を1秒間表示
};

timeline.push(fixation_trial);

// 画像トライアルの修正
var hello_trial = {
    type: 'html-keyboard-response',
    stimulus: '<img id="jspsych-image" src="' + currentStimulus.img + '" style="display: none;">',
    choices: jsPsych.NO_KEYS,
    on_load: function() {
        var imageElement = document.getElementById('jspsych-image');
        imageElement.style.display = 'block';  // 画像を表示

        imageWidth = imageElement.naturalWidth;
        imageHeight = imageElement.naturalHeight;

        // ランダム表示時間の設定
        var time_array = [1000, 2000, 3000];
        var shuffled_times = jsPsych.randomization.repeat(time_array, 1);
        var displayTime = shuffled_times[0];  

        setTimeout(function() {
            imageElement.style.display = 'none';  // 表示時間後に非表示
            jsPsych.finishTrial();  // トライアル終了
        }, displayTime);
    },
    on_finish: function() {
        document.body.style.backgroundColor = 'white';  // 背景色をリセット
    }
};
timeline.push(hello_trial);







// 時間再現課題のインストラクション
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

var space_key_trial = {
    type: 'html-keyboard-response',
    data: {
        task: 'response'},
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
                reactionTime = endTime - startTime;
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
    },
    
    on_finish: function(data){
        data.correct = reactionTime; //jsPsych.timelineVariable("reactionTime");
        //data.art = stimulus.img;  // 各試行で選んだ画像のURLを記録
    }
};

timeline.push(space_key_trial);



// 次の画面に進む指示
var end_message = {
    type: "html-keyboard-response",
    stimulus: "続いて絵画の評価をしてください。<br>enterキーで次のページに進みます。",
    choices: ["Enter"]
};

timeline.push(end_message);

// 例: 最初の選択された画像の形容詞対を取得する処理
var currentStimulus = selectedImages[0]; // 最初の画像を選択
var rating_trial = {
    type: "survey-likert",
    data: {task: 'response'},
    questions: [
        {name: "Q0", prompt: `<p><strong>${currentStimulus.adjective1}</strong></p>`, labels: ["1", "2", "3", "4", "5"], required: true},
        {name: "Q1", prompt: `<p><strong>${currentStimulus.adjective2}</strong></p>`, labels: ["1", "2", "3", "4", "5"], required: true}
    ],
    preamble: "<p>以下の評価項目について回答してください:</p>",

    // on_finish: function(data) {
    //     data.q0 =  response.Q0;
    //     data.q1 =  response.Q1;
        // if (data.responses) {
        //     try {
        //         // アンケートの回答をJSONとしてパースする
        //         var responses = JSON.parse(data.responses);
        //         // 各質問の回答をdataオブジェクトに追加
        //         data.Q0 = responses.Q0;  // 最初の項目の回答
        //         data.Q1 = responses.Q1;  // 2つ目の項目の回答
        //     } catch (e) {
        //         console.error("Failed to parse responses:", e);
        //     }
        // } else {
        //     console.warn("No responses found.");
        // }
//     }
 };
timeline.push(rating_trial);
};