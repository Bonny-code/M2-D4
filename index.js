

function groupSelector() {
    let input = document.getElementById("inputText").value;
    let names = input.split(",");

    let groupSize = document.getElementById("groupNumber").value;
    let groupCount = Math.ceil(names.length / groupSize);
    let groups = [];

    for (let i = 0; i < groupCount; i++) {
        let group = [];
        for (let j = 0; j < groupSize; j++) {
            let random = Math.floor(Math.random() * names.length);
            let name = names[random];
            if (name != undefined) {
                group.push(name);
                names.splice(names.indexOf(name), 1);
            }
        }
        group.sort();
        groups.push(group);
    }
    printGroups(groups);
}

function printGroups(group) {
    let output = document.getElementById("resInput");
    output.value = "";
    for (let i = 0; i < group.length; i++) {
        let currentGroup = "";
        for (let j = 0; j < group[i].length; j++) {
            currentGroup = group[i].join(",");
        }
        output.value += currentGroup + "\r";
    }
}











