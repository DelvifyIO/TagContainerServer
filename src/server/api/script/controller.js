import {client} from '../../../mongo/models/schema';

const paginations = ['limit', 'offset'];
const sorts = ['sortBy', 'order'];


const getScript = (req, res) => {
    const API_HOST = process.env.API_HOST;
    const { clientId } = req.params;

    return res.send("" +
        "window.onload = function () {\n" +
        "    let timelapse = 0;\n" +
        "    const timer = setInterval(function () { timelapse++; }, 1);\n" +
        "    const API_HOST = \"" + API_HOST + "\";\n" +
        "    const CLIENT_ID = \"" + clientId + "\";\n" +
        "    const href = window.location.href;\n" +
        "    const Http = new XMLHttpRequest();\n" +
        "    const url = API_HOST + '/tag/' + CLIENT_ID + '?path=' + href;\n" +
        "    Http.open(\"GET\", url);\n" +
        "    Http.send();\n" +
        "\n" +
        "    Http.onreadystatechange = function (e) {\n" +
        "        if (this.readyState == 4 && this.status == 200) {\n" +
        "            const result = JSON.parse(Http.responseText);\n" +
        "            let container = document.createElement(\"div\")\n" +
        "            container.setAttribute(\"id\", \"delvifyTagContainer\");" +
        "            container.setAttribute(\"style\", \"display:none;\");" +
        "            result.forEach(function (tag) {\n" +
        "                clearInterval(timer);\n" +
        "                let delay = tag.delay ? Math.max(tag.delay * 1000 - timelapse, 0) : 0;\n" +
        "                const commentTags = tag.script.match(/^(<!--)((.|\\n)*?)(-->)/gm) || []\n" +
        "                const scriptTags = tag.script.match(/^(<script)((.|\\n)*?)(\\/script>)/gm) || []\n" +
        "                const noscriptTags = tag.script.match(/^(<noscript)((.|\\n)*?)(\\/noscript>)/gm) || []\n" +
        "                setTimeout(function () { " +
        "                   if (commentTags[0]) {\n" +
        "                       const commentHeadText = commentTags[0].replace(/(<!--)|(-->)/g,'');\n" +
        "                       const commentHead = document.createComment(commentHeadText);\n" +
        "                       container.appendChild(commentHead);\n" +
        "                   }\n" +
        "                   scriptTags.forEach(function (scriptTag) {\n" +
        "                       const scriptDom = new DOMParser().parseFromString(scriptTag,  'application/xml').childNodes[0];\n" +
        "                       const writes = scriptDom.innerHTML.match(/^(document\\.write\\(')((.|\\n)*?)('\\);*)/gm) || []\n" +
        "                       const appends = []\n" +
        "                       writes.forEach(function (write) {" +
        "                           const writeText = write.replace(/(document\\.write\\(')|('\\))/g,'');\n" +
        "                           const writeDom = new DOMParser().parseFromString(writeText,  'application/xml').childNodes[0];\n" +
        "                           const append = document.createElement(\"div\");\n" +
        "                           append.innerHTML = writeText\n" +
        "                           appends.push(append)\n" +
        "                       });\n" +
        "                       let script = document.createElement(\"script\")\n" +
        "                       if (scriptDom.innerHTML) script.innerHTML = scriptDom.innerHTML.replace(/^(document\\.write\\(')((.|\\n)*?)('\\);*)/gm, '');\n" +
        "                       else script.src = scriptDom.src;\n" +
        "                       script.async = false;\n" +
        "                       container.appendChild(script);\n" +
        "                       appends.forEach(function (append) {\n" +
        "                           container.appendChild(append);\n" +
        "                       });\n" +
        "                   });\n" +
        "                   noscriptTags.forEach(function (noscriptTag) {\n" +
        "                       const noscriptDom = new DOMParser().parseFromString(noscriptTag,  'application/xml').childNodes[0];\n" +
        "                       container.appendChild(noscriptDom);\n" +
        "                   });\n" +
        "                   if (commentTags[1]) {\n" +
        "                       const commentEndText = commentTags[1].replace(/(<!--)|(-->)/g,'');\n" +
        "                       const commentEnd = document.createComment(commentEndText);\n" +
        "                       container.appendChild(commentEnd);\n" +
        "                   }\n" +
        "                }, delay);\n" +
        "            });\n" +
        "            document.body.appendChild(container)\n" +
        "        }\n" +
        "    }\n" +
        "};" +
        "");
};

const checkScript = (req, res) => {
    console.log('checkScript');
    const testScript = "<script>console.log('tessst');</script>";
    return res.send(testScript);
};

export {
    checkScript,
    getScript,
};