@echo off

echo checking node modules
if exist node_modules (
  code .
  ) else (
  echo installing node modules
  npm i
  code .
)
