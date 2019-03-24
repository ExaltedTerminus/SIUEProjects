const electron = require("electron");
const { Menu, shell, dialog } = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const url = require("url");
const os = require("os");
const fs = require("fs");

const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS
} = require("electron-devtools-installer");

let mainWindow;

let menuTemplate = [
  {
    label: "Tools",
    submenu: [
      {
        label: "Screenshot",
        accelerator: "Shift+CmdorCtrl+S",
        role: "screenshooter",
        click: () => {
          // Need to configure where to save screenshot
          mainWindow.capturePage(image => {
            fs.writeFile("test.png", image.toPNG(), err => {
              if (err) throw err;
              console.log("Screenshot saved!");
              shell.openExternal("test.png");
            });
          });
        }
      }
    ]
  }
];

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1240, height: 720 });

  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "/../build/index.html"),
      protocol: "file:",
      slashes: true
    });
  mainWindow.loadURL(startUrl);

  const menu = Menu.buildFromTemplate(menuTemplate);
  mainWindow.setMenu(menu);

  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}

installExtension(REACT_DEVELOPER_TOOLS)
  .then(name => console.log(`Added Extension:  ${name}`))
  .catch(err => console.log("An error occurred: ", err));

installExtension(REDUX_DEVTOOLS)
  .then(name => console.log(`Added Extension:  ${name}`))
  .catch(err => console.log("An error occurred: ", err));

app.on("ready", createWindow);

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  if (mainWindow === null) {
    createWindow();
  }
});

// Rest of Process stuff here
