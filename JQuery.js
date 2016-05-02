/**
 * Created by johnny on 3/15/2016.
 */

function HideImg()
{
    $(document).ready(function () {
        $("#img1").hide();
    })
}

function ShowImg()
{
    $(document).ready(function () {
        $("#img1").show();
    })
}
function DisplayText(TextToDisplay) {
    $(document).ready(function () {
        $("#img1J").click(function () {
            alert("Professor Retterer at the end of the semester party");
        });
    });
}
function HideAllTags(TagToHide)
{
    $(TagToHide).hide();
}

function ShowAllTags(TagToHide)
{
    $(TagToHide).show();
}


function DoubleClick ()
{
    $(document).ready(function () {
        $("img").dblclick(function () {
            $(this).hide();
        });
    });
}