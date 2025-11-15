# CinemaHD-Labs-Store-UI
XDA Labs Store interface

CinemaHD Labs Store Interface

This repository hosts a lightweight Django-based simulation of the CinemaHD Store — an experimental environment to prototype and visualize how the CinemaHD ecosystem might look in a production-ready UI.

The project emulates store listing behavior, content discovery, and download flow through hard-coded JSON data dumps — enabling quick iteration on front-end and layout designs before backend API integration.

## Getting started

### 🔧 Install dependencies
> pip install -r requirements.txt

### ▶️ Launch the development server
> ./manage.py runserver

## Loading Templates
- `http://localhost:8000/` to view and render index.html.
- `http://localhost:8000/TEMPLATE_NAME.html` to render any other template

## Templates and static
| Folder                     | Description                                   |
| -------------------------- | --------------------------------------------- |
| `store/templates/`         | HTML template files (CinemaHD Store UI pages) |
| `store/static/`            | CSS, JS, and static assets for the store UI   |
| `store/data/` *(optional)* | Mock JSON data for content listing simulation |

## Features

- Lightweight Django setup for front-end visualization
- Mock-up CinemaHD Store environment
- Fast UI iteration before connecting to production APIs
- Ready for integration with CinemaHD’s backend microservices (Flask/FastAPI or Node.js)

## Contributors
- Andrew Urquhart (@andrew-urquhart-ceo)