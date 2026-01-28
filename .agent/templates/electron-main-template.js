/**
 * @file Electron Main Process Template
 * @description Main entry point for Electron application with security best practices
 */

const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');

// Keep a global reference of the window object to prevent garbage collection
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            // SECURITY: Isolation and sandboxing
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: path.join(__dirname, 'preload.js') // Assumption: preload script exists
        }
    });

    // Load the app (dev server or build file)
    const isDev = process.env.NODE_ENV === 'development';
    if (isDev) {
        mainWindow.loadURL('http://localhost:3000');
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'));
    }

    // Handle external links in default browser
    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        if (url.startsWith('https:')) {
            shell.openExternal(url);
        }
        return { action: 'deny' };
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// ----------------------------------------------------------------------
// IPC Handlers (Backend Logic)
// ----------------------------------------------------------------------

ipcMain.on('app:ping', (event) => {
    console.log('Ping received');
    event.reply('app:pong', 'Pong!');
});

ipcMain.handle('app:get-version', () => {
    return app.getVersion();
});

// ----------------------------------------------------------------------
// App Lifecycle
// ----------------------------------------------------------------------

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
