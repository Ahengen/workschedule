$(document).ready(function () {
    $("input[name=weekday]").on("change", daySelected)
});

daySelected();

function daySelected() {
    let radio = $("input[name=weekday]:checked").attr("id");
    let work;
    let exercise;
    switch (radio) {
        case "Monday":
        case "Wednesday":
        case "Friday":
            work = "7:00am-4:00pm";
            exercise = "7:00pm-8:00pm";
            break
        case "Tuesday":
        case "Thursday":
            work = "7:30am-4:30pm";
            exercise = "7:30pm-8:30pm";
            break
        case "Saturday":
        case "Sunday":
            work = "No Work";
            exercise = "7:00pm-8:00pm";
            break
        default:
            work = "";
            exercise = "";
    }
    $("#exercise").text(exercise);
    $("#work").text(work);
}