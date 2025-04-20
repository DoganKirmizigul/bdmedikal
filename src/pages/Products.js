import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import perdenserImage from "../assets/images/perdenser.jpg";
import perdenser1 from "../assets/images/perdenser/perdenser1.jpg";
import perdenser2 from "../assets/images/perdenser/perdenser2.jpg";
import perdenser3 from "../assets/images/perdenser/perdenser3.jpg";
import perdenser4 from "../assets/images/perdenser/perdenser4.jpg";
import perdenser5 from "../assets/images/perdenser/perdenser5.jpg";
import perdenser6 from "../assets/images/perdenser/perdenser6.jpg";
import perdenser7 from "../assets/images/perdenser/perdenser7.jpg";
import proender5 from "../assets/images/proender/proender5.jpg";
import proender1 from "../assets/images/proender/proender1.jpg";
import proender2 from "../assets/images/proender/proender2.jpg";
import proender3 from "../assets/images/proender/proender3.jpg";
import freepass4 from "../assets/images/freepass/freepass4.jpg";
import freepass1 from "../assets/images/freepass/freepass1.jpg";
import freepass2 from "../assets/images/freepass/freepass2.jpg";
import freepass3 from "../assets/images/freepass/freepass3.jpg";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import proenderPDF from "../assets/pdfs/proender.pdf";
import perdenserPDF from "../assets/pdfs/perdenser.pdf";
import freepassPDF from "../assets/pdfs/freepass.pdf";
import proenderIFUPDF from "../assets/pdfs/proender_ifu.pdf";
import perdenserIFUPDF from "../assets/pdfs/perdenser_ifu.pdf";
import freepassIFUPDF from "../assets/pdfs/freepass_ifu.pdf";
import { Link, useLocation } from "react-router-dom";

