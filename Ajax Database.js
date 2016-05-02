/**
 * Created by johnny on 4/22/2016.
 */



var workout;

function onLoad()
{
    getDatabase(false)
}


function getWorkout(async)
{
    ajax = ajaxgetBench("getBench", async);
    ajax.done(getBenchCallback);
    ajax.fail(function () {
        alert("Failure");
    });
}

function ajaxgetWorkout(method, async)
{
    return $ajax({
        url: 'Ajax DataBase.php',
        type: ' POST',
        async: async,
        data: {method: method
        }
    });
}

function getWorkoutCallback(responmse_in)
{
    var response = JSON.parse(response_in);
    workout = response["workout"];
    if(!response['success'])
    {
        $("#results").html("getBench failed");
    } else
    {
        $("#Week").find('option').remove();
        $.each(Bench,
                function(key, value)
                {
                    $("#Week")
                        .append($('<option>'),
                            {
                                value: value[0].toString(),
                                text: value[2].toString()
                            });
                }
         );
    }
}

function showWorkout()
{
    var workoutList = "";
    {
        $.each(workout, function (key, value)
        {
        var itemString = "";
        $.each(value, function ( key, item)
        {
            itemString += item + "&nbsp &nbsp &nbsp";
        });
        workoutList += itemString + '<br>';
    });
    $("workout").html(workoutList);
  }
}
















