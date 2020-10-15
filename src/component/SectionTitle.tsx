import React from 'react';
import Typography from "@material-ui/core/Typography";

interface SectionTitleProps {
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
    <Typography
        variant="h4"
        align="left"
        gutterBottom
        color="textPrimary" >
        {title}
    </Typography>
);

export default SectionTitle;