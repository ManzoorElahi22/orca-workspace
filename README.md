# ORCA Portfolio Page

A comprehensive portfolio page for the ORCA application, providing centralized access to application details, services, monitoring tools, and contact information.

## Features

The ORCA Portfolio Page includes the following sections:

- **Application Details** - Core information about the ORCA application including version, environment, and status
- **Services Details** - Complete list of UI services and backend services with their status
- **PIM Requests** - Privileged Identity Management access information and workflows
- **Remedy URL** - Links to Remedy portal for service requests, incident management, and change management
- **Pager Duty Details** - On-call service information, escalation policies, and alert channels
- **Contact Repo Details** - Repository information and team contact details
- **Dynatrace Dashboard Details** - Monitoring dashboard links, metrics, and alert configurations

## Getting Started

### Quick Start

Simply open `index.html` in your web browser:

```bash
# Open the portfolio page in your default browser
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

### Using a Local Server

For better performance and to avoid CORS issues, you can use a local web server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (requires http-server package)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Features

### Editable Fields

Most fields on the portfolio page are editable. Simply click on any highlighted value to edit it:

- Click on a value to edit it
- Changes are automatically saved to your browser's local storage
- Press `Esc` to cancel editing
- Press `Ctrl/Cmd + S` to manually save

### Keyboard Shortcuts

- `Ctrl/Cmd + S` - Save changes
- `Ctrl/Cmd + E` - Export data to JSON
- `Esc` - Cancel editing

### Data Persistence

The portfolio page uses browser local storage to save your edits:

- All changes are automatically saved after 1 second of inactivity
- Data persists between sessions
- Clear browser data to reset to defaults

### Responsive Design

The page is fully responsive and works on:

- Desktop computers
- Tablets
- Mobile devices
- Print (optimized print styles included)

## Customization

### Updating Information

To customize the default information:

1. Open `index.html` in a text editor
2. Find the section you want to modify
3. Update the values in the HTML
4. Save the file

### Styling

To customize the appearance:

1. Open `styles.css`
2. Modify colors, fonts, or layouts
3. The color scheme uses CSS variables for easy customization

### Adding New Sections

To add a new section:

1. Copy an existing `<section class="card">` block in `index.html`
2. Update the ID, title, and content
3. Add appropriate styling in `styles.css` if needed

## File Structure

```
orca-workspace/
├── index.html      # Main HTML file with all sections
├── styles.css      # Styling and responsive design
├── script.js       # Interactive features and data persistence
└── README.md       # This file
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript (ES6+)
- Local Storage API
- Intersection Observer API

## Security Notes

- All sensitive information (API keys, tokens) shown in the portfolio are placeholder values
- Update these with actual values only if this page is hosted in a secure, authenticated environment
- Consider using environment variables or secure vaults for production deployments

## Contributing

To contribute to this portfolio page:

1. Fork the repository
2. Make your changes
3. Test thoroughly across different browsers
4. Submit a pull request

## License

This project is part of the ORCA application suite.

## Support

For issues or questions:

- Repository: https://github.com/ManzoorElahi22/orca-workspace
- Team Email: orca-team@example.com
- Slack Channel: #orca-support

---

Last Updated: 2026-02-13