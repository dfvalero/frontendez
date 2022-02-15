# TypeScript Monorepo 🐒

## Overview

This directory contains multiple application components organized as packages in
a monorepo.

It contains the following packages:

Package                     | Description  |
--------------------------- | ------------------------------------------------- |
@frontendez/client          | Contains the client web app                       |
@frontendez/theme           | Theme SCSS files                                  |
@frontendez/ui              | UI Component Library                              |
@frontendez/utils           | Typescript Utils                                  |

## Getting Started

To get started, just run `lerna boostrap` from the project root.

## Workspace Scripts

The project root's `package.json` contains the scripts needed to perform common
application actions.

| Script               | Description                                      |
| -------------------- | ------------------------------------------------ |
| `yarn run start`     | Runs the packages in a dev mode                  |
| `yarn run build`     | Builds all packages                              |
