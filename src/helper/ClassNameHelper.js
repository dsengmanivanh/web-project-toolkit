module.exports = function(conditionalClasses) {
    return Object.keys(conditionalClasses).map(function(key) {
        const value = conditionalClasses[key];
        return value ? key : "";
    }).filter(function(className) {
        return className && className.length;
    }).join(" ");
}
