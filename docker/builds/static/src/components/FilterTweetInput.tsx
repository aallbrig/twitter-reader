import * as React from 'react';
import { Well, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export interface Props {
    onKeyDown: (value: string) => void;
}

export const FilterTweetInput: React.SFC<Props> = ({ onKeyDown }) => (
    <Well bsSize="large">
        <FormGroup>
            <ControlLabel>
                Tweet Filter
            </ControlLabel>
            <FormControl
                type="text"
                placeholder="Filter tweets"
                onKeyDown={(e) => onKeyDown((e.target as any).value)}
            />
        </FormGroup>
    </Well>
);

export default FilterTweetInput;
