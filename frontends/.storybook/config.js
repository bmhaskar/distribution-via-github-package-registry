import { configure } from "@storybook/react";

function loadStories() {
  const allExports = [];
  const req = require.context("../packages", true, /.story.js$/);
  req.keys().forEach(filename => allExports.push(req(filename)));
  return allExports;
}

configure(loadStories, module);
