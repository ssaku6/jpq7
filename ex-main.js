var repo_site = "https://ssaku6.github.io/jpq7/";


var welcome2 = {
    type: "html-keyboard-response",
    stimulus: `
    絵画を評価していた時間を再現してください。<br>
    次の画面では、真っ白な画面が表示れます。<br>
    その画面ではSpaceキーを長押しすると四角形が表示され、押し続けることを止めると消えます。<br>
    絵画を見ていた時間と同じ時間、四角形を表示させてください。<br>
    <strong>spaceキーを押す操作は1度しかできないので注意してください</strong>`,
    choices: ["Enter"]
};

jsPsych.init({
    timeline: [ welcome2,],
});
