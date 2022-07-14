@ECHO OFF 
:: This batch file details Generates build, dist, and SamvaadPro setup file.
@REM TITLE Samvaad Pro Setup file
@REM ECHO Please wait... Generating files...
@REM :: Section 1: Samvaad Pro Build folder generate
@REM ECHO ==========================
@REM ECHO Bild Folder
@REM ECHO ============================
@REM npm run build

:: Section 2: Samvaad Pro dist folder generate
ECHO ==========================
ECHO DIST Folder and SETUP Folder
ECHO ============================
electron-packager . SamvaadPro --platform win32 --arch x64 --out dist && node build_installer.js
ECHO Samvaad Pro Setup file generated successfully....
PAUSE