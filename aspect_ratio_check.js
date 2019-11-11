var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

if (w/h <= 9/16) {
    alert("This website is best viewed on a wider screen. Please rotate your device or use a wider display to get the best user experience.");
}