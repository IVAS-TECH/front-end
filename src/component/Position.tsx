import React from 'react';

const styles: Record<'outer' | 'horizontalInner' | 'verticalInner', React.CSSProperties> = {
    outer: {
        width: 110,
        height: 70,
        borderStyle: 'solid',
        borderWidth: 4
    },
    horizontalInner: {
        width: 60,
        height: 33,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        borderStyle: 'solid',
        borderWidth: 3
    },
    verticalInner: {
        width: 38,
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 7,
        borderStyle: 'solid',
        borderWidth: 3
    }
};

const Horizontal: React.FC<{}> = () => {
    return (
        <div style={styles.outer}>
            <div style={styles.horizontalInner} />
        </div>
    );
};

const Vertical: React.FC<{}> = () => {
    return (
        <div style={styles.outer}>
            <div style={styles.verticalInner} />
        </div>
    );
};

const horizontal = <Horizontal />;

const vertical = <Vertical />;

export { horizontal, vertical };