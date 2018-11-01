import * as React from 'react';
import { Props } from 'react-select/lib/Select';
import RSSelect, { components } from 'react-select';
import './select.scss';

const DropdownIndicator = components.DropdownIndicator as any;
export const Select = ({ components: componentsProp, ...props }: Props<any>) => <RSSelect
    isSearchable={false}
    classNamePrefix="select-dropdown"
    className="select-dropdown"
    components={{
        IndicatorSeparator: null,
        DropdownIndicator: (props) => <DropdownIndicator {...props}>
            <div />
        </DropdownIndicator>,
        ...componentsProp
    }}
    {...props}
/>;
