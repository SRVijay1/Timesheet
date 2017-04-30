<?php

	if($_POST) {
		$dbhost = 'localhost';
		$dbuser = 'root';
		$dbpass = '';
		$dbname = "timesheet";

		// Create connection
		$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

		// Check connection
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		}


		$sql = "SELECT * FROM user_login";


		$result = $conn->query($sql);
		$bool = false;
		if ($result->num_rows > 0) {
		    // output data of each row
			while($row = $result->fetch_assoc()) {
				if($_POST['username'] == $row["username"] && $_POST['password'] ==  $row["password"]) {
					
					$bool = true;
				}
			}


			$arr = array();
			if($bool == true){
				$arr['status'] = "Success";
				$arr['message'] = "Valid user";
			}else {
				$arr['status'] = "failed";
				$arr['message'] = "Invalid Username or password";
			}

			echo json_encode($arr);

		} else {
		    echo "0 results";
		}


		$conn->close();
	}else {
		$arr = array();
		$arr['status'] = "failed";
		$arr['message'] = "Invalid Service";
		
		echo json_encode($arr); 
	}

?>