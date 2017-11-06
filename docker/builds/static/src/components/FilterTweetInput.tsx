import * as React from 'react';
import {
    Well,
    FormGroup,
    ControlLabel,
    FormControl,
    OverlayTrigger,
    Popover,
    Badge
} from 'react-bootstrap';

export interface Props {
    onKeyDown: (value: string) => void;
}

const filterTweetsTooltip = (
    <Popover id="filter-input-tooltip">
        Start typing in words to match text in the tweets.
        <br />
        If there is a match then the matched text will be highlighted.
        All other tweets without matches will be hidden.
    </Popover>
);

export const FilterTweetInput: React.SFC<Props> = ({ onKeyDown }) => (
    <Well bsSize="large" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 10, right: 10 }}>
            <OverlayTrigger
                placement="left"
                overlay={filterTweetsTooltip}
                trigger={['click', 'hover', 'focus']}
                delayHide={4000}
            >
                <Badge>?</Badge>
            </OverlayTrigger>
        </div>
        <FormGroup>
            <ControlLabel>
                Tweet Content Filter & Highlight
            </ControlLabel>
            <FormControl
                type="text"
                placeholder="Highlight text in tweet content"
                onChange={(e) => onKeyDown((e.target as any).value)}
            />
        </FormGroup>
    </Well>
);

export default FilterTweetInput;
