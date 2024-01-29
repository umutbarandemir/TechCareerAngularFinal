function viewPdf() {
    // Replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
    const pdfUrl = 'tubitak.pdf';
  
    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');
  }
  
  // Attach the function to the button click event
  document.getElementById('viewPdfButton').addEventListener('click', viewPdf);
  