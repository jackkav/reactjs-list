
import React from 'react';
import { ProgressBar } from 'react-bootstrap';
const ItemProgress = ({content}) => (
<ProgressBar now={70} label="%(percent)s%"></ProgressBar>);
export default ItemProgress;
