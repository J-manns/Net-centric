<?php
/**
 * Created by PhpStorm.
 * User: johnny
 * Date: 4/22/2016
 * Time: 9:22 AM
 */


require("DemoCreds.php");
echo $_POST["method"]();



function getWorkout(){
    $dbConn = mysqli_connect(demoServer(), demoUsername(), demoPassword(), demoDB());

    $query = " SELECT * FROM Workout";
    $result = $dbConn-> query($query);
    if ( $dbConn-> connect_error){
        $return->connect_error = "Connection failed: " . $dbConn->connect_error;
        $return->success = false;
        return json_encode($return);
    }

    $gardens = array();

    if ($result){
        while ($row = $result->fetch_array()){
            $allRows = array();
            for($i = 0; $i < 4; $i++){
                array_push($allRows, $row[$i]);
            }
            array_push($gardens, $allRows);
        }
    }

    $return = new StdClass();
    $return->success = true;
    $return->workout = $gardens;
    $return->querystring = $query;
    $return->credentials =
        demoUsername();
        demoPassword();
        demoDB() .
        " on " .
        demoServer();
    return json_encode($return);

}