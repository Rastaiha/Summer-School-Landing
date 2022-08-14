import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { withStyles } from '@mui/styles';
import React from 'react';

// import questions from './Questions';
import { BorderRight } from "@mui/icons-material";

const useStyles = makeStyles(() => ({
  text: {
    textAlign: 'justify',
    textJustify: 'inter-word',
    fontFamily: "IRANSansX",
    fontWeight: 500,
    fontSize: "16px",
    color: "#D6D5D5",
  },
}));

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: 'block',
  },
}))(MuiAccordionDetails);

const FAQ = ({ questions }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return questions.map((question, index) => (
    <Accordion
      key={index}
      square
      expanded={expanded === "panel" + index}
      onChange={handleChange("panel" + index)}
      sx={{
        backgroundColor: "#113754",
        borderRadius: "20px",
        marginBottom: .5,
        border: 2,
        borderColor: "#D6D5D5",
      }}
    >
      <AccordionSummary
        aria-controls="panel1d-content"
        id="panel1d-header"
        sx={{
          backgroundColor: "#113754",
          borderRadius: "20px",
          borderBottom: 2,
          borderColor: "#D6D5D5",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "IRANSansX",
            fontWeight: 500,
            fontSize: "16px",
            color: "#D6D5D5",
          }}
        >
          {question.text}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          borderBottom: 2,
          borderColor: "#D6D5D5",
          borderRadius: "20px"
        }}
      >
        <Typography className={classes.text}>{question.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  ));
};

export default FAQ;
