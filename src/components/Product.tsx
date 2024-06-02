"use client"
import Image, {StaticImageData} from "next/image";
import Box from '@mui/material/Box';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { jsPDF } from "jspdf";
import { useState } from 'react';
import SlButton from '@shoelace-style/shoelace/dist/react/button';

interface ProductType {
  manufacture: string;
  Poster: StaticImageData | string;
  Title: string;
  brand: string;
  Description: string;
  Price: string;
}

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>({
    manufacture: "",
    Poster: "",
    Title: "",
    brand: "",
    Description: "",
    Price: "",
  });

  const handleOpen = () => {
    setSelectedProduct({
      brand: product.brand,
      Title: product.Title,
      Description: product.Description,
      Price: product.Price,
      Poster: product.Poster,
      manufacture: product.manufacture,
    });
    setOpen(true);
  };

  const handleCopy = () => {
    const textToCopy = `
      Brand: ${selectedProduct.brand}
      Title: ${selectedProduct.Title}
      Description: ${selectedProduct.Description}
      Price: ₹${selectedProduct.Price}
    `;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setSnackbarOpen(true);
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  };

  const handlePrint = () => {
    const doc = new jsPDF();
    
    // Adding watermark
    doc.setFontSize(20);
    doc.setTextColor(150, 150, 150);

    // Adding header
    doc.setFontSize(30);
    doc.setTextColor(0, 0, 0);
    doc.text("HiTech", 20, 20);

    // Adding bullet points
    doc.setFontSize(16);
    doc.text(`• Brand: ${selectedProduct.brand}`, 20, 40);
    doc.text(`  `, 20, 50);
    doc.text(`• Title: ${selectedProduct.Title}`, 20, 60);
    doc.text(`  `, 20, 70);
    doc.text(`• Description: ${selectedProduct.Description}`, 20, 80);
    doc.text(`  `, 20, 90);
    doc.text(`• Price: INR ${selectedProduct.Price}`, 20, 100);
    doc.text(`  `, 20, 110);

    // Adding footer
    doc.setFontSize(14);
    doc.text("Contact for better details:", 20, 120);
    doc.text("Contact No.: +91-1234567890", 20, 140);

    doc.save(`${selectedProduct.brand}_${selectedProduct.Title}.pdf`);
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy', action: handleCopy },
    { icon: <PrintIcon />, name: 'Print', action: handlePrint },
    { icon: <ShareIcon />, name: 'Share' },
  ];

  return (
    <>
      <Drawer
        anchor="right"
        color="neutral"
        size="md"
        variant="soft"
        open={open}
        onClose={() => setOpen(false)}
      >
        <p className="text-3xl text-center">{selectedProduct.brand}</p>
        <p className="text-3xl text-center">{selectedProduct.Title}</p>
        <br />
        <br />
        <p className="text-xl flex-auto px-4 md:px-2 lg:px-3">{selectedProduct.Description}</p>
        <br />
        <br />
        <p className="text-xl flex-auto px-4 md:px-2 lg:px-3">Price: ₹{selectedProduct.Price}</p>
        <br />
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={action.action}
              />
            ))}
          </SpeedDial>
        </Box>
        <ModalClose />
      </Drawer>

      <div className="product">
        <div>
          <p>Manufacture: {product.manufacture}</p>
        </div>

        <div>
          <Image
            src={product.Poster !== "N/A" ? product.Poster : "https://via.placeholder.com/400"}
            alt={product.Title}
            width={400}
            height={400}
          />
        </div>

        <div>
          <span>{product.brand}</span>
          <h3>{product.Title}</h3>
          <div className="fixed top-4 left-40">
            <SlButton onClick={handleOpen}>More Details</SlButton>
          </div>
        </div>
      </div>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" variant="filled" sx={{ width: '100%' }}>
          Product details copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Product;
