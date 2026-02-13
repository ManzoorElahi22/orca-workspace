// ORCA Portfolio Page - Interactive Features

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('ORCA Portfolio Page Loaded');
    
    // Setup editable field features
    setupEditableFields();
    
    // Setup link handlers
    setupLinkHandlers();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Add animation on scroll
    setupScrollAnimations();
    
    // Setup local storage for persistence
    loadSavedData();
    
    // Auto-save changes
    setupAutoSave();
});

// Setup editable fields with visual feedback
function setupEditableFields() {
    const editableFields = document.querySelectorAll('.editable');
    
    editableFields.forEach(field => {
        // Add visual indicator on focus
        field.addEventListener('focus', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        // Save on blur
        field.addEventListener('blur', function() {
            saveToLocalStorage();
        });
        
        // Add keyboard shortcuts
        field.addEventListener('keydown', function(e) {
            // Save on Ctrl/Cmd + S
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                this.blur();
                showNotification('Changes saved!');
            }
            
            // Cancel on Escape
            if (e.key === 'Escape') {
                this.blur();
            }
        });
    });
}

// Setup link handlers
function setupLinkHandlers() {
    const links = document.querySelectorAll('.link:not(.editable)');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.textContent.trim();
            if (href && href.startsWith('http')) {
                window.open(href, '_blank');
            } else {
                e.preventDefault();
            }
        });
    });
}

// Setup smooth scrolling for navigation
function setupSmoothScrolling() {
    // Add navigation menu dynamically (optional)
    const sections = document.querySelectorAll('.card');
    
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });
}

// Setup scroll animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Save data to local storage
function saveToLocalStorage() {
    const data = {};
    
    document.querySelectorAll('.editable').forEach((field, index) => {
        data[`field_${index}`] = field.textContent.trim();
    });
    
    try {
        localStorage.setItem('orcaPortfolioData', JSON.stringify(data));
        console.log('Data saved to local storage');
    } catch (e) {
        console.error('Failed to save to local storage:', e);
    }
}

// Load data from local storage
function loadSavedData() {
    try {
        const savedData = localStorage.getItem('orcaPortfolioData');
        if (savedData) {
            const data = JSON.parse(savedData);
            const editableFields = document.querySelectorAll('.editable');
            
            editableFields.forEach((field, index) => {
                if (data[`field_${index}`]) {
                    field.textContent = data[`field_${index}`];
                }
            });
            
            console.log('Loaded saved data from local storage');
        }
    } catch (e) {
        console.error('Failed to load from local storage:', e);
    }
}

// Setup auto-save
function setupAutoSave() {
    let saveTimer;
    
    document.querySelectorAll('.editable').forEach(field => {
        field.addEventListener('input', function() {
            clearTimeout(saveTimer);
            saveTimer = setTimeout(() => {
                saveToLocalStorage();
            }, 1000); // Auto-save after 1 second of inactivity
        });
    });
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #667eea;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Export data function
function exportData() {
    const data = {
        applicationDetails: {},
        services: { ui: [], backend: [] },
        pimRequests: {},
        remedyUrl: {},
        pagerDuty: {},
        contactRepo: {},
        dynatrace: {}
    };
    
    // Collect all data
    document.querySelectorAll('.info-row').forEach(row => {
        const label = row.querySelector('.label')?.textContent.replace(':', '').trim();
        const value = row.querySelector('.value')?.textContent.trim();
        if (label && value) {
            data.general = data.general || {};
            data.general[label] = value;
        }
    });
    
    // Create JSON file
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'orca-portfolio-data.json';
    a.click();
    
    URL.revokeObjectURL(url);
    showNotification('Data exported successfully!');
}

// Add keyboard shortcut for export (Ctrl/Cmd + E)
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        exportData();
    }
});

// Console info
console.log('%c ORCA Portfolio Page ', 'background: #667eea; color: white; font-size: 16px; padding: 5px 10px; border-radius: 3px;');
console.log('Keyboard shortcuts:');
console.log('- Ctrl/Cmd + S: Save changes');
console.log('- Ctrl/Cmd + E: Export data');
console.log('- Escape: Cancel editing');
