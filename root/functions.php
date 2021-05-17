/**
Enqueues scripts video-background.
*/
function webkato_scripts() {
wp_enqueue_script( 'video-background', get_template_directory_uri() . '/js/video-background.js', array('jquery'), true );
}
add_action( 'wp_enqueue_scripts', 'webkato_scripts' );