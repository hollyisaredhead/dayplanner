var time = document.getElementById('currentDay');
time.textContent = moment().format("dddd, MMM Do");

var currentTime = moment().format("HH");

//var schedule = 

for (i = 0; i < 9; i++) {

    var timeHr = i + 9;
    var ovrTime;
    var currentTime;

    if (timeHr === 12) {
        ovrTime = timeHr + "PM";
    }

    else if (timeHr > 12) {
        ovrTime = timeHr - 12 + "PM";
    }

    else {
        ovrTime = timeHr + "AM"
    }


    if (timeHr < currentTime) {
        currentTime = "past";
    }

    else if (timeHr === currentTime) {
        currentTime = "future";
    }

    else {
        currentTime = "present";
    }

    var newRow = $("<div class='row'>");
    var col1 = $("<div class = 'col-sm-2 hour'>");
    var col2 = $("<div class = 'col-sm-8 time-block'>");
    var col3 = $("<div class = 'col-sm-2'>");

    col1.text(ovrTime);

    var usrInput = $("<textarea class = 'w-100 h-100'>")
    col2.append(usrInput);

    usrInput.attr('class', currentTime)

    var svBtn = $("<button class = 'saveBtn w-100 h-100'>")
    col3.append(svBtn);

    //svBtn.click(localStorage.setItem())

    newRow.append(col1, col2, col3);

    newRow.attr('id', i);
    $(".container").append(newRow);

    // localStorage.usrInput = "";
    if (window.localStorage) {
        usrInput.click('input', function () {
            localStorage.setItem('textarea', usrInput.value);
        }, false);
    }
  //svBtn.click(localStorage.usrInput = "")

}

