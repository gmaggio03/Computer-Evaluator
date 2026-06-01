
function renderLayout({ title, desktops, laptops, user, active = '', message = ''}){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title} Athena</title>
        <link rel="stylesheet" href="public/css/style.css" />
    </head>
    <body>
        <div class ="grid-container">
        <div class="header">
        <div class=:menu>
          <ul>
            <li>Dashboard</li>
            <li>Computers</li>
            <li>Add Desktop</li>
            <li>Add Laptop</li>
            <li>Settings</li>
          </ul>
        </div>

        <div class="content">
            <h1>Athena</h1>
            <p>Welcome to Athena, the ultimate computer evaluation platform. 
            Whether you're a tech enthusiast, a gamer, or a professional in need of reliable hardware, Athena has got you covered.
            This app allows you to evaluate and compare desktops and laptops based on their specifications and performance.
            </p>
        </div>

        <div class="info">
            <h2>Info</h2>
            <p>Here you can find information about the app, how to use it, and any updates or news related to computer hardware.</p>
        </div>

        <div class="footer">
            <p>&copy; 2024 Athena. All rights reserved.</p>
        </div>
    </div>
    </body>
    </html>`;


}