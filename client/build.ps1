Set-Location client
npm run build

Set-Location ..
# Remove the original dist folder under ./server
Remove-Item -Recurse -Force server/dist
# Copy the dist folder from ./client to ./server
Copy-Item -Recurse -Force client/dist server/dist
