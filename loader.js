// loadFiles('hoisting');
// loadFiles('jsPart');
// loadFiles('array');
// loadFiles('Object');
// loadFiles('date');
// loadFiles('regExp');
//loadFiles('math');
loadFiles('dom');
loadFiles('cssPart', 'css', 'css');

/**
 * Add js files dynamically
 * @param {String} file the files to append in the head
 * @param {String} type
 * @return {undefined}
 */
function loadFiles(file, repertory='js', type = 'js')  {
    const header = document.getElementsByTagName('head')[0];
    const script = document.createElement(type === 'js' ? 'script' : 'link');
    script.setAttribute('type', type === 'js' ? 'text/javascript' : 'text/css');
    if(type === 'css') script.setAttribute('rel', 'stylesheet');
    script.setAttribute(type === 'js' ? 'src' : 'href', `${repertory}/${file}.${type}`);
    header.appendChild(script);
}