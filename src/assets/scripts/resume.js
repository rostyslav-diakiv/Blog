const obj = {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#00e5ff',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#00e5ff'},
    to: {color: '#2c18f1'},
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
    }
};

const ecommercef = new ProgressBar.Line(ecommerce, obj);
const programmanagementf = new ProgressBar.Line(programmanagement, obj);
const agilef = new ProgressBar.Line(agile, obj);
const javaf = new ProgressBar.Line(java, obj);
const webdevf = new ProgressBar.Line(webdev, obj);
const algorf = new ProgressBar.Line(algor, obj);

ecommercef.animate(0.5); // Number from 0.0 to 1.0
programmanagementf.animate(1.0);
agilef.animate(0.8);
javaf.animate(0.2);
webdevf.animate(0.4);
algorf.animate(0.5);

// setTimeout(() => {
//     document.getElementById('wrapperId').style.backgroundColor = '#ED6A5A';
// }, 2000);
//
// setTimeout(() => {
//     const d = document.getElementsByClassName("teal-icon");
//
//     for (var i=0;i<d.length;i++)
//     {
//         var text = d[i].textContent;
//
//         if (text.length === 1){
//             d[i].style.color ='blue';
//         }
//         else {
//             d[i].setAttribute("style", "color:red;");
//         }
//     }
//
// }, 2000);
