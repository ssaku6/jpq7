var repo_site = "https://ssaku6.github.io/jpq7/";


 /* preload images */
 var preload = {
    type: 'preload',
    images: [repo_site+'img/blue.png', repo_site+'img/orange.png']
  };
  

jsPsych.init({
    timeline: [ preload,],
});
