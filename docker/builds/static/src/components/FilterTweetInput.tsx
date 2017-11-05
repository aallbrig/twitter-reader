import * as React from 'react';
import { Well, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export interface Props {}

export const FilterTweetInput: React.SFC<Props> = () => (
    <Well bsSize="large">
        <FormGroup>
            <ControlLabel>
                Tweet Filter
            </ControlLabel>
            <FormControl type="text" placeholder="Filter tweets"/>
        </FormGroup>
    </Well>
);

export default FilterTweetInput;
