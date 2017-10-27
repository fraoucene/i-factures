const leftColum  = 450;
const margin  = 5;
export const Theme = {
    colors: {
        nav: '#E91E63',
        noValid: '#ff9999',
        valid: '#5be568',
    },
    dimensions: {
        leftCol:  leftColum + 'px',
        rightCol: 'calc(100% - ' + leftColum + 'px)',
        mapLeft: (leftColum + margin) + 'px',
        mapWidth: 'calc(100% - ' + (leftColum + margin) + 'px)',
    }
};