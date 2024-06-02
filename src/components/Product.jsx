"use client"
import Image from "next/image";
import Box from '@mui/material/Box';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { useState } from 'react';
import SlButton from '@shoelace-style/shoelace/dist/react/button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const Product = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    brand: "",
    Title: "",
    description: "",
    price: "",
  });

  const handleOpen = () => {
    setSelectedProduct({
      brand: product.brand,
      Title: product.Title,
      description: product.Description,
      price: product.Price,
    });
    setOpen(true);
  };

  
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleCopy = () => {
    const textToCopy = `
      Brand: ${selectedProduct.brand}
      Title: ${selectedProduct.Title}
      Description: ${selectedProduct.description}
      Price: ₹${selectedProduct.price}
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
    doc.setFontSize(50);
    doc.setTextColor(0, 0, 0);
    doc.text("Hi-Tech", 20, 20);

    // Adding bullet points
    doc.setFontSize(16);
    doc.text(`• Brand: ${selectedProduct.brand}`, 20, 40);
    doc.text(`  `, 20, 50);
    doc.text(`• Title: ${selectedProduct.Title}`, 20, 60);

    doc.text(`• Price: INR ${selectedProduct.price}`, 20, 70);

    // Adding footer
    doc.setFontSize(14);
    doc.text("Contact for better details:", 20, 90);
    doc.text("Contact No.: +91-1234567890", 20, 100);

    // Splitting description into paragraphs
    doc.text(`• Description: `, 20, 120);
    const descriptionLines = doc.splitTextToSize(selectedProduct.description, 180);
    doc.text(descriptionLines, 20, 130);

    doc.save(`${selectedProduct.brand}_${selectedProduct.Title}.pdf`);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleLocationOpen = () => {
    const address = encodeURIComponent("Shop No: 3, 1-766, near Bharat petrol, Tirmala Arcade, Nimboliadda, Kachiguda, Hyderabad, Telangana 500027");
    // const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
    const googleMapsUrl = `https://maps.app.goo.gl/AaKHxodpF8mxhXKNA`;
    // window.open(googleMapsUrl, "_blank");
    window.open(googleMapsUrl);
  };

  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy', action: handleCopy },
    { icon: <PrintIcon />, name: 'Print', action: handlePrint },
    { icon: <CallIcon />, name: 'Call Now', action: handleDialogOpen },
    { icon: <LocationOnIcon />, name: 'Visit Hi-Tech', action: handleLocationOpen },
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
        <p className="text-xl flex-auto px-4 md:px-2 lg:px-3">{selectedProduct.description}</p>
        <br />
        <br />
        <p className="text-xl flex-auto px-4 md:px-2 lg:px-3">Price: ₹{selectedProduct.price}</p>
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

      <Dialog
        fullWidth
        maxWidth="sm"
        open={dialogOpen}
        onClose={handleDialogClose}
        PaperProps={{
          sx: {
            backgroundColor: 'white',
            color: 'black',
          },
        }}
      >
        <DialogTitle sx={{ backgroundColor: 'white', color: 'black' }}>Contact Now</DialogTitle>
        <DialogContent sx={{ backgroundColor: 'white', color: 'black' }}>
          <DialogContentText sx={{ color: 'black' }}>
            Contact us now for better deals!
          </DialogContentText>
          <DialogContentText sx={{ color: 'black' }}>
            Phone: +91-1234567890
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: 'white', color: 'black' }}>
          <Button onClick={handleDialogClose} sx={{ color: 'black' }}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Product;
