import Cocoa

@main
class AppDelegate: NSObject, NSApplicationDelegate {

    var window: NSWindow!

    // Lifecycle: App Launch
    func applicationDidFinishLaunching(_ aNotification: Notification) {
        // Create the window programmatically
        let screenSize = NSScreen.main?.frame.size ?? CGSize(width: 800, height: 600)
        let windowSize = CGSize(width: 800, height: 600)
        let rect = NSRect(
            x: (screenSize.width - windowSize.width) / 2,
            y: (screenSize.height - windowSize.height) / 2,
            width: windowSize.width,
            height: windowSize.height
        )
        
        window = NSWindow(
            contentRect: rect,
            styleMask: [.titled, .closable, .miniaturizable, .resizable, .fullSizeContentView],
            backing: .buffered,
            defer: false
        )
        
        window.title = "My Mac App"
        window.contentViewController = ViewController() // Assume ViewController exists
        window.makeKeyAndOrderFront(nil)
        
        setupMenus()
    }

    // Lifecycle: App Teardown
    func applicationWillTerminate(_ aNotification: Notification) {
        // Insert code here to tear down your application
    }

    // Behavior: Close app when last window closed
    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool {
        return true
    }

    // Setup custom menus
    private func setupMenus() {
        let mainMenu = NSMenu()
        NSApplication.shared.mainMenu = mainMenu
        
        // App Menu
        let appMenuItem = NSMenuItem()
        mainMenu.addItem(appMenuItem)
        let appMenu = NSMenu()
        appMenuItem.submenu = appMenu
        
        appMenu.addItem(withTitle: "Quit My App", action: #selector(NSApplication.terminate(_:)), keyEquivalent: "q")
    }
}
