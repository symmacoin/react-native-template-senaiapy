#GIT ERROR HUSKY
nano .huskyrc

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo PATH=${PATH} > ~/.huskyrc

# npx create-senaiapy-app@latest senaia
# npx create-obytes-app@latest senaia

pnpm i
npx esbuild index.js  --bundle --outfile=build.cjs --format=cjs --platform=node
npx pkg build.cjs
./build-linux