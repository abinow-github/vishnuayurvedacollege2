<?php 
session_start();

if (isset($_SESSION['id']) && isset($_SESSION['username'])) {
 ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.ckeditor.com/ckeditor5/39.0.2/classic/ckeditor.js"></script>
    <title>Edit Image and Caption</title>
    <!-- Add a link to your external stylesheet here if needed -->
</head>
<body>
   <?php
   include("../root/db.php");
   $id=$_GET['sa'];
   $sql="SELECT * FROM gallery WHERE id='$id'";
   $result=$mysqli->query($sql);
   if($result->num_rows>0){
    while($rows=$result->fetch_assoc()){
?>
        <table width="80%" align="center" cellpadding="0" cellspacing="0">
            <tr>
                <td>
                    <form action="us_update_back.php" method="post" enctype="multipart/form-data" id="formID" class="formular">
                        <table width="100%" border="1" cellspacing="0" cellpadding="0">
                            <tr>
                                <td width="175">ID</td>
                                <td width="419"><input type="text" name="image_id" value="<?php echo $rows['id'];?>" readonly/></td>
                            </tr>
                            
                            <tr>
                                <td>Current Image</td>
                                <td>
                                    <img src="../images/<?php echo $rows['image'];?>" alt="Current Image" style="max-width: 300px; max-height: 300px;">
                                </td>
                            </tr>

                            <tr>
                                <td>New Image</td>
                                <td><input type="file" name="new_image" class=""/></td>
                            </tr>
                            
                            <tr>
                                <td>Caption</td>
                                <td style="width: 90%;"><input style="width: 99%;" type="text" name="caption" value="<?php echo $rows['caption'];?>"/></td>
                            </tr>
                            
                            <tr>
                                <td>&nbsp;</td>
                                <td>
                                    <input type="hidden" name="image_id" id="image_id" value="<?php echo $rows['id'];?>">
                                    <input type="submit" name="button" id="button" value="Submit"/>
                                </td>
                            </tr>
                        </table>
                    </form>
                </td>
            </tr>
        </table>
<?php
        }
    }
?>
</body>
</html>
<?php 
} else {
    header("Location: ../login/index.php");
    exit();
}
?>
