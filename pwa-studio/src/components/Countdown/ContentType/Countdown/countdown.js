import React from 'react';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import { arrayOf, bool, shape, string } from 'prop-types';

import defaultClasses from './countdown.module.css';
import { FormattedMessage } from 'react-intl';
import { useCountdown } from '../../../../talons/Countdown/useCountdown';

const Countdown = props => {
    const {
        targetDate,
        textAlign,
        border,
        borderColor,
        borderWidth,
        borderRadius,
        isHidden,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        cssClasses
    } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    const { days, hours, minutes, seconds } = useCountdown({ targetDate });

    const formStyles = {
        textAlign,
        border,
        borderColor,
        borderWidth,
        borderRadius,
        isHidden,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft
    };

    return (
        <div style={formStyles}>
            <div className={classes.wrapper}>
                <div className={classes.field}>
                    <div className="days">{days}</div>
                    <div className="separator">:</div>
                    <div className="hours">{hours}</div>
                    <div className="separator">:</div>
                    <div className="min">{minutes}</div>
                    <div className="separator">:</div>
                    <div className="sec">{seconds}</div>
                    <div className={classes.label}>
                        <FormattedMessage
                            id="countdown.days"
                            defaultMessage="days"
                        />
                    </div>
                    <div />
                    <div className={classes.label}>
                        <FormattedMessage
                            id="countdown.hours"
                            defaultMessage="hours"
                        />
                    </div>
                    <div />
                    <div className={classes.label}>
                        <FormattedMessage
                            id="countdown.minutes"
                            defaultMessage="min"
                        />
                    </div>
                    <div />
                    <div className={classes.label}>
                        <FormattedMessage
                            id="countdown.seconds"
                            defaultMessage="sec"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

Countdown.propTypes = {
    textAlign: string,
    border: string,
    borderColor: string,
    borderWidth: string,
    borderRadius: string,
    isHidden: bool,
    marginTop: string,
    marginRight: string,
    marginBottom: string,
    marginLeft: string,
    paddingTop: string,
    paddingRight: string,
    paddingBottom: string,
    paddingLeft: string,
    cssClasses: arrayOf(string),
    classes: shape({ wrapper: string, field: string, label: string })
};

Countdown.defaultProps = {};
export default Countdown;
