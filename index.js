


function groupSelector() {
    var input = document.getElementById("inputText").value;
    var names = input.replace(/\s*,\s*|\n/g, ",").split(",");
    
    var groupSize = document.getElementById("groupNumber").value;
    var groupCount = Math.ceil(names.length / groupSize);
    var groups = [...Array(groupCount)].map(() => Array());
    
    var i = 0
    while (names.length > 0) {
        var m = Math.floor(Math.random() * names.length);
        groups[i].push(names[m]);
        names.splice(m, 1);
        i = (i >= groupCount - 1) ? 0 : i + 1
    }
    printGroups(groups);
}

function printGroups(groups) {
    var output = document.getElementById("resInput");
    output.value = groups.map(group => group.join(',')).join('\r');
}