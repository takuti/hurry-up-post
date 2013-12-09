<?php
/*
Plugin Name: Hurry Up Post
Plugin URI: http://blog.takuti.me/hurry-up-post/
Description: Put automatic publish timer on your new post page.
Version: 0.1
Author: takuti
Author URI: http://takuti.me/
*/

add_action('admin_print_scripts-post-new.php', 'hup_load_script');

function hup_load_script() {
	$dir = plugin_dir_url( __FILE__ );
	echo "<script src='".$dir."hurry-up-post.js'></script>";
}