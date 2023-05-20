# Setup for typescript
1. Install Globally in Vscode or terminal with this command ```sudo npm i -g typescript```
2. Then check the version of the typescript you install: ```tsc -v``
3. Create a file name it ```index.ts``` for typescript
4. Then you can run that file with the command ```tsc index``` and it will run the compiler
5. Also you can run it with ```tsc --watch index``` it compiles and watches the file contiously
6. Build the config file, ```tsc --init```
7. Inside the config file tsconfig.json u can change the target to es5 to es6 or any of the suggestions it shows
8. Run ```tsc``` it compiles the config file up to date


# Folder/File Structure
- dist (Folder), in tsconfig.json uncomment ```outDir: "./"``` add in ```"outDir: "./dist"```
    - index.html
    - index.js
- src (folder), in tsconfig.json uncomment ```rootDir: "./"``` add in ```rootDir: "./src"```
    - index.ts
- tsconfig.json
