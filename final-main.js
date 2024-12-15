var repo_site = "https://ssaku6.github.io/jpq7/";


/* create timeline */
var timeline = [];

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
var trials = jsPsych.randomization.factorial({
    conditions: conditions,
    repetitions: 1
}, 1);

 

// 画像を表示している時間とサイズを格納する変数
var imageWidth = 0;
var imageHeight = 0;
var reactionTime;

// 画像をプリロードするトライアル
var preload = {
    type: 'preload',
    images: [selectedImage]
};

timeline.push(preload);



// 画像を表示する前に、形容詞対のセットの最初と2つ目の項目を同時に表示するトライアル
var condition_trial = {
    type: "html-keyboard-response",
    stimulus: `<p>以下の項目について絵画を5段階で評価してもらいます。</p><br><p>${selectedSet[0]}</p><p>${selectedSet[1]}</p>`,  // 両方の項目を表示
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

// 画像トライアル
var hello_trial = {
    type: 'html-keyboard-response',
    stimulus: '<img id="jspsych-image" src="' + selectedImage + '" style="display: none;">',
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
    },
    
    on_finish: function(data){
       data.correct = reactionTime;
       data.art = selectedImage;
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

var rating_trial = {
    type: "survey-likert",
    data:{task: 'response'},
    questions: [
        {name: "Q0", prompt: `<p><strong>${selectedSet[0]}</strong></p>`, labels: ["1", "2", "3", "4", "5"], required: true},
        {name: "Q1", prompt: `<p><strong>${selectedSet[1]}</strong></p>`, labels: ["1", "2", "3", "4", "5"], required: true}
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
