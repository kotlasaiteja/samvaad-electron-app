// ./build_installer.js

// 1. Import Modules
const { MSICreator } = require("electron-wix-msi");
const path = require("path");

// 2. Define input and output directory.
// Important: the directories must be absolute, not relative e.g
const APP_DIR = path.resolve(__dirname, "./dist/SamvaadPro-win32-x64");
const OUT_DIR = path.resolve(__dirname, "./SamvaadPro-Setup");
//const icon = path.resolve("./resource/icon_setup.svg");

// 3. Instantiate the MSICreator
const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,

    // Configure metadata
    description: "This is samvaadPro application",
    exe: "SamvaadPro",
    name: "Samvaad Pro",
    manufacturer: "Samvaad Infotech Pvt Ltd",
    // version: config.appVersion,
    version: "3.1.9",
    appIconPath: './resources/setup_icon.ico',
    // Configure installer User Interface
    ui: { chooseDirectory: true },
    // ui: { chooseDirectory: true, images: { infoIcon: '../resources/setup_icon.ico', newIcon: '../resources/setup_icon.ico', upIcon: '../resources/setup_icon.ico' } },

    // features: { autoUpdate: true, autoLaunch: true }
});
// msiCreator.iconPath = './resources/setup_icon.ico';
msiCreator.autoLaunch = true;
msiCreator.autoUpdate = true;
// msiCreator.wixTemplate = msiCreator.wixTemplate.replace('Name = "{{ApplicationName}} (Machine - MSI)"','Name = "{{ApplicationName}}"');
// msiCreator.wixTemplate = msiCreator.wixTemplate.replace('VisibleProductName = "{{ApplicationName}} (Machine)"','VisibleProductName = "{{ApplicationName}}"');
// 4. Create a .wxs template file
msiCreator.create().then(function () {
    // Step 5: Compile the template to a .msi file
    msiCreator.compile();
});