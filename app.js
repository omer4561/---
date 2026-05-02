// Secure website JavaScript

'use strict';

const GITHUB_REPO = 'https://github.com/omer4561/---';
const ZIP_DOWNLOAD = 'https://github.com/omer4561/---/releases/download/v1.0/youtube-summarizer-download.zip';

// DOM elements
const downloadBtn = document.getElementById('downloadBtn');
const downloadModal = document.getElementById('downloadModal');
const zipBtn = document.getElementById('zipBtn');
const githubBtn = document.getElementById('githubBtn');
const cancelBtn = document.getElementById('cancelBtn');

// Show modal
function showDownloadModal() {
  if (downloadModal) {
    downloadModal.classList.add('active');
  }
}

// Close modal
function closeModal() {
  if (downloadModal) {
    downloadModal.classList.remove('active');
  }
}

// Download ZIP
function downloadZip() {
  try {
    // Validate URL
    new URL(ZIP_DOWNLOAD);
    window.location.href = ZIP_DOWNLOAD;
    closeModal();
  } catch (error) {
    console.error('Invalid download URL');
  }
}

// Open GitHub
function downloadGithub() {
  try {
    // Validate URL
    new URL(GITHUB_REPO);
    window.open(GITHUB_REPO, '_blank', 'noopener,noreferrer');
    closeModal();
  } catch (error) {
    console.error('Invalid GitHub URL');
  }
}

// Event listeners
if (downloadBtn) {
  downloadBtn.addEventListener('click', showDownloadModal);
}

if (zipBtn) {
  zipBtn.addEventListener('click', downloadZip);
}

if (githubBtn) {
  githubBtn.addEventListener('click', downloadGithub);
}

if (cancelBtn) {
  cancelBtn.addEventListener('click', closeModal);
}

// Close modal on outside click
if (downloadModal) {
  downloadModal.addEventListener('click', function(e) {
    if (e.target === this) {
      closeModal();
    }
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');

    // Validate href
    if (href && href.startsWith('#') && href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

console.log('App initialized');
