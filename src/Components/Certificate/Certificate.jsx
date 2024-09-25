import React, { useState } from 'react';
import './Certificate.css';

const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState({
    image: 'https://api.eximburg.in/public/certificate/file_481511006.jpg', 
    text: `Our company is certified with Good Manufacturing Practices (GMP), a critical benchmark in ensuring that our products are consistently produced and controlled according to quality standards.The GMP certification highlights our commitment to maintaining a clean, safe, and controlled production environment. It ensures that every step of our manufacturing process—from raw material selection to final product delivery—meets stringent quality and safety criteria.`
  });
  const certificates = [
    {
      image: 'https://api.eximburg.in/public/certificate/file_481511006.jpg',
      text: `Our company is certified with Good Manufacturing Practices (GMP), a critical benchmark in ensuring that our products are consistently produced and controlled according to quality standards.The GMP certification highlights our commitment to maintaining a clean, safe, and controlled production environment. It ensures that every step of our manufacturing process—from raw material selection to final product delivery—meets stringent quality and safety criteria.`
    },
    {
      image: 'https://api.eximburg.in/public/certificate/file_835986254.jpg',
      text: `Our company proudly holds ISO certification, a globally recognized standard that demonstrates our commitment to quality management and continuous improvement. The ISO certification ensures that our processes are efficient, reliable, and consistently meet customer expectations. It also signifies our adherence to internationally accepted practices, which enhance the quality, safety, and performance of our products.This certification is a testament to our dedication to operational excellence and our focus on delivering value to our customers. By implementing the rigorous standards set by ISO, we ensure that our products and services not only comply with regulatory requirements but also contribute to customer satisfaction and trust..`
    },
    {
      image: 'https://api.eximburg.in/public/certificate/file_1110087714.jpg',
      text: `Our company is proudly certified by the Food Safety and Standards Authority of India (FSSAI), which serves as a testament to our commitment to maintaining the highest standards of food safety and quality. The FSSAI license ensures that our products meet all regulatory requirements, safeguarding the health and well-being of our consumers. This certification reflects our dedication to upholding stringent food safety practices across all stages of production, from sourcing raw materials to final packaging.Holding an FSSAI license underscores our ongoing efforts to provide safe, high-quality food products that you can trust. It also reinforces our responsibility towards public health by adhering to the guidelines and regulations set forth by the FSSAI. Our certification not only assures compliance with national standards but also highlights our role in contributing to a healthier and safer food ecosystem..`
    }
  ];
  const handleLogoClick = (index) => {
    setSelectedCertificate(certificates[index]);
  };

  return (
    <div className="certificate-section">
      <h2 className="certificates-title">Certificates</h2>

      <div className="certificate-content">
        <div className="certificate-text">
          <h3>CERTIFICATION <br/>AND <br/>RECOGNITION</h3>
          <p>{selectedCertificate.text}</p>
        </div>
        <div className="certificate-image">
          <img src={selectedCertificate.image} alt="Certificate" />
        </div>
      </div>
      <div className="certificate-logos">
        {certificates.map((certificate, index) => (
          <img
            key={index}
            src={certificate.image}
            alt={`Certificate ${index + 1}`}
            onClick={() => handleLogoClick(index)}
            className="clickable-logo"
          />
        ))}
      </div>
    </div>
  );
};

export default Certificate;
