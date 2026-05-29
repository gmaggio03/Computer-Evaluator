
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
        <header class="header">
            `

}