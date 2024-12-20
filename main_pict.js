var rs = "https://ssaku6.github.io/jpq7/";

/* create timeline */
var timeline = [];

var numtrl = 3;
var dur = [4000, 5000, 6000];
var adj1 = ["良いー悪い", "明るいー暗い"];
var adj2 = ["好きなー嫌いな", "軽いー重い"];
var durs=[];
var file=[];
var adjs=[];

var file = [];
for (var i = 0; i < numtrl; i++){
    file[i]=rs + "img2/"+ String(i+1) + ".jpg";
    durs[i]=dur[i%dur.length];
    adjs[i]=i%2;
    //console.log(file[i]);
}

var rdurs = jsPsych.randomization.shuffle(durs);
var rfiles = jsPsych.randomization.shuffle(file);
var radj = jsPsych.randomization.shuffle(adjs);

// var factors=[];
//  for (var i = 0; i < numtrl; i++){
//     factors.push({stimulus: rfiles[i], adj1: adj1[radj[i]], adj2: adj2[radj[i]], duration: rdurs[i]});
//  }

//ここまでで、factorsというオブジェクトに以下のようなものができる
var factors = [
    {stimulus: "https://ssaku6.github.io/jpq7/img2/1.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 4000, ratj: 0},
    {stimulus: "https://ssaku6.github.io/jpq7/img2/2.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 4000, ratj: 0},
    {stimulus: "https://ssaku6.github.io/jpq7/img2/3.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 4000, ratj: 0},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/4.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 4000, ratj: 0},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/5.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 5000, ratj: 0},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/6.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 5000, ratj: 0},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/7.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 5000, ratj: 0},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/8.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 5000, ratj: 0},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/9.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 6000, ratj: 0},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/10.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 6000, ratj: 0},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/11.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 6000, ratj: 0},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/12.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 6000, ratj: 0},

    // {stimulus: "https://ssaku6.github.io/jpq7/img2/13.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 4000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/14.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 4000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/15.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 4000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/16.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 4000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/17.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 5000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/18.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 5000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/19.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 5000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/20.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 5000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/21.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 6000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/22.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 6000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/23.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 6000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/24.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 6000, ratj: 1},

    // {stimulus: "https://ssaku6.github.io/jpq7/img2/25.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 4000, ratj: 0},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/26.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 4000, ratj: 0},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/27.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 4000, ratj: 0},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/28.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 4000, ratj: 0},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/29.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 5000, ratj: 0},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/30.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 5000, ratj: 0},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/31.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 5000, ratj: 0},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/32.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 5000, ratj: 0},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/33.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 6000, ratj: 0},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/34.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 6000, ratj: 0},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/35.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 6000, ratj: 0},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/36.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 6000, ratj: 0},

    // {stimulus: "https://ssaku6.github.io/jpq7/img2/37.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 4000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/38.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 4000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/39.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 4000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/40.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 4000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/41.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 5000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/42.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 5000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/43.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 5000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/44.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 5000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/45.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 6000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/46.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 6000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/47.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 6000, ratj: 1},
    // {stimulus: "https://ssaku6.github.io/jpq7/img2/48.jpg", adj1: "明るいー暗い", adj2: "軽いー重い", duration: 6000, ratj: 1}
];

    


 var preload ={
    type: 'preload',
    auto_preload: true
}

// 画像を表示している時間とサイズを格納する変数
var imageWidth;
var imageHeight;
var reactionTime;

var inst = {
    type: "html-keyboard-response",
    stimulus: function(){
        return "<p>この試行では、下の2つの形容詞についての評価をお願いします。</p><br><p><strong>" + jsPsych.timelineVariable('adj1') + "</strong></p><p><strong>" + jsPsych.timelineVariable('adj2') + "</strong></p><br>enterキーで絵が表示されます。"
    },
    choices: ["Enter"],  // Enterキーで次のステップに進む
};


// 固視点トライアル
var fixation = {
    type: "html-keyboard-response",
    stimulus: "<p style='font-size: 48px;'>+</p>",  // 固視点として「+」を表示
    choices: jsPsych.NO_KEYS,  // キー入力を無効にする
    trial_duration: 1000  // 固視点を1秒間表示
};

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
    },
    on_finish: function(data){
        data.task = 'resp';
    }
}

// 時間再現課題のインストラクション
var inst_time = {
    type: "html-keyboard-response",
    stimulus: `
    次の画面ではスペースキーを押すと四角形が表示され、離すと四角形が消えます。<br>
    今、絵画を見ていたと思う時間と同じ長さになるよう、四角形を表示させてください。<br>
    <strong>spaceキーを押す操作は1度しかできないので注意してください。</strong><br>
    Enterキーで進みます。`,
    choices: ["Enter"]
};

var space_key_trial = {
    type: 'html-keyboard-response',
    data: {
        task: 'response'},
    stimulus: `
           <div id="instructions">
            <p>スペースキーを押して四角形を表示して下さい</p>
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
        data.task = 'resp';
        data.rtime = reactionTime; //jsPsych.timelineVariable("reactionTime");
        data.adj = jsPsych.timelineVariable('adj1') === "良いー悪い" ? 0 : 1;//良いー悪いなら0

        //data.art = currentStimulus.img;  // 画像URLをデータとして保存
    }
};

// 次の画面に進む指示
var end_message = {
    type: "html-keyboard-response",
    stimulus: "続いて絵画の評価をしてください。<br>enterキーで次のページに進みます。",
    choices: ["Enter"],
    on_finish: function(data){
        data.task = 'image';
    }
};

var rating_trial = {
    type: "survey-likert",
    questions: [
        {name: "Q0", prompt: jsPsych.timelineVariable('adj1'), labels: ["1", "2", "3", "4", "5"], required: true},
        {name: "Q1", prompt: jsPsych.timelineVariable('adj2'), labels: ["1", "2", "3", "4", "5"], required: true}
    ],
    preamble: "<p>以下の評価項目について回答してください:</p>",
    on_finish: function(data){
        data.task = 'resp';
    }
};

var test_procedure = {
    timeline: [inst, fixation,show_image, inst_time, space_key_trial,rating_trial],
    timeline_variables: factors,  
    repetitions: 1,
    randomize_order: true//trueにする、練習試行つくる
  }
  timeline.push(test_procedure);