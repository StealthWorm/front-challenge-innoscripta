# Frontend Challenge Project Innoscripta

## Table of Contents

- [Frontend Challenge Project Innoscripta](#frontend-challenge-project-innoscripta)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
  - [Running the Project](#running-the-project)
  - [Building the Docker Image](#building-the-docker-image)
  - [Running the Docker Container](#running-the-docker-container)
  - [Main Functionalities](#main-functionalities)
  - [Improvements](#improvements)
  - [Final Considerations](#final-considerations)

## Project Overview

The challenge is to create the user interface for a
news aggregator website that pulls articles from various sources and displays them in a clean,
easy-to-read format.
Requirements:

1. Article search and filtering: Users should be able to search for articles by keyword and
   filter the results by date, category, and source.
2. Personalized news feed: Users should be able to customize their news feed by
   selecting their preferred sources, categories, and authors.
3. Mobile-responsive design: The website should be optimized for viewing on mobile
   devices

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (version 10 or higher) or yarn
- Docker (optional, if you want to run the project in a container)

## Running the Project

To start the development server, run:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The project will be available at `http://localhost:3000`.

## Building the Docker Image

If you'd like to run the project in a Docker container, you can build the Docker image with the following command:

```bash
docker build -t <docker-image> .
```

Alternatively, you can pull the image directly from the Docker Hub

```bash
docker pull thierry20xx/innoscripta-front-image:1.0.0

```

## Running the Docker Container

After building the image, run the Docker container:

```bash
docker run -p 3000:3000 -d --name <docker-container> <docker-image>

```

The project will be available at `http://localhost:3000`.

## Main Functionalities

This project aims to reproduce a news search page, reflecting searches on 3 different endpoints. Functionalities include

- **Search by keywords**
- **Filter by period**
- **Filter by news source**
- **Filter by topic / category**
- **Pagination**
- **Responsive Design**

The project was developed in a mobile-friendly way and has a responsive and intuitive architecture. The interface is also clean, concise and follows well-defined design standards such as uniform color arrangements, the color theory, breathing spaces and a smooth, memorable design.

## Improvements

Suggestions for potential improvements or additional features:

- **Improvement 1:** Develop e2e unit tests.
- **Improvement 2:** Destruct the component into functional reusable ones.
- **Improvement 3:** Figure out how to improve the Redux Store management system.
- **Improvement 4:** Improve the reliability in the API Promises
- **Improvement 5:** Create a better architecture for the service handler that deals with all the promises

## Final Considerations

It was a much bigger challenge than I expected, not only because some of the suggested APIs provided were not working or were continually down, but also because the overall process of architecting, filtering, composing and displaying data from different third-party addresses became complex as I had to define interfaces and handlers that worked for each endpoint.

Alongside this, I needed to establish error handling, map resources and target the filters for each API in a unique way.

Even so, it was an interesting challenge, mainly because I was willing to use Redux and other frontend architecture principles, even though they weren't required.

I'm grateful for the opportunity to work on it, and I hope you like the end result.

---
