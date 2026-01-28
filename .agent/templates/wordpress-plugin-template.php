<?php
/**
 * Plugin Name:       My Awesome Plugin
 * Plugin URI:        https://example.com/plugins/my-awesome-plugin
 * Description:       A template for a production-ready WordPress plugin using OOP standards.
 * Version:           1.0.0
 * Author:            Antigravity
 * Author URI:        https://example.com
 * Text Domain:       my-awesome-plugin
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

/**
 * Main Plugin Class
 *
 * Implements Singleton pattern to maintain a single instance.
 */
class My_Awesome_Plugin
{

    /**
     * Unique identifier for the plugin.
     *
     * @since    1.0.0
     * @var      string
     */
    protected $plugin_name;

    /**
     * The current version of the plugin.
     *
     * @since    1.0.0
     * @var      string
     */
    protected $version;

    /**
     * Instance of this class.
     *
     * @var object
     */
    protected static $instance = null;

    /**
     * Initialize the plugin.
     */
    private function __construct()
    {
        $this->plugin_name = 'my-awesome-plugin';
        $this->version = '1.0.0';

        $this->load_dependencies();
        $this->set_locale();
        $this->define_admin_hooks();
        $this->define_public_hooks();
    }

    /**
     * Return an instance of the class.
     *
     * @return My_Awesome_Plugin
     */
    public static function get_instance()
    {
        if (null == self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Load required dependencies.
     */
    private function load_dependencies()
    {
        // require_once plugin_dir_path( __FILE__ ) . 'includes/class-my-awesome-plugin-loader.php';
    }

    /**
     * Define the locale for this plugin for internationalization.
     */
    private function set_locale()
    {
        add_action('plugins_loaded', function () {
            load_plugin_textdomain(
                'my-awesome-plugin',
                false,
                dirname(plugin_basename(__FILE__)) . '/languages/'
            );
        });
    }

    /**
     * Register all of the hooks related to the user interface.
     */
    private function define_public_hooks()
    {
        add_action('the_content', [$this, 'filter_content_example']);
    }

    /**
     * Register all of the hooks related to the admin area functionality.
     */
    private function define_admin_hooks()
    {
        add_action('admin_menu', [$this, 'add_plugin_admin_menu']);
    }

    /**
     * Content Filter Example
     */
    public function filter_content_example($content)
    {
        if (is_single()) {
            return $content . '<p>Powered by My Awesome Plugin</p>';
        }
        return $content;
    }

    /**
     * Add options page
     */
    public function add_plugin_admin_menu()
    {
        add_options_page(
            'My Plugin Settings',
            'My Plugin',
            'manage_options',
            'my-awesome-plugin',
            function () {
                echo '<h1>My Awesome Plugin Settings</h1>';
            }
        );
    }
}

/**
 * Activation Hook
 */
function activate_my_awesome_plugin()
{
    // FLush rewrite rules, create DB tables, etc.
}
register_activation_hook(__FILE__, 'activate_my_awesome_plugin');

/**
 * Deactivation Hook
 */
function deactivate_my_awesome_plugin()
{
    // Flush rewrite rules
}
register_deactivation_hook(__FILE__, 'deactivate_my_awesome_plugin');

/**
 * Begins execution of the plugin.
 */
function run_my_awesome_plugin()
{
    $plugin = My_Awesome_Plugin::get_instance();
}
run_my_awesome_plugin();
