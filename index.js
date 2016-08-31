
function takeANumber(line, name) {
    //return a string that welcomes new user
    // add the new user to the array that they pass in
    return `Welcome, ${name}. You are number ${line.push(name)} in line.`
}

function nowServing(line) {
    if (line.length === 0) {
        return 'There is nobody waiting to be served!'
    } else {
        var customer = line.shift();
        return `Currently serving ${customer}.`;
        // can also do ${line.shift()}
    }
}

function currentLine(line) {
    if (line.length === 0) {
        return 'The line is currently empty.'
    } else {
        var lineMessage= 'The line is currently: ';
        line.forEach(function(person, index) {
            lineMessage += `${index + 1}. ${person}, `;
        });
        return lineMessage.slice(0, -2);
        // Loop through line
        // Look at each person's place in line and add that value to a string
        // Finish the loop, return the string
    }
}
