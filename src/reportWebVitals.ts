import { Metric } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: (metric: Metric) => void) => {
    if(onPerfEntry && onPerfEntry instanceof Function){
        import('web-vitals').then(({onLCP, onCLS, onFCP, onTTFB, onINP}) => {
            onLCP(onPerfEntry);
            onCLS(onPerfEntry);
            onINP(onPerfEntry);
            onFCP(onPerfEntry);
            onTTFB(onPerfEntry);
        });
    }
};

export default reportWebVitals;
