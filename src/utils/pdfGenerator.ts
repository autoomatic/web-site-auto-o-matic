
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generatePDF = async (element: HTMLElement, filename: string = 'document.pdf') => {
  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 0;

    // Se a imagem for muito alta, dividir em páginas
    const pageHeight = pdfHeight;
    const totalPages = Math.ceil((imgHeight * ratio) / pageHeight);

    for (let i = 0; i < totalPages; i++) {
      if (i > 0) pdf.addPage();
      
      const sourceY = (pageHeight * i) / ratio;
      const sourceHeight = Math.min(imgHeight - sourceY, pageHeight / ratio);
      
      // Fixed the addImage call with correct parameters
      pdf.addImage(
        imgData,
        'PNG',
        imgX,
        imgY,
        imgWidth * ratio,
        sourceHeight * ratio
      );
    }

    pdf.save(filename);
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    alert('Erro ao gerar PDF. Tente novamente.');
  }
};
