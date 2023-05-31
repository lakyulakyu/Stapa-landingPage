import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const PrintButton = () => {
  const handlePrint = async () => {
    const pdf = new jsPDF();
    const element = document.getElementById("print-content");

    // Konversi elemen HTML menjadi gambar menggunakan html2canvas
    const canvas = await html2canvas(element);
    
    // Ambil URL data gambar PNG dari elemen canvas
    const imgData = canvas.toDataURL("image/png");
    
    // Tambahkan gambar ke dokumen PDF
    pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
    
    // Simpan dokumen PDF
    pdf.save("cetak_pdf.png");
  };

  return (
    <div id="print-content">
      <button onClick={handlePrint}>Cetak PNG</button>
    </div>
  );
};

export default PrintButton;
