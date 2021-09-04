/* eslint-disable @typescript-eslint/no-var-requires */

const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

const createWindow = () => {
	mainWindow = new BrowserWindow({ width: 1400, height: 740 });

	const startUrl = process.env.ELECTRON_START_URL || new URL(`file://${path.join(__dirname, "../build/index.html")}`);
	mainWindow.loadURL(startUrl);

	mainWindow.on("closed", () => {
		mainWindow = null;
	});
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if ("darwin" !== process.platform) {
		app.quit();
	}
});

app.on("activate", () => {
	if (null === mainWindow) {
		createWindow();
	}
});
