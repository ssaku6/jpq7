var rs = "https://imaru.github.io/sakurai2024/";

/* create timeline */
var timeline = [];

var numtrl = 6;
var dur = [1000, 3000, 5000];
var adj1 = ["良いー悪い", "明るいー暗い"];
var adj2 = ["好きなー嫌いな", "軽いー重い"];
var durs=[];
var file=[];
var adjs=[];

var file = [];
for (var i = 0; i < numtrl; i++){
    file[i]=rs + "img3/"+ String(i+1) + ".jpg";
    durs[i]=dur[i%dur.length];
    adjs[i]=i%2;
    //console.log(file[i]);
}

var rdurs = jsPsych.randomization.shuffle(durs);
var rfiles = jsPsych.randomization.shuffle(file);
var radj = jsPsych.randomization.shuffle(adjs);

var factors=[];
 for (var i = 0; i < numtrl; i++){
    factors.push({stimulus: rfiles[i], adj1: adj1[radj[i]], adj2: adj2[radj[i]], duration: rdurs[i]});
 }

// ここまでで、factorsというオブジェクトに以下のようなものができる
// factors = {
//     [stimulus: "https://imaru.github.io/sakurai2024/img3/1.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 1000],
//     [stimulus: "https://imaru.github.io/sakurai2024/img3/6.jpg", adj1: "良いー悪い", adj2: "好きなー嫌いな", duration: 5000],
//     ... 今は6試行分で画像1-6がランダマイズされている。これは手動で書いても大丈夫。
// }

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
        {name: "Q0", prompt: jsPsych.timelineVariable('adj1'), labels: [" ", " ", " ", " ", " "], required: true},
        {name: "Q1", prompt: jsPsych.timelineVariable('adj2'), labels: [" ", " ", " ", " ", " "], required: true}
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
    randomize_order: false
  }
  timeline.push(test_procedure);