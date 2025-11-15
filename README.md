# Digital Restaurant Menu

A fully responsive and mobile-friendly digital menu for restaurants that loads live data from Google Sheets. Designed for easy QR code access, real-time price updates, and effortless content management without touching code.

## Features

- Live product & price updates via Google Sheets  
- Perfect for QR-code-based menus  
- Mobile-first, responsive design  
- No backend or database setup needed  
- Lightweight: HTML, CSS & Vanilla JavaScript only  
- Deployable to GitHub Pages, Vercel, Netlify, etc.

## Demo

Live Preview: https://your-username.github.io/digital-restaurant-menu  
*(replace with your real GitHub Pages URL)*

## Use Case

Ideal for:

- Restaurants, bars, cafés  
- Food trucks  
- Pop-up events or seasonal menus  
- Hotels and hospitality services  

Scan a QR code, open the digital menu, and view real-time prices directly from a shared Google Sheet.

## Setup Instructions

1. Create a Google Sheet with 3 columns:  
   `Category`, `Product`, `Price`

2. Publish the sheet  
   Go to File → Share → "Publish to the Web"  
   Set access to “Anyone with the link”

3. Copy the spreadsheet ID from the URL and paste it into `script.js`:

   ```javascript
   const sheetId = "YOUR_SHEET_ID";
   const sheetName = "Hoja1"; // Change if needed
   const url = `https://opensheet.elk.sh/${sheetId}/${sheetName}`;
