## News Collection Project with AI
This project is a tool for collecting news from different sources, with a focus on integration with the TecMundo news portal.

## Overview
The objective of this project is to provide a flexible and modular solution for collecting news from various sources, easily integrating new partners and maintaining code maintainability. It has been developed based on principles of dependency injection and code reuse.

## Configuration
Before running the project, it is necessary to set up the environment variables. Make a copy of the .env.example file and rename it to .env. Then, define the values of the variables according to your needs.

## Installation
To install the project dependencies, use the following command:

```bash
npm install
# ou
yarn
```

## Execution
After installing the dependencies and configuring the environment, you can run the project with the following command:

```bash
yarn agent
```

The project structure is organized as follows:

- `src/modules/`: Contains modules responsible for integrating with different news sources.
- `src/utils/`: Contains utilities and helper functions.
- `src/classes/`: Classes representing abstractions and implementing various responsibilities in the project.
- `src/types/`: Defines typings for objects used in the project.
- `output/`: Directory where the collection results are stored.

## Demo

![Demo](.doc/demo.gif)
