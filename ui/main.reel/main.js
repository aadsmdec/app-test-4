/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    
    handleHatAction: {
        value: function(event) {
            return this.templateObjects.text.value = "Do you like my fancy hat?";
        }
    }
    
});