function Products() {
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState("proender");
  const [activeTab, setActiveTab] = useState("specifications");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productParam = params.get("product");
    if (productParam && products[productParam]) {
      setSelectedProduct(productParam);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  // Helper functions for pagination
  const getCurrentItems = (items) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return items.slice(indexOfFirstItem, indexOfLastItem);
  };

  const totalPages = (items) => Math.ceil(items.length / itemsPerPage);

  const products = {
    proender: {
      title: "Proender®",
      subtitle: "Disposable Embolic Protection Device",
      description: "Embolic Protection Device",
      specs: [
        {
          catalogNo: "TJEP03-190",
          diameter: "3",
          length: "190",
          compatibility: '0.014"',
          sheath: "3.2F",
          retrievalSheath: "4.2F",
          guidingCatheter: '0.066"',
        },
        {
          catalogNo: "TJEP04-190",
          diameter: "4",
          length: "190",
          compatibility: '0.014"',
          sheath: "3.2F",
          retrievalSheath: "4.2F",
          guidingCatheter: '0.066"',
        },
        {
          catalogNo: "TJEP05-190",
          diameter: "5",
          length: "190",
          compatibility: '0.014"',
          sheath: "3.2F",
          retrievalSheath: "4.2F",
          guidingCatheter: '0.066"',
        },
        {
          catalogNo: "TJEP06-190",
          diameter: "6",
          length: "190",
          compatibility: '0.014"',
          sheath: "3.2F",
          retrievalSheath: "4.2F",
          guidingCatheter: '0.066"',
        },
        {
          catalogNo: "TJEP07-190",
          diameter: "7",
          length: "190",
          compatibility: '0.014"',
          sheath: "3.2F",
          retrievalSheath: "4.2F",
          guidingCatheter: '0.066"',
        },
        {
          catalogNo: "TJEP08-190",
          diameter: "8",
          length: "190",
          compatibility: '0.014"',
          sheath: "3.2F",
          retrievalSheath: "4.2F",
          guidingCatheter: '0.066"',
        },
        {
          catalogNo: "TJEP03-320",
          diameter: "3",
          length: "320",
          compatibility: '0.014"',
          sheath: "3.2F",
          retrievalSheath: "4.2F",
          guidingCatheter: '0.066"',
        },
        {
          catalogNo: "TJEP04-320",
          diameter: "4",
          length: "320",
          compatibility: '0.014"',
          sheath: "3.2F",
          retrievalSheath: "4.2F",
          guidingCatheter: '0.066"',
        },
        {
          catalogNo: "TJEP05-320",
          diameter: "5",
          length: "320",
          compatibility: '0.014"',
          sheath: "3.2F",
          retrievalSheath: "4.2F",
          guidingCatheter: '0.066"',
        },
        {
          catalogNo: "TJEP06-320",
          diameter: "6",
          length: "320",
          compatibility: '0.014"',
          sheath: "3.2F",
          retrievalSheath: "4.2F",
          guidingCatheter: '0.066"',
        },
        {
          catalogNo: "TJEP07-320",
          diameter: "7",
          length: "320",
          compatibility: '0.014"',
          sheath: "3.2F",
          retrievalSheath: "4.2F",
          guidingCatheter: '0.066"',
        },
        {
          catalogNo: "TJEP08-320",
          diameter: "8",
          length: "320",
          compatibility: '0.014"',
          sheath: "3.2F",
          retrievalSheath: "4.2F",
          guidingCatheter: '0.066"',
        },
      ],
      features: [
        {
          title: "Effective Mesh Design",
          description:
            "The gradual filter mesh hole (effectively catching thrombus 80-240um) ensures the good debris capturing performance as well as continuous blood flow. While effectively capturing the emboli, it reduces the barrier to the blood flow, so that the blood flow can be continuously perfused.",
          image: proender1,
        },
        {
          title: "Soft and safe structure",
          description:
            "The unique seam-locking structure makes the opening shape full and can naturally fit with the blood vessel wall. The soft guide wire tip and round ball cap protect the distal blood vessels from damage to the utmost extent.",
          image: proender2,
        },
        {
          title: "Independently Moving Guide Wire Structure",
          description:
            "The unique fixed sleeve design allows the guide wire to perform 360-degree rotation and a certain range of axial movement; at the same time, it prevents the position of the released filter from changing, avoiding damage to the inner wall of the blood vessel or inducing vasospasm.",
          image: proender3,
        },
      ],
    },
    perrdenser: {
      title: "Perdenser™",
      subtitle: "Peripheral Drug-Eluting Balloon",
      description: "3D Perdenser Detachable Coil",
      image: perdenserImage,
      specs: [
        // Group 1: 1.5mm - 3mm Loop Dia.
        {
          catalogNo: "TJCST1.502-2D",
          catalogNo3D: "TJCST1.502-3D",
          loopDia: "1.5",
          length: "2",
        },
        {
          catalogNo: "TJCST1.503-2D",
          catalogNo3D: "TJCST1.503-3D",
          loopDia: "1.5",
          length: "3",
        },
        {
          catalogNo: "TJCST1.504-2D",
          catalogNo3D: "TJCST1.504-3D",
          loopDia: "1.5",
          length: "4",
        },
        {
          catalogNo: "TJCST0201-2D",
          catalogNo3D: "TJCST0201-3D",
          loopDia: "2",
          length: "1",
        },
        {
          catalogNo: "TJCST0202-2D",
          catalogNo3D: "TJCST0202-3D",
          loopDia: "2",
          length: "2",
        },
        {
          catalogNo: "TJCST0203-2D",
          catalogNo3D: "TJCST0203-3D",
          loopDia: "2",
          length: "3",
        },
        {
          catalogNo: "TJCST0204-2D",
          catalogNo3D: "TJCST0204-3D",
          loopDia: "2",
          length: "4",
        },
        {
          catalogNo: "TJCST0206-2D",
          catalogNo3D: "TJCST0206-3D",
          loopDia: "2",
          length: "6",
        },
        {
          catalogNo: "TJCST0208-2D",
          catalogNo3D: "TJCST0208-3D",
          loopDia: "2",
          length: "8",
        },
        {
          catalogNo: "TJCST2.502-2D",
          catalogNo3D: "TJCST2.502-3D",
          loopDia: "2.5",
          length: "2",
        },
        {
          catalogNo: "TJCST2.504-2D",
          catalogNo3D: "TJCST2.504-3D",
          loopDia: "2.5",
          length: "4",
        },
        {
          catalogNo: "TJCST2.506-2D",
          catalogNo3D: "TJCST2.506-3D",
          loopDia: "2.5",
          length: "6",
        },
        {
          catalogNo: "TJCST2.508-2D",
          catalogNo3D: "TJCST2.508-3D",
          loopDia: "2.5",
          length: "8",
        },
        {
          catalogNo: "TJCST0304-2D",
          catalogNo3D: "TJCST0304-3D",
          loopDia: "3",
          length: "4",
        },
        {
          catalogNo: "TJCST0306-2D",
          catalogNo3D: "TJCST0306-3D",
          loopDia: "3",
          length: "6",
        },
        {
          catalogNo: "TJCST0308-2D",
          catalogNo3D: "TJCST0308-3D",
          loopDia: "3",
          length: "8",
        },
        {
          catalogNo: "TJCST0310-2D",
          catalogNo3D: "TJCST0310-3D",
          loopDia: "3",
          length: "10",
        },
        {
          catalogNo: "TJCST0312-2D",
          catalogNo3D: "TJCST0312-3D",
          loopDia: "3",
          length: "12",
        },
        {
          catalogNo: "TJCST3.506-2D",
          catalogNo3D: "TJCST3.506-3D",
          loopDia: "3.5",
          length: "6",
        },
        {
          catalogNo: "TJCST3.508-2D",
          catalogNo3D: "TJCST3.508-3D",
          loopDia: "3.5",
          length: "8",
        },
        {
          catalogNo: "TJCST3.510-2D",
          catalogNo3D: "TJCST3.510-3D",
          loopDia: "3.5",
          length: "10",
        },
        {
          catalogNo: "TJCST3.512-2D",
          catalogNo3D: "TJCST3.512-3D",
          loopDia: "3.5",
          length: "12",
        },
        {
          catalogNo: "TJCST0404-2D",
          catalogNo3D: "TJCST0404-3D",
          loopDia: "4",
          length: "4",
        },
        {
          catalogNo: "TJCST0406-2D",
          catalogNo3D: "TJCST0406-3D",
          loopDia: "4",
          length: "6",
        },
        {
          catalogNo: "TJCST0408-2D",
          catalogNo3D: "TJCST0408-3D",
          loopDia: "4",
          length: "8",
        },
        {
          catalogNo: "TJCST0410-2D",
          catalogNo3D: "TJCST0410-3D",
          loopDia: "4",
          length: "10",
        },
      ],
      specs2: [
        // Group 2: 4.5mm - 20mm Loop Dia.
        {
          catalogNo: "TJCST4.506-2D",
          catalogNo3D: "TJCST4.506-3D",
          loopDia: "4.5",
          length: "6",
        },
        {
          catalogNo: "TJCST4.508-2D",
          catalogNo3D: "TJCST4.508-3D",
          loopDia: "4.5",
          length: "8",
        },
        {
          catalogNo: "TJCST4.510-2D",
          catalogNo3D: "TJCST4.510-3D",
          loopDia: "4.5",
          length: "10",
        },
        {
          catalogNo: "TJCST4.512-2D",
          catalogNo3D: "TJCST4.512-3D",
          loopDia: "4.5",
          length: "12",
        },
        {
          catalogNo: "TJCST4.515-2D",
          catalogNo3D: "TJCST4.515-3D",
          loopDia: "4.5",
          length: "15",
        },
        {
          catalogNo: "TJCST0509-2D",
          catalogNo3D: "TJCST0509-3D",
          loopDia: "5",
          length: "9",
        },
        {
          catalogNo: "TJCST0510-2D",
          catalogNo3D: "TJCST0510-3D",
          loopDia: "5",
          length: "10",
        },
        {
          catalogNo: "TJCST0515-2D",
          catalogNo3D: "TJCST0515-3D",
          loopDia: "5",
          length: "15",
        },
        {
          catalogNo: "TJCST0520-2D",
          catalogNo3D: "TJCST0520-3D",
          loopDia: "5",
          length: "20",
        },
        {
          catalogNo: "TJCST0610-2D",
          catalogNo3D: "TJCST0610-3D",
          loopDia: "6",
          length: "10",
        },
        {
          catalogNo: "TJCST0611-2D",
          catalogNo3D: "TJCST0611-3D",
          loopDia: "6",
          length: "11",
        },
        {
          catalogNo: "TJCST0615-2D",
          catalogNo3D: "TJCST0615-3D",
          loopDia: "6",
          length: "15",
        },
        {
          catalogNo: "TJCST0620-2D",
          catalogNo3D: "TJCST0620-3D",
          loopDia: "6",
          length: "20",
        },
        {
          catalogNo: "TJCST0715-2D",
          catalogNo3D: "TJCST0715-3D",
          loopDia: "7",
          length: "15",
        },
        {
          catalogNo: "TJCST0720-2D",
          catalogNo3D: "TJCST0720-3D",
          loopDia: "7",
          length: "20",
        },
        {
          catalogNo: "TJCST0730-2D",
          catalogNo3D: "TJCST0730-3D",
          loopDia: "7",
          length: "30",
        },
        {
          catalogNo: "TJCST0815-2D",
          catalogNo3D: "TJCST0815-3D",
          loopDia: "8",
          length: "15",
        },
        {
          catalogNo: "TJCST0820-2D",
          catalogNo3D: "TJCST0820-3D",
          loopDia: "8",
          length: "20",
        },
        {
          catalogNo: "TJCST0830-2D",
          catalogNo3D: "TJCST0830-3D",
          loopDia: "8",
          length: "30",
        },
        {
          catalogNo: "TJCST0920-2D",
          catalogNo3D: "TJCST0920-3D",
          loopDia: "9",
          length: "20",
        },
        {
          catalogNo: "TJCST0930-2D",
          catalogNo3D: "TJCST0930-3D",
          loopDia: "9",
          length: "30",
        },
        {
          catalogNo: "TJCST1020-2D",
          catalogNo3D: "TJCST1020-3D",
          loopDia: "10",
          length: "20",
        },
        {
          catalogNo: "TJCST1030-2D",
          catalogNo3D: "TJCST1030-3D",
          loopDia: "10",
          length: "30",
        },
        {
          catalogNo: "TJCST1130-2D",
          catalogNo3D: "TJCST1130-3D",
          loopDia: "11",
          length: "30",
        },
        {
          catalogNo: "TJCST1230-2D",
          catalogNo3D: "TJCST1230-3D",
          loopDia: "12",
          length: "30",
        },
        {
          catalogNo: "TJCST1330-2D",
          catalogNo3D: "TJCST1330-3D",
          loopDia: "13",
          length: "30",
        },
        {
          catalogNo: "TJCST1430-2D",
          catalogNo3D: "TJCST1430-3D",
          loopDia: "14",
          length: "30",
        },
        {
          catalogNo: "TJCST1530-2D",
          catalogNo3D: "TJCST1530-3D",
          loopDia: "15",
          length: "30",
        },
        {
          catalogNo: "TJCST1630-2D",
          catalogNo3D: "TJCST1630-3D",
          loopDia: "16",
          length: "30",
        },
        {
          catalogNo: "TJCST1830-2D",
          catalogNo3D: "TJCST1830-3D",
          loopDia: "18",
          length: "30",
        },
        {
          catalogNo: "TJCST2030-2D",
          catalogNo3D: "TJCST2030-3D",
          loopDia: "20",
          length: "30",
        },
      ],
      features: [
        {
          title: "Complete Models and Precise Positioning",
          description:
            'Spiral and complex spring coils, from basket formation, filling to finishing, all specifications and models are available. It can match all 0.0165"-0.021" inner diameter micro-catheters on the market. The dual-Marker design can accurately locate the delivery rod and the position of the release point.',
          image: perdenser1,
        },
        {
          title: "Rigid and Flexible Conveying System",
          description:
            "The delivery rod has a segmented design with different hardness, the proximal end is more rigid and the distal end is softer. The lengthened soft section design and shorter release point structure ensure the push rod to pass through tortuous blood vessels. The strengthened proximal push rod design provides nearly 100% push force, making the surgeon handy.",
          image: perdenser2,
        },
        {
          title: "Tough Anti-Unspinning Power",
          description:
            "The polymer anti-untwisting system provides an anti-untwisting force of not less than 0.4N. It provides a strong guarantee for the secondary adjustment in the operation.",
          image: perdenser3,
        },
        {
          title: "Soft Lead-in Ring",
          description:
            "The implantation section is made of platinum-tungsten alloy, with a smooth polymer ball cap which is flexible.",
          image: perdenser4,
        },
        {
          title: "Uniform and Dense Filling",
          description:
            "The optimized O open loop design can fit an aneurysm of any shape at random turning points. The spring coils spread out evenly in 360 degrees to construct a stable basket frame. Fully capture the space for centripetal filling layer by layer and finally achieve the ideal dense embolism.",
          image: perdenser5,
        },
        {
          title: "Safe and Reliable Instant Release System",
          description:
            "The release point adopts advanced polymer wire instant fuse technology to achieve second release. The shape of the freed tail is smooth and soft, and there is no additional chemical residue. The operation process is simple, safe, stable, and controllable!",
          image: perdenser6,
        },
      ],
    },
    freepass: {
      title: "Freepass®",
      subtitle: "Self-Expanding Nitinol Stent",
      description: "Microcatheter",
      specs: [
        {
          catalogNo: "TJMC10",
          effectiveLength: "150",
          catheterProximalOD: "2.2F/0.73mm",
          catheterDistalOD: "1.8F/0.60mm",
          flexibleTipLength: "50",
          catheterTipOD: "0.015",
          tipShape: "Straight, Steam Shapeable",
          markers: "2 markers, 3cm",
        },
        {
          catalogNo: "TJMC14",
          effectiveLength: "150",
          catheterProximalOD: "2.3F/0.76mm",
          catheterDistalOD: "1.9F/0.63mm",
          flexibleTipLength: "50",
          catheterTipOD: "0.0165",
          tipShape: "Straight, Steam Shapeable",
          markers: "2 markers, 3cm",
        },
        {
          catalogNo: "TJMC16",
          effectiveLength: "150",
          catheterProximalOD: "2.8F/0.93mm",
          catheterDistalOD: "2.3F/0.76mm",
          flexibleTipLength: "50",
          catheterTipOD: "0.021",
          tipShape: "Straight, Steam Shapeable",
          markers: "2 markers, 3cm",
        },
        {
          catalogNo: "TJMC18",
          effectiveLength: "140",
          catheterProximalOD: "2.8F/0.93mm",
          catheterDistalOD: "2.5F/0.83mm",
          flexibleTipLength: "30",
          catheterTipOD: "0.027",
          tipShape: "Straight, Steam Shapeable",
          markers: "1 marker",
        },
      ],
      features: [
        {
          title: "Good Head-End Shaping Ability",
          description:
            "The outer layer is covered with a reasonable thickness of thermoplastic resin which has good shape retention during the operation. The doctor can perform two or more times of shaping according to the actual situation.",
          image: freepass1,
        },
        {
          title: "Good and Reliable Support Effect",
          description:
            "The distal soft section is designed with a multi-level hardness gradient to provide the required supporting force at the neck of the aneurysm. It can stably maintain the shape of the tube and help overcome the kickback force during the release of the coil.",
          image: freepass2,
        },
        {
          title: "Flexible Three-Layer Composite Structure",
          description:
            "The pipe body is divided into a thermoplastic resin outer layer, a metal support layer, and a PTFE inner lining layer. It is soft and tough as a whole and has a high static pressure resistance of 600PSI (4127KPa).",
          image: freepass3,
        },
      ],
    },
  };

  const handleDownload = () => {
    if (selectedProduct === "perrdenser") {
      // Prepare table data for Perdenser
      const tableData1 = [
        // Group 1 header row
        [
          "Catalogue No. Helical (2D)",
          "Catalogue No. Complex (3D)",
          "Loop Dia. (mm)",
          "Length (cm)",
        ],
        // Group 1 data
        ...products[selectedProduct].specs.map((spec) => [
          spec.catalogNo,
          spec.catalogNo3D,
          spec.loopDia,
          spec.length,
        ]),
      ];

      const tableData2 = [
        // Group 2 header row
        [
          "Catalogue No. Helical (2D)",
          "Catalogue No. Complex (3D)",
          "Loop Dia. (mm)",
          "Length (cm)",
        ],
        // Group 2 data
        ...products[selectedProduct].specs2.map((spec) => [
          spec.catalogNo,
          spec.catalogNo3D,
          spec.loopDia,
          spec.length,
        ]),
      ];

      // Create Excel workbook
      const wb = XLSX.utils.book_new();

      // Create separate sheets for each group
      const ws1 = XLSX.utils.aoa_to_sheet(tableData1);
      const ws2 = XLSX.utils.aoa_to_sheet(tableData2);

      // Add sheets to workbook
      XLSX.utils.book_append_sheet(wb, ws1, "Group 1 (1.5-4mm)");
      XLSX.utils.book_append_sheet(wb, ws2, "Group 2 (4.5-20mm)");

      // Download Excel file
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const data = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      saveAs(data, `${products[selectedProduct].title}_Specifications.xlsx`);
    } else if (selectedProduct === "freepass") {
      // Prepare table data for Freepass
      const tableData = [
        // Header row
        [
          "Catalogue No.",
          "Effective Length (cm)",
          "Catheter Proximal O.D.",
          "Catheter Distal O.D.",
          "Flexible Tip Length (cm)",
          "Catheter Tip O.D.",
          "Tip Shape",
          "Markers",
        ],
        // Product data
        ...products[selectedProduct].specs.map((spec) => [
          spec.catalogNo,
          spec.effectiveLength,
          spec.catheterProximalOD,
          spec.catheterDistalOD,
          spec.flexibleTipLength,
          spec.catheterTipOD,
          spec.tipShape,
          spec.markers,
        ]),
      ];

      // Create Excel workbook
      const ws = XLSX.utils.aoa_to_sheet(tableData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Specifications");

      // Download Excel file
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const data = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      saveAs(data, `${products[selectedProduct].title}_Specifications.xlsx`);
    } else {
      // Existing download function for Proender
      const tableData = [
        // Header row
        [
          "Catalogue No.",
          "Filter Diameter (mm)",
          "Guidewire Length (cm)",
          "Guidewire Compatibility",
          "Delivery Sheath O.D.",
          "Retrieval Sheath O.D.",
          "Guiding Catheter Compatibility (min.)",
        ],
        // Product data
        ...products[selectedProduct].specs.map((spec) => [
          spec.catalogNo,
          spec.diameter,
          spec.length,
          spec.compatibility,
          spec.sheath,
          spec.retrievalSheath,
          spec.guidingCatheter,
        ]),
      ];

      // Create Excel workbook
      const ws = XLSX.utils.aoa_to_sheet(tableData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Specifications");

      // Download Excel file
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const data = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      saveAs(data, `${products[selectedProduct].title}_Specifications.xlsx`);
    }
  };

  const handleDownloadPDF = (type) => {
    let pdfUrl;
    switch (selectedProduct) {
      case "proender":
        pdfUrl = type === "brochure" ? proenderPDF : proenderIFUPDF;
        break;
      case "perrdenser":
        pdfUrl = type === "brochure" ? perdenserPDF : perdenserIFUPDF;
        break;
      case "freepass":
        pdfUrl = type === "brochure" ? freepassPDF : freepassIFUPDF;
        break;
      default:
        return;
    }

    // Download PDF
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${products[selectedProduct].title}_${
          type === "brochure" ? "Product_Information" : "IFU"
        }.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      });
  };

  return (
    <div className="page-container">
      <motion.section
        className="product-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Our Products
        </motion.h1>
        <motion.p
          className="product-subtitle"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Innovative Endovascular Treatment Solutions
        </motion.p>
      </motion.section>

      <section className="product-content">
        <div className="products-nav">
          {Object.keys(products).map((productKey) => (
            <button
              key={productKey}
              className={`product-nav-button ${
                selectedProduct === productKey ? "active" : ""
              }`}
              onClick={() => setSelectedProduct(productKey)}
            >
              {products[productKey].title}
            </button>
          ))}
        </div>

        <div className="product-description">
          <p>{products[selectedProduct].description}</p>
        </div>

        <div className="product-tabs">
          <button
            className={`tab-button ${
              activeTab === "specifications" ? "active" : ""
            }`}
            onClick={() => setActiveTab("specifications")}
          >
            Product Specifications
          </button>
          <button
            className={`tab-button ${activeTab === "features" ? "active" : ""}`}
            onClick={() => setActiveTab("features")}
          >
            Features
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "specifications" && (
            <motion.div
              key={selectedProduct + "-specs"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="specifications-table"
            >
              <div className="table-header">
                <motion.button
                  className="download-button"
                  onClick={() => handleDownloadPDF("brochure")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Brochure
                </motion.button>
                <motion.button
                  className="download-button"
                  onClick={() => handleDownloadPDF("ifu")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download IFU
                </motion.button>
              </div>
              {selectedProduct === "perrdenser" ? (
                <>
                  <table>
                    <thead>
                      <tr>
                        <th>Catalogue No. Helical (2D)</th>
                        <th>Catalogue No. Complex (3D)</th>
                        <th>Loop Dia. (mm)</th>
                        <th>Length (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getCurrentItems([
                        ...products[selectedProduct].specs,
                        ...products[selectedProduct].specs2,
                      ]).map((spec, index) => (
                        <motion.tr
                          key={spec.catalogNo}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <td>{spec.catalogNo}</td>
                          <td>{spec.catalogNo3D}</td>
                          <td>{spec.loopDia}</td>
                          <td>{spec.length}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Sayfalama kontrolleri */}
                  <div className="pagination-controls">
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                      className="pagination-button"
                    >
                      Previous
                    </button>
                    <span className="page-info">
                      Page {currentPage} /{" "}
                      {totalPages([
                        ...products[selectedProduct].specs,
                        ...products[selectedProduct].specs2,
                      ])}
                    </span>
                    <button
                      onClick={() =>
                        setCurrentPage((prev) =>
                          Math.min(
                            prev + 1,
                            totalPages([
                              ...products[selectedProduct].specs,
                              ...products[selectedProduct].specs2,
                            ])
                          )
                        )
                      }
                      disabled={
                        currentPage ===
                        totalPages([
                          ...products[selectedProduct].specs,
                          ...products[selectedProduct].specs2,
                        ])
                      }
                      className="pagination-button"
                    >
                      Next
                    </button>
                  </div>

                  <p
                    style={{
                      marginTop: "1rem",
                      fontSize: "0.9rem",
                      color: "#666",
                    }}
                  >
                    * Minimal microcatheter inner diameter compatibility:
                    0.0165"
                  </p>
                </>
              ) : selectedProduct === "proender" ? (
                <>
                  <table>
                    <thead>
                      <tr>
                        <th>Catalogue No.</th>
                        <th>Filter Diameter (mm)</th>
                        <th>Guidewire Length (cm)</th>
                        <th>Guidewire Compatibility</th>
                        <th>Delivery Sheath O.D.</th>
                        <th>Retrieval Sheath O.D.</th>
                        <th>Guiding Catheter Compatibility (min.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products[selectedProduct].specs.map((spec, index) => (
                        <motion.tr
                          key={spec.catalogNo}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <td>{spec.catalogNo}</td>
                          <td>{spec.diameter}</td>
                          <td>{spec.length}</td>
                          <td>{spec.compatibility}</td>
                          <td>{spec.sheath}</td>
                          <td>{spec.retrievalSheath}</td>
                          <td>{spec.guidingCatheter}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </>
              ) : (
                // Freepass için mevcut tablo yapısı
                <>
                  <table>
                    <thead>
                      <tr>
                        <th>Catalogue No.</th>
                        <th>Effective Length (cm)</th>
                        <th>Catheter Proximal O.D.</th>
                        <th>Catheter Distal O.D.</th>
                        <th>Flexible Tip Length (cm)</th>
                        <th>Catheter Tip O.D.</th>
                        <th>Tip Shape</th>
                        <th>Markers</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products[selectedProduct].specs.map((spec, index) => (
                        <motion.tr
                          key={spec.catalogNo}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <td>{spec.catalogNo}</td>
                          <td>{spec.effectiveLength}</td>
                          <td>{spec.catheterProximalOD}</td>
                          <td>{spec.catheterDistalOD}</td>
                          <td>{spec.flexibleTipLength}</td>
                          <td>{spec.catheterTipOD}</td>
                          <td>{spec.tipShape}</td>
                          <td>{spec.markers}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
            </motion.div>
          )}

          {activeTab === "features" && (
            <motion.div
              key={selectedProduct + "-features"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="features-section"
            >
              {selectedProduct === "proender" && (
                <motion.div
                  className="features-cover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={proender5} alt="Proender Features" />
                  <h2 className="cover-title">
                    Proender® Disposable Embolic Protection Device
                  </h2>
                </motion.div>
              )}
              {selectedProduct === "perrdenser" && (
                <motion.div
                  className="features-cover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={perdenser7} alt="Perdenser Features" />
                </motion.div>
              )}
              {selectedProduct === "freepass" && (
                <motion.div
                  className="features-cover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={freepass4} alt="Freepass Features" />
                  <h2 className="cover-title">
                    Freepass® Self-Expanding Nitinol Stent
                  </h2>
                </motion.div>
              )}
              <div className="features-grid">
                {products[selectedProduct].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="feature-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {feature.image && feature.image !== perdenser7 && (
                      <div className="feature-image">
                        <img src={feature.image} alt={feature.title} />
                      </div>
                    )}
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          className="cta-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-content">
            <h2>For More Information</h2>
            <p>
              Please contact us for detailed information about our products and
              technical documents.
            </p>
            <Link to="/contact" className="cta-button">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Products;
