var rs = "https://ssaku6.github.io/jpq7/";

/* create timeline */
var timeline = [];

// var test_stimuli_set1 = [
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/01.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/02.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/03.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/04.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/05.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/06.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/07.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/08.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/09.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/10.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/11.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/12.jpg'}
// ];

// var test_stimuli_set2 = [
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/13.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/14.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/15.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/16.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/17.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/18.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/19.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/20.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/21.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/22.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/23.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/24.jpg'},
// ];

// var test_stimuli_set3 = [
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/25.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/26.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/27.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/28.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/29.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/30.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/31.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/32.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/33.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/34.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/35.jpg'},
//     {adjective1: ["良いー悪い"], adjective2: ["好きなー嫌いな"], img: repo_site + 'img2/36.jpg'}
// ];

// var test_stimuli_set4 = [
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/37.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/38.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/39.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/40.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/41.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/42.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/43.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/44.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/45.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/46.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/47.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/48.jpg'},
// ];

// var test_stimuli_set0 = [
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/37.jpg'},
//     {adjective1: ["明るいー暗い"], adjective2: ["軽いー重い"], img: repo_site + 'img2/48.jpg'}
// ];

var numtrl = 6;
var dur = [1000, 3000, 5000];
var adj1 = ["良いー悪い", "明るいー暗い"];
var adj2 = ["好きなー嫌いな", "軽いー重い"];
var durs=[];
var file=[];
var adjs=[];

var file = [];
for (var i = 0; i < numtrl; i++){
    file[i]="img3/"+ String(i+1) + ".jpg";
    durs[i]=dur[i%dur.length];
    adjs[i]=i%2;
}

var rdurs = jsPsych.randomization.shuffle(durs);
var rfiles = jsPsych.randomization.shuffle(file);
var radj = jsPsych.randomization.shuffle(adjs);

var factors=[];
 for (var i = 0; i < numtrl; i++){
    factors.push({stimulus: rfiles[i], adj: radj[i], duration: rdurs[i]});
    //console.log(rfiles[i]);
    //console.log(radj[i]);
    //console.log(rdurs[i]);
 }


// 画像を表示している時間とサイズを格納する変数
var imageWidth;
var imageHeight;
var reactionTime;


// 例として、最初の要素を取り出して表示する場合
//var currentStimulus = test_rand[0]; // ランダムに選ばれた画像に関連する形容詞対を取得
var condition_trial = {
    type: "html-keyboard-response",
    stimulus: function(){
        return "<p>以下の項目について絵画を5段階で評価してもらいます。</p><br><p><strong>" + adj1[jsPsych.timelineVariable('adj')] + "</strong></p><p><strong>" + adj2[jsPsych.timelineVariable('adj')] + "</strong></p><br>enterキーで次に進みます。"
    },
    choices: ["Enter"],  // Enterキーで次のステップに進む
};

// タイムラインに試行を追加
//timeline.push(condition_trial);


// ウェルカムメッセージ
var welcome = {
    type: "html-keyboard-response",
    stimulus: "enterキーを押すと絵画が表示されます。絵画は自動で消えるまで、表示されます。<br>事前に見た評価項目に基づき、絵画が消えるまで見続けてください。",
    choices: ["Enter"]
};
//timeline.push(welcome);


// 固視点トライアル
var fixation_trial = {
    type: "html-keyboard-response",
    stimulus: "<p style='font-size: 48px;'>+</p>",  // 固視点として「+」を表示
    choices: jsPsych.NO_KEYS,  // キー入力を無効にする
    trial_duration: 1000  // 固視点を1秒間表示
};

// show image

var show_image = {
    type: "image-keyboard-response",
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: jsPsych.NO_KEYS,
    trial_duration: jsPsych.timelineVariable('duration'),
    on_load: function(){
        var image = new Image();
        image.onload=function(){
            imageWidth=image.width;
            imageHeight=image.height;
        }
        image.src=jsPsych.timelineVariable('stimulus');
    }
}

 // 画像トライアルの修正
// var show_image = {
//     type: 'html-keyboard-response',
//     stimulus: function(){
//         return '<img id="jspsych-image" src="' + jsPsych.timelineVariable('stimulus') + '" style="display: none;">'
//     },
//     //stimulus: jsPsych.timelineVariable('img'),
//     choices: jsPsych.NO_KEYS,
//     trial_duration: jsPsych.timelineVariable('duration'),
//     on_load: function() {
//         var imageElement = document.getElementById('jspsych-image');
//         var image = new Image();
//         image.onload=function(){
//             imageWidth=image.width;
//             imageHeight=image.height;
//         }
//         image.src=jsPsych.timelineVariable('stimulus');
//         imageElement.style.display = 'block';  // 画像を表示
//         //imageWidth = imageElement.naturalWidth;
//         //imageHeight = imageElement.naturalHeight;
//         console.log(imageElement.naturalWidth);
//         // console.log(currentStimulus.img)
//         // // ランダム表示時間の設定
//         // var time_array = [1000, 2000, 3000];
//         // var shuffled_times = jsPsych.randomization.repeat(time_array, 1);
//         // var displayTime = shuffled_times[0];  

//         // setTimeout(function() {
//         //     imageElement.style.display = 'none';  // 表示時間後に非表示
//         //     jsPsych.finishTrial();  // トライアル終了
//         // }, displayTime);
//     },
//     on_finish: function() {
//         document.body.style.backgroundColor = 'white';  // 背景色をリセット
//     }
// };


// 時間再現課題のインストラクション
var welcome2 = {
    type: "html-keyboard-response",
    stimulus: `
    次の画面ではspaceキーを長押しすると四角形が表示され、離すと四角形が消えます。<br>
    絵画を見ていたと思う時間と同じ時間、四角形を表示させてください。<br>
    <strong>spaceキーを押す操作は1度しかできないので注意してください。</strong><br>
    enterキーで次のページに進みます。`,
    choices: ["Enter"]
};

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
        //console.log(imageWidth);
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
        //console.log(startTime);

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
        //data.art = currentStimulus.img;  // 画像URLをデータとして保存
    }
};




// 次の画面に進む指示
var end_message = {
    type: "html-keyboard-response",
    stimulus: "続いて絵画の評価をしてください。<br>enterキーで次のページに進みます。",
    choices: ["Enter"]
};

//var currentStimulus = test_rand[0]; // ランダムに選ばれた画像に関連する形容詞対を取得

var rating_trial = {
    type: "survey-likert",
    data: {task: 'response'},
    questions: [
        {name: "Q0", prompt: `<p><strong> jsPsych.timelineVariable('adj1') </strong></p>`, labels: ["1", "2", "3", "4", "5"], required: true},
        {name: "Q1", prompt: `<p><strong> jsPsych.timelineVariable('adj2') </strong></p>`, labels: ["1", "2", "3", "4", "5"], required: true}
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



var test_procedure = {
    timeline: [condition_trial, fixation_trial,show_image, welcome2,space_key_trial,end_message,rating_trial],
    timeline_variables: factors,  // 画像を3つに制限,
    repetitions: 1,
    randomize_order: true
  }
  timeline.push(test_procedure);