import DomHelper from "../helper/domHelper";
import UniqueId from "../service/uniqueId";

export default class AbstractItem {
    /**
     * @returns {string}
     */
    static stickyClassName() {
        return 'behavior-sticky';
    }

    /**
     * @param {object} parameters
     */
    constructor(parameters) {
        if (this.constructor === AbstractItem) {
            throw new TypeError('Abstract Class "AbstractItem" cannot be instantiated directly');
        }

        this.identifier = UniqueId.generate('item');
        this.position = typeof parameters.position !== 'undefined' ? parameters.position : {left: 0, top: 0};
        this.sticky = typeof parameters.sticky !== 'undefined' ? parameters.sticky : false;
        this.customClassName = typeof parameters.customClassName !== 'undefined' ? parameters.customClassName : null;
        this.globalSettings = {
            allowHtml: false
        }
    }

    /**
     * @param {object} settings
     */
    set applicationSettings(settings) {
        this.globalSettings = settings;
    }

    checkRequiredParameters(parameters, requiredParameters) {
        const parametersMap = new Map(Object.entries(parameters));
        const isParameterDefined = (name => parametersMap.has(name));

        requiredParameters.forEach((name) => {
            if (false === isParameterDefined(name)) {
                throw Error('Missing required parameter named "' + name + '"');
            }
        });
    }

    /**
     * @returns {HTMLElement}
     */
    createHotspotElement() {
        const element = DomHelper.createElement('div', {'class': 'hotspot icon-radio-checked'});
        element.setAttribute('data-for', this.identifier);
        var positionLeft = this.position.left;
        if (!/^(\d+)(px|%)$/.test(positionLeft)) {
          positionLeft += 'px';
        }
        element.style.left = positionLeft;

        var positionTop = this.position.top;
        if (!/^(\d+)(px|%)$/.test(positionTop)) {
          positionTop += 'px';
        }
        element.style.top = positionTop;

        return element;
    }

    /**
     * @returns {HTMLElement}
     */
    createItemElement() {
        let itemClass = 'item';
        if (this.sticky === true) {
            itemClass += ' ' + AbstractItem.stickyClassName();
        }

        if (typeof this.customClassName === 'string') {
            itemClass += ' ' + this.customClassName;
        }

        const element = DomHelper.createElement('div', {'class': itemClass});
        element.setAttribute('data-id', this.identifier);

        if (this.sticky === true) {
            const closeButton = DomHelper.createElement('div', {'class': 'close-button icon-cancel-circle'});
            element.appendChild(closeButton);
        }

        return element;
    }

    renderHtml() {
        throw Error('Render method not implemented');
    }
}
