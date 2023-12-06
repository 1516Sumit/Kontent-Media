// import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import '../App.css'
function Faqs() {
  return (
    <div
      style={{
        backgroundColor: "black",
        textAlign: "left",
        paddingLeft:"6%",
        paddingRight:"8%",
        paddingBottom:"6%"
      }} className="w-screen h-auto pb-10 section md:pt-52"
    >
      <h2
        className="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
        style={{ color: "#FFD93D", marginBottom: 20, paddingTop:10 }}
      >
        Frequently Asked Questions
      </h2>

      <hr style={{ borderColor: "gray", borderWidth: 1 }} />
      <Accordion style={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#7F00FF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Where can I watch?</Typography>
        </AccordionSummary>
        <AccordionDetails className="h-auto">
          <Typography style={{ color: "grey" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr style={{ borderColor: "gray", borderWidth: 1 }} />
      <Accordion style={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#7F00FF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Mauris id nibh eu fermentum mattis purus?</Typography>
        </AccordionSummary>
        <AccordionDetails className="h-auto">
          <Typography style={{ color: "grey" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <hr style={{ borderColor: "gray", borderWidth: 1 }} />
      <Accordion style={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#7F00FF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Eros imperdiet rhoncus?</Typography>
        </AccordionSummary>
        <AccordionDetails className="h-auto">
          <Typography style={{ color: "grey" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <hr style={{ borderColor: "gray", borderWidth: 1 }} />
      <Accordion style={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#7F00FF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Fames imperdiet quam fermentum?</Typography>
        </AccordionSummary>
        <AccordionDetails className="h-auto">
          <Typography style={{ color: "grey" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <hr style={{ borderColor: "gray", borderWidth: 1 }} />
      <Accordion style={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#7F00FF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Varius vitae, convallis amet lacus sit aliquet nibh?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="h-auto">
          <Typography style={{ color: "grey" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <hr style={{ borderColor: "gray", borderWidth: 1 }} />
      <Accordion style={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#7F00FF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Torto nisl pellentesque sit quis orci dolor?</Typography>
        </AccordionSummary>
        <AccordionDetails className="h-auto">
          <Typography style={{ color: "grey" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr style={{ borderColor: "gray", borderWidth: 1 }} />
      <Accordion style={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#7F00FF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Vestibulum mauris auris elementum proin amet auctor ipsum nibh
            sollictudin?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="h-auto">
          <Typography style={{ color: "grey" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Faqs;