// import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import '../App.css'
function Faqs({ type }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        textAlign: "left",
        paddingLeft: "6%",
        paddingRight: "8%",
        paddingBottom: "6%"
      }} className="fade w-screen h-auto pb-10"
    >
      <h2
        className="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
        style={{ color: "#FFD93D", marginBottom: 20, paddingTop: 10 }}
      >
        Frequently Asked Questions
      </h2>

      <hr style={{ borderColor: "gray", borderWidth: 1 }} />
      <section className={type === "kontentedit" ? " " : "hidden"}>
        <Accordion style={{ backgroundColor: "black", color: "white" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#7F00FF" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What level of customization do I have with the KONTENT EDIT plan?</Typography>
          </AccordionSummary>
          <AccordionDetails className="h-auto">
            <Typography style={{ color: "#d6cbcb" }}>
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
            <Typography style={{ color: "#d6cbcb" }}>
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
            <Typography style={{ color: "#d6cbcb" }}>
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
            <Typography style={{ color: "#d6cbcb" }}>
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
            <Typography style={{ color: "#d6cbcb" }}>
              We cater all the custom demands separately, you can discuss your project with us over a call.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </section>

      <section className={type === "kontentpod" ? " " : "hidden"}>
        <Accordion style={{ backgroundColor: "black", color: "white" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#7F00FF" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Where will I find studios for Podcast Shoot?</Typography>
          </AccordionSummary>
          <AccordionDetails className="h-auto">
            <Typography style={{ color: "#d6cbcb" }}>
              If you sign-up with Leverage Pro plan of Kontent Pod, We will assist you with our nearest studio in your city.Currently, This solution is available only in India & UAE.
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
            <Typography> How long does it take to receive the podcast edits?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="h-auto">
            <Typography style={{ color: "#d6cbcb" }}>
              Podcast editing takes way more time than regular edits as this is lengthy , generally we deliver podcast edits in 3-4 business days and podcast clips after that.
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
            <Typography style={{ color: "#d6cbcb" }}>
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
            <Typography>Why Should I Choose KONTENT POD over a normal editor ?</Typography>
          </AccordionSummary>
          <AccordionDetails className="h-auto">
            <Typography style={{ color: "#d6cbcb" }}>
              We have a team of expert podcast editors, storytellers and social media ninjas, they know what will work, what not. We will smartly spot viral clips from your podcast and you will enjoy the fame you never expected.
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
              What if I have some custom demand like I need more reels from a single podcast than offered.?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="h-auto">
            <Typography style={{ color: "#d6cbcb" }}>
              We cater all the custom demands separately, you can discuss your project with us over a call.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </section>

      <section className={type === "kontents2s" ? " " : "hidden"}>
        <Accordion style={{ backgroundColor: "black", color: "white" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#7F00FF" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Why should we go for Kontent S2S if we can also do this all ?</Typography>
          </AccordionSummary>
          <AccordionDetails className="h-auto">
            <Typography style={{ color: "#d6cbcb" }}>
              Purpose of Kontent S2S is to let brands focus on their core business, doing all this will need a full time team of 10 people, expensive equipment, a lot of time of regular employees and your brand will end up spending more with diverted focus from core business as well.
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
            <Typography> How long does it take you to deliver videos in Kontent S2S?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="h-auto">
            <Typography style={{ color: "#d6cbcb" }}>
              It depends upon the kind of project, but at a minimum we can say it will take 30-45 days to deliver everything from script to screen.
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
            <Typography>Can I request revisions after production of the content ?</Typography>
          </AccordionSummary>
          <AccordionDetails className="h-auto">
            <Typography style={{ color: "#d6cbcb" }}>
              You can request as many revisions as you want in the scripting and editing phase but once we finalize the script and are done with shooting then reversing this will cost an additional amount.
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
            <Typography>How long will it take to build our organic distribution ?</Typography>
          </AccordionSummary>
          <AccordionDetails className="h-auto">
            <Typography style={{ color: "#d6cbcb" }}>
              According to our experience , it takes 4-8 months of consistent posting of quality videos to create a significant base.You shouldn’t expect results in 1 or 2 months of Kontent S2S.
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
              What type of videos do you provide in Kontent S2S?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="h-auto">
            <Typography style={{ color: "#d6cbcb" }}>
              Instagram Reels, Youtube Videos , In-app Videos, Product Demos, Social Media Ads, A complete show on your youtube channel we do them all. Also,We cater all the custom demands separately, you can discuss your project with us over a call.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </section>
    </div>
  );
}

export default Faqs;