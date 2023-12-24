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
        paddingLeft: "6%",
        paddingRight: "8%",
        paddingBottom: "6%"
      }} className="fade w-screen h-auto pb-10 md:pt-52"
    >
      <h2
        className="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
        style={{ color: "#FFD93D", marginBottom: 20, paddingTop: 10 }}
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
          <Typography>What level of customization do I have with the KONTENT EDIT plan?</Typography>
        </AccordionSummary>
        <AccordionDetails className="h-auto">
          <Typography style={{ color: "grey" }}>
            We have a higher degree of customization, You can provide specific instructions, preferences, and even reference materials to ensure that the final edit aligns perfectly with your brand and vision.
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
          <Typography> How long does it take to receive the edited videos?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="h-auto">
          <Typography style={{ color: "grey" }}>
            The turnaround time depends on the complexity and length of your content.We have a general timeline for reel edit is 24hrs and for youtube edits it’s 3 days. Rest assured, our team works efficiently to provide you with the edited videos within a reasonable timeframe.
            uspendisse
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
          <Typography>Can I request revisions after receiving the edited video?</Typography>
        </AccordionSummary>
        <AccordionDetails className="h-auto">
          <Typography style={{ color: "grey" }}>
          Absolutely! Your satisfaction is our priority. The KONTENT EDIT plan includes a revision process according to the sub-plan you choose, where you can provide feedback, and our editors will make the necessary adjustments.
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
          <Typography>Why Should I Choose KONTENT EDIT over a freelancer ?</Typography>
        </AccordionSummary>
        <AccordionDetails className="h-auto">
          <Typography style={{ color: "grey" }}>
          While freelancers are a valuable resource, choosing KONTENT EDIT over hiring an individual freelancer offers consistent quality, scalability, and reliable timelines.
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
          What if I have some custom demand like animated videos, ads, etc.?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="h-auto">
          <Typography style={{ color: "grey" }}>
          We cater all the custom demands separately, you can discuss your project with us over a call. 
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
          <Typography>When does my month start?</Typography>
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
            How many videos can we realistically do in the unlimited plan?
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