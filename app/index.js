import bar from './bar';
import {projectName, projectId } from './module1.js';

// execute imported function
bar();

// print vars from module1.js:
console.log(`Project Name: ${projectName}, Project ID: ${projectId}`);