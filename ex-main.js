var repo_site = "https://ssaku6.github.io/jpq7/";

/* create timeline */
/*var timeline = [];*/



// ウェルカムメッセージ
var welcome = {
    type: "html-keyboard-response",
    stimulus: "Enterキーを押すと実験が始まります。",
    choices: ["Enter"]
};



jsPsych.init({
    timeline: [welcome],
});
/*timeline.push(welcome);*/

